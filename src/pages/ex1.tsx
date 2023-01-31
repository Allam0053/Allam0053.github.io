import Layout from '@/components/layout/Layout';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Example1 from '@/components/sections/example1';
import Seo from '@/components/Seo';

export default function Ex1() {
  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description='Showcase of my projects on various tech.'
        siteName='Allam Taju'
        url='https://allam-taju.vercel.app/'
      />

      <IndexNavbar />
      <Example1 />
    </Layout>
  );
}
