import { getMDXComponent } from 'mdx-bundler/client';
import { NextApiRequest, NextApiResponse } from 'next';

// import { getAboutMeExpContent, getAboutMeExpFrontmatter } from '@/lib/mdx';
import { getAboutMeExpContent } from '@/lib/mdx';
// import { sortByDate } from '@/lib/mdx-client';

// import { ExpFrontmatter } from '@/types/frontmatters';

type responseData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}[];

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // const { slug } = req.query;
  const responseData: responseData = [];
  const source = await getAboutMeExpContent();
  // const files = (await getAboutMeExpFrontmatter()) as ExpFrontmatter[];
  // const posts = sortByDate(files);
  // responseData.push(posts);
  for (const s of source) {
    responseData.push(await getMDXComponent(s.code));
  }
  res.status(200).json(responseData);
  // res.status(200).json({ name: 'John Doe' });
}
