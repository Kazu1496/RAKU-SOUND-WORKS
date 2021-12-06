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
    '作曲・編曲・ミキシング、樂（Raku）の公式サイト。1996年生まれ。大阪府出身。14歳の頃にBUMP OF CHICKENに憧れギターを始めたことをきっかけに音楽に傾倒する。大学在学中よりシンガーソングライター・歌い手・アイドル・ゲームなど様々な楽曲に編曲家として携わり、23歳の頃卒業とともにフリーランスとしての活動を開始。モダンな打ち込みサウンドと生楽器が共存した編曲を得意とする。音楽ユニット"Islet"のメンバーとしても活動中。';
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
