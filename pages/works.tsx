import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

import WorksTemplate from '@/components/templates/Works';
import { client } from '@/lib/microcms';
import { Work } from '@/lib/microcms/model';

interface Props {
  works: Work[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await client.getContents('works');
  return { props: { works: res } };
};

const WorksPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  works,
}) => {
  return (
    <>
      <Head>
        <title>Raku Official Website - Works</title>
      </Head>
      <WorksTemplate works={works} />
    </>
  );
};

export default WorksPage;
