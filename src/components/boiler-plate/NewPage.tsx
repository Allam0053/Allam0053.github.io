// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

// import useIsMounted from '@/hooks/useIsMounted';
import Footer from '@/components/Footers/Footer';
import Layout from '@/components/layout/Layout';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Seo from '@/components/Seo';

export default function HomePage() {
  // const isMounted = useIsMounted(500);
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo
        title='Home | Allam Taju Sarof'
        siteName='Allam Taju'
        description='Personal website of Allam Taju'
        url='https://allam-taju.vercel.app'
      />
      <IndexNavbar transparent />

      <main className='flex w-screen flex-col overflow-x-hidden'>
        <section className='header relative mb-[60px] flex h-screen max-h-860-px w-full items-center pt-16'>
          {/* content */}
          {/* content */}
          {/* content */}
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
