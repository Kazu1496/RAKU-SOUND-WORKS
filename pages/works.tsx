import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import Meta from '@/components/elements/Meta';
import WorksTemplate from '@/components/templates/Works';
import { client } from '@/lib/microcms';
import { Work } from '@/lib/microcms/model';

interface Props {
  works: Work[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await client.getContents('works');
  return { props: { works: res }, revalidate: 60 * 60 * 24 };
};

const WorksPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  works,
}) => {
  return (
    <>
      <Meta title='WORKS' />
      <WorksTemplate works={works} />
    </>
  );
};

export default WorksPage;
