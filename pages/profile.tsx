import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import ProfileTemplate from '@/components/templates/Profile';
import { client } from '@/lib/microcms';
import { Profile as ProfileType } from '@/lib/microcms/model';

interface Props {
  profile: ProfileType;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await client.getObjectContent('profile');
  return { props: { profile: res }, revalidate: 60 * 60 };
};

const Profile: NextPage<Props> = ({ profile }) => {
  return (
    <>
      <Head>
        <title>Raku Official Website - Profile</title>
      </Head>
      <ProfileTemplate profile={profile} />
    </>
  );
};

export default Profile;
