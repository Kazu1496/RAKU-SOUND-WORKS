import type { NextPage } from 'next';

import Meta from '@/components/elements/Meta';
import ContactTemplate from '@/components/templates/Contact';

const ContactPage: NextPage = () => {
  return (
    <>
      <Meta title='CONTACT' />
      <ContactTemplate />
    </>
  );
};

export default ContactPage;
