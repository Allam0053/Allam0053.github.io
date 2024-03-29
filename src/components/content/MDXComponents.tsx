import Image from 'next/image';

import LineChart from '@/components/chart/line';
// import LiteYouTubeEmbed from 'react-lite-youtube-embed';
// import Quiz from '@/components/content/blog/Quiz';
// import GithubCard from '@/components/content/card/GithubCard';
import CustomCode, { Pre } from '@/components/content/CustomCode';
// import SplitImage, { Split } from '@/components/content/SplitImage';
// import TweetCard from '@/components/content/TweetCard';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import ArrowLink from '@/components/links/ArrowLink';
import CustomLink from '@/components/links/CustomLink';
import TechIcons from '@/components/TechIcons';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CustomCode,
  CloudinaryImg,
  ArrowLink,
  // LiteYouTubeEmbed,
  // SplitImage,
  // Split,
  TechIcons,
  // TweetCard,
  // GithubCard,
  // Quiz,
  LineChart,
};

export default MDXComponents;
