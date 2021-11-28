import type { NextPage } from 'next';
import Head from 'next/head';

import ProfileTemplate from '@/components/templates/Profile';
import { client } from '@/lib/microcms';
import { Profile as ProfileType } from '@/lib/microcms/model';

interface Props {
  profile: ProfileType;
}

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

Profile.getInitialProps = async (_ctx) => {
  const res = await client.getObjectContent('profile');
  return { profile: res };
};

export default Profile;
