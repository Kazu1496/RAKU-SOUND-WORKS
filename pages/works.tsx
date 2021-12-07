import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import Meta from '@/components/elements/Meta';
import WorksTemplate from '@/components/templates/Works';
import { client } from '@/lib/microcms';
import { Work } from '@/lib/microcms/model';

export const FETCH_WORKS_LIMIT = 9;
interface Props {
  works: Work[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await client.getContents('works', {
    limit: FETCH_WORKS_LIMIT,
    offset: 0,
  });
  return { props: { works: res } };
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
