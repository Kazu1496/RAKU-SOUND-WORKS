import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import Meta from '@/components/elements/Meta';
import ProfileTemplate from '@/components/templates/Profile';
import { client } from '@/lib/microcms';
import { Profile } from '@/lib/microcms/model';

interface Props {
  profile: Profile;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await client.getObjectContent('profile');
  return { props: { profile: res }, revalidate: 60 * 60 * 24 };
};

const ProfilePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  profile,
}) => {
  return (
    <>
      <Meta title='PROFILE' />
      <ProfileTemplate profile={profile} />
    </>
  );
};

export default ProfilePage;
