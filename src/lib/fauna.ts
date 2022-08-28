import faunadb, { query as q } from 'faunadb';

import {
  LikeDocumentT,
  RatingUserT,
  ResVisitDocumentT,
  VisitDocumentT,
  VisitUserT,
} from '@/types/fauna';

const faunaClient = new faunadb.Client({
  secret: process.env.FAUNA_SECRET as string,
  domain: process.env.FAUNADB_ENDPOINT as string,
});

export const getLikeDocument = async (
  slug: string
): Promise<LikeDocumentT | false> => {
  const data = await faunaClient.query<LikeDocumentT>(
    q.Let(
      {
        match: q.Match(q.Index('get_likes_by_slug'), slug),
        contentExists: q.Exists(q.Var('match')),
      },
      q.If(q.Var('contentExists'), q.Get(q.Var('match')), false)
    )
  );

  return data;
};

export const upsertLikeDocument = async (
  slug: string,
  likeUser: RatingUserT
): Promise<LikeDocumentT | false> => {
  const data = await faunaClient.query<LikeDocumentT>(
    q.Let(
      {
        match: q.Match(q.Index('get_likes_by_slug'), slug),
        contentExists: q.Exists(q.Var('match')),
      },
      q.If(
        q.Var('contentExists'),
        q.Update(q.Select('ref', q.Get(q.Var('match'))), {
          data: {
            users: { [`${likeUser.ip}`]: likeUser },
          },
        }),
        q.Create(q.Collection('likes'), {
          data: {
            slug: slug,
            ratingTotal: likeUser.rating,
            users: { [`${likeUser.ip}`]: likeUser },
          },
        })
      )
    )
  );

  return data;
};

export const getVisitDocument = async (
  path: string
): Promise<VisitDocumentT | false> => {
  const data = await faunaClient.query<ResVisitDocumentT>(
    q.Let(
      {
        match: q.Match(q.Index('get_visits_by_path'), path),
        contentExists: q.Exists(q.Var('match')),
      },
      q.If(q.Var('contentExists'), q.Get(q.Var('match')), false)
    )
  );

  return data.data;
};

/**
 * TODO: add "update user record if exist"
 */
export const upsertVisitDocument = async (
  path: string,
  visitUser: VisitUserT
): Promise<VisitDocumentT | false> => {
  const { ip, timeElapsed, href, createdAt, updatedAt } =
    castToDBType(visitUser);

  // console.log(timeElapsed);

  const data = await faunaClient.query<ResVisitDocumentT>(
    q.Let(
      {
        match: q.Match(q.Index('get_visits_by_path'), path),
        contentExists: q.Exists(q.Var('match')),
        meanTimeElapsed: q.Select(
          ['data', 'meanTimeElapsed'],
          q.Get(q.Var('match'))
        ),
        visitCount: q.Select(['data', 'visitCount'], q.Get(q.Var('match'))),
      },
      q.If(
        q.Var('contentExists'),
        q.Update(q.Select('ref', q.Get(q.Var('match'))), {
          data: {
            visitCount: q.Add(q.Var('visitCount'), 1),
            meanTimeElapsed: q.Divide(
              q.Add(q.Var('meanTimeElapsed'), q.ToInteger(timeElapsed)),
              q.Add(q.Var('visitCount'), q.ToInteger(1))
            ),
            users: {
              [`${ip}`]: {
                ip,
                timeElapsed,
                href,
                createdAt,
                updatedAt,
              },
            },
          },
        }),
        q.Create(q.Collection('visits'), {
          data: {
            path: path,
            visitCount: 1,
            users: {
              [`${ip}`]: {
                ip,
                timeElapsed,
                href,
                createdAt,
                updatedAt,
              },
            },
          },
        })
      )
    )
  );

  return data.data;
};

/**
 *
 * @param visitUser
 * @returns visitUser object a compatible type for fauna
 */
function castToDBType(visitUser: VisitUserT) {
  return {
    ip: visitUser.ip as string,
    timeElapsed: visitUser.timeElapsed as number,
    href: visitUser.href as string,
    createdAt: visitUser.createdAt.toISOString() as string,
    updatedAt: visitUser.updatedAt.toISOString() as string,
  };
}

/***
 * if like doc exist
 *   add like
 *
 * else
 *   create doc
 */
