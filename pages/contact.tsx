import type { NextPage } from 'next';
import Head from 'next/head';

import ContactTemplate from '@/components/templates/Contact';

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Raku Official Website - Contact</title>
      </Head>
      <ContactTemplate />
    </>
  );
};

export default ContactPage;
