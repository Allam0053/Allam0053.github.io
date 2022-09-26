/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * function Tree
 *
 * visit()
 * |- handleGetVisit()
 *   |- getVisitDocument()
 * |- handlePostVisit()
 *   |- getIpFromRequest()
 *   |- upsertVisitDocument()
 */

import { NextApiRequest, NextApiResponse } from 'next';

import { getVisitDocument, upsertVisitDocument } from '@/lib/fauna';

import { VisitUserT } from '@/types/fauna';

export default async function visit(req: NextApiRequest, res: NextApiResponse) {
  try {
    // /api/visit?slug=b_[slug]
    if (req.method === 'GET') {
      return handleGetVisit(req, res);
    }

    // /api/visit post
    /**
     * @param visitUser - a stringify of a VisitUserT
     *
     */
    if (req.method === 'POST') {
      return handlePostVisit(req, res);
    }
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res
      .status(500)
      .json({ message: error.message ?? 'Internal Server Error' });
  }
}

async function handleGetVisit(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.slug as string;

  const data = await getVisitDocument(slug);

  if (typeof data === 'boolean') {
    return res.status(404).json({
      totalVisit: 0,
      message: 'data not found',
    });
  }

  // const totalVisit = data?.users.length;
  return res.status(200).json({
    data,
  });
}

async function handlePostVisit(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.slug as string;

  const ipAddress = getIpFromRequest(
    req.headers['x-forwarded-for'] || '0.0.0.0'
  );

  const visitUser: VisitUserT = {
    ip: ipAddress,
    href: req.body.href,
    timeElapsed: req.body.timeElapsed as number,
    createdAt: new Date(),
    updatedAt: new Date(),
  } as VisitUserT;
  // console.log(visitUser);

  const data = await upsertVisitDocument(slug, visitUser);

  if (typeof data === 'boolean') {
    return res.status(404).json({
      totalVisit: 0,
      message: 'data not found',
    });
  }

  // const totalVisit = Object.keys(?.users).length;
  return res.status(201).json({
    data,
  });
}

function getIpFromRequest(ipAddress: string | string[]) {
  let catIpAddress = '';

  // concantinate all ip address from string[]
  if (typeof ipAddress === 'object') {
    catIpAddress = ipAddress.reduce(
      (acc: string, curr: string) => `${acc},${curr}`
    ) as string;
    return catIpAddress;
  }

  return ipAddress;
}

// export function getPageMeta(slug: string) {

// }

/*
get likes by slug
Get(
  Match( Index( "get_likes_by_slug" ), "ITSGRAM" )
)
*/

/**
create new document

Create( 'likes', 
  {
    data: {
      slug: "webnpa",
      ratingTotal: 0,
      users: [],
    }
  }
)
 */

/**
check if document exists and return it if exist
If(
  Exists( Match( Index( "get_likes_by_slug" ), slug ) ),
  Get( Match( Index( "get_likes_by_slug" ), slug ) ),
  false
),
 */

/**
adding new like
Update(
  Select("ref", Get(Match(Index("get_likes_by_slug"), "ITSGRAM"))), 
  {
    data: {
      users: Append({
        ip: "192.168.0.4",
        rating: 5,
        share: true,
        createdAt: "2022-08-23T05:24:34.597Z",
        updatedAt: "2022-08-23T05:25:17.392Z"
      },
      Select( "users", Select("data", Get(Match(Index("get_likes_by_slug"), "ITSGRAM"))) ) 
      )
    }
  }
)

adding new visitor
Update(
  Select("ref", Get(Match(Index("get_visits_by_path"), "/"))), 
  {
    data: {
      users: Append({
        "ip": "192.168.0.6",
        "timeElapsed": 31,
        "href": "instagram",
        "createdAt": "2022-08-23T05:24:34.597Z",
        "updatedAt": "2022-08-23T05:25:17.392Z"
      },
      Select( "users", Select("data", Get(Match(Index("get_visits_by_path"), "/"))) ) 
      )
    }
  }
)
 */
