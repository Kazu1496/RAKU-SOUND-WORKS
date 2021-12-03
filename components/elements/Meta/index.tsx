import Head from 'next/head';
import { useMemo } from 'react';

import { SITE_NAME } from '@/constant/meta';

interface Props {
  title?: string;
}

type Meta = {
  [_name in string]: string;
};

const Meta: React.FC<Props> = ({ title }) => {
  const _title = useMemo(
    () => (title ? `${title} | ${SITE_NAME}` : SITE_NAME),
    [title],
  );
  const _description = '';
  const _keyword = '';
  const url = process.env.VERCEL_URL || '';
  const ogpImagePath = '/ogp.png';

  const twitterMeta: Meta = {
    'twitter:title': _title,
    'twitter:description': _description,
    'twitter:image': ogpImagePath,
    'twitter:url': url,
    'twitter:card': 'summary_large_image',
    'twitter:site': '@raku_guitar',
  };

  const ogMeta: Meta = {
    description: _description,
    keyword: _keyword,
    'og:title': _title,
    'og:description': _description,
    'og:url': url,
    'og:type': 'website',
    'og:site_name': SITE_NAME,
    'og:image': ogpImagePath,
    'og:image:secure_url': ogpImagePath,
  };

  return (
    <Head>
      <title>{_title}</title>
      <link rel='canonical' href={url} />

      {Object.keys(ogMeta).map((key) => {
        <meta key={key} property={key} content={ogMeta[key]} />;
      })}
      {Object.keys(twitterMeta).map((key) => {
        <meta key={key} name={key} content={twitterMeta[key]} />;
      })}
    </Head>
  );
};

export default Meta;