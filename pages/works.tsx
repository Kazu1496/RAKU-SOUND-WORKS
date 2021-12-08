import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import Meta from '@/components/elements/Meta';
import WorksTemplate from '@/components/templates/Works';
import { client } from '@/lib/microcms';
import { Tag, Work } from '@/lib/microcms/model';

export const FETCH_WORKS_LIMIT = 12;
interface Props {
  works: Work[];
  tags: Tag[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const works = await client.getContents('works', {
    limit: FETCH_WORKS_LIMIT,
    offset: 0,
  });
  const tags = await client.getContents('tags', {
    limit: 100,
  });
  return { props: { works, tags }, revalidate: 60 * 60 };
};

const WorksPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  works,
  tags,
}) => {
  return (
    <>
      <Meta title='WORKS' />
      <WorksTemplate works={works} tags={tags} />
    </>
  );
};

export default WorksPage;
