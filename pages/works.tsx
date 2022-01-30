import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import Meta from '@/components/elements/Meta';
import WorksTemplate from '@/components/templates/Works';
import { client } from '@/lib/microcms';
import { Tag, Work } from '@/lib/microcms/model';

export const FETCH_WORKS_LIMIT = 12;
interface Props {
  pickupWorks: Work[];
  works: Work[];
  tags: Tag[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pickupWorks = await client.getContents('works', {
    orders: '-releasedAt',
    filters: `isPickedUp[equals]true`,
  });
  const works = await client.getContents('works', {
    limit: FETCH_WORKS_LIMIT,
    offset: 0,
    orders: '-releasedAt',
    filters: 'isPickedUp[equals]false',
  });
  const tags = await client.getContents('tags', {
    limit: 100,
  });
  return { props: { pickupWorks, works, tags }, revalidate: 60 * 60 };
};

const WorksPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  pickupWorks,
  works,
  tags,
}) => {
  return (
    <>
      <Meta title='WORKS' />
      <WorksTemplate pickupWorks={pickupWorks} works={works} tags={tags} />
    </>
  );
};

export default WorksPage;
