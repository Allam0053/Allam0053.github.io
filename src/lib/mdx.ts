/* eslint-disable @typescript-eslint/no-explicit-any */
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import _ from 'lodash';
import { bundleMDX } from 'mdx-bundler';
import { join } from 'path';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { mapSync } from '@/lib/helper';
import { getTags, sortByDate } from '@/lib/mdx-client';

import {
  BlogFrontmatter,
  ContentType,
  ExpFrontmatter,
  Frontmatter,
  FrontmatterWithDate,
  FrontmatterWithTags,
  PickFrontmatter,
  ProjectFrontmatter,
} from '@/types/frontmatters';

export async function getFiles(type: ContentType) {
  return readdirSync(join(process.cwd(), 'src', 'contents', type));
}

export async function getFileBySlug(type: ContentType, slug: string) {
  const source = await (slug
    ? readFileSync(
        join(process.cwd(), 'src', 'contents', type, `${slug}.mdx`),
        'utf8'
      )
    : readFileSync(
        join(process.cwd(), 'src', 'contents', `${type}.mdx`),
        'utf8'
      ));

  const { code, frontmatter } = await bundleMDX({
    source: source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['hash-anchor'],
            },
          },
        ],
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  };
}

export async function getBundleMDX(source: string) {
  const { code, frontmatter } = await bundleMDX({
    source: source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['hash-anchor'],
            },
          },
        ],
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      ...frontmatter,
    },
  };
}

export async function getFile(dir: string[]) {
  return readFileSync(join(process.cwd(), ...dir), 'utf8');
}

export async function getAboutMeExpFrontmatter() {
  const files = readdirSync(
    join(process.cwd(), 'src', 'contents', 'about', 'me', 'exp')
  );
  const sources = mapSync(files, (file) =>
    readFileSync(
      join(process.cwd(), 'src', 'contents', 'about', 'me', 'exp', file),
      'utf8'
    )
  );
  const dataSources = mapSync(sources, (source) => matter(source));
  const datas = mapSync(dataSources, (data) => data.data);

  return datas;
}

export async function getAboutMeExpContent() {
  const files = readdirSync(
    join(process.cwd(), 'src', 'contents', 'about', 'me', 'exp')
  );

  const sources: string[] = [];
  for (let i = 0; i < files.length; i++) {
    const fileSource = readFileSync(
      join(process.cwd(), 'src', 'contents', 'about', 'me', 'exp', files[i]),
      'utf8'
    );
    sources.push(fileSource);
  }

  const sourcesPromises = sources.map(
    async (source) => await getBundleMDX(source)
  );
  const sourcesBundled = await Promise.all(sourcesPromises);

  const sorted = sortContentByDate(sourcesBundled as SourcesBundled[]);

  return sorted;
}

type SourcesBundled = {
  code: string;
  frontmatter:
    | BlogFrontmatter
    | ProjectFrontmatter
    | FrontmatterWithTags
    | FrontmatterWithDate
    | ExpFrontmatter;
};

function sortContentByDate(content: SourcesBundled[]) {
  return content.sort(sortDateFn);
}

export function sortDateFn<T extends SourcesBundled>(contentA: T, contentB: T) {
  return (
    new Date(
      _.get(contentB.frontmatter, 'publishedAt', '2022-01-01')
    ).valueOf() -
    new Date(_.get(contentA.frontmatter, 'publishedAt', '2022-01-01')).valueOf()
  );
}

export async function getExpTags() {
  const files = (await getAboutMeExpFrontmatter()) as ExpFrontmatter[];
  const posts = sortByDate(files);

  // Accumulate tags and remove duplicate
  const tags = getTags(posts);

  return tags;
}

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = readdirSync(join(process.cwd(), 'src', 'contents', type));

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'src', 'contents', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    const res = [
      {
        ...(data as PickFrontmatter<T>),
        slug: postSlug.replace('.mdx', ''),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
    return res;
  }, []);
}

export async function getRecommendations(currSlug: string) {
  const frontmatters = await getAllFilesFrontmatter('blog');

  // Get current frontmatter
  const currentFm = frontmatters.find((fm) => fm.slug === currSlug);

  // Remove currentFm and Bahasa Posts, then randomize order
  const otherFms = frontmatters
    .filter((fm) => !fm.slug.startsWith('id-') && fm.slug !== currSlug)
    .sort(() => Math.random() - 0.5);

  // Find with similar tags
  const recommendations = otherFms.filter((op) =>
    op.tags.split(',').some((p) => currentFm?.tags.split(',').includes(p))
  );

  // Populate with random recommendations if not enough
  const threeRecommendations =
    recommendations.length >= 3
      ? recommendations
      : [
          ...recommendations,
          ...otherFms.filter(
            (fm) => !recommendations.some((r) => r.slug === fm.slug)
          ),
        ];

  // Only return first three
  return threeRecommendations.slice(0, 3);
}

/**
 * Get and order frontmatters by specified array
 */
export function getFeatured<T extends Frontmatter>(
  contents: Array<T>,
  features: string[]
) {
  // override as T because there is no typechecking on the features array
  return features.map(
    (feat) => contents.find((content) => content.slug === feat) as T
  );
}
