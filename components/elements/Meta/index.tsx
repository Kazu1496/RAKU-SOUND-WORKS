import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { BASE_URL, SITE_NAME } from '@/constant/meta';

interface Props {
  title?: string;
}

type Meta = {
  [_name in string]: string;
};

const Meta: React.FC<Props> = ({ title }) => {
  const router = useRouter();

  const _title = useMemo(
    () => (title ? `${title} | ${SITE_NAME}` : SITE_NAME),
    [title],
  );
  const url = useMemo(() => BASE_URL + router.asPath, [router.asPath]);
  const description =
    '作曲・編曲・ミックス。1996年生まれ。大阪府出身。ハートカンパニー所属。14歳でギターを始めたことをきっかけに音楽に傾倒し、大学時代より楽曲制作を始める。キャッチーさを軸としながらも、様々な音楽の要素を取り入れたサウンドが特徴。音楽ユニット「Islet」のメンバーとしても活動中。';
  const keyword = 'Raku,樂,Islet';
  const ogpImagePath = `${BASE_URL}/ogp.png`;

  const twitterMeta: Meta = {
    'twitter:title': _title,
    'twitter:description': description,
    'twitter:image': ogpImagePath,
    'twitter:url': url,
    'twitter:card': 'summary_large_image',
    'twitter:site': '@raku_guitar',
  };

  const ogMeta: Meta = {
    description: description,
    keyword: keyword,
    'og:title': _title,
    'og:description': description,
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

      {Object.keys(ogMeta).map((key) => (
        <meta key={key} property={key} content={ogMeta[key]} />
      ))}
      {Object.keys(twitterMeta).map((key) => (
        <meta key={key} name={key} content={twitterMeta[key]} />
      ))}
    </Head>
  );
};

export default Meta;
