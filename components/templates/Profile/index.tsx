import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

import HeadLine from '@/components/elements/HeadLine';
import { Profile } from '@/lib/microcms/model';

import { Description, Name, ProfileArea, SnsList, Wrapper } from './style';

interface Props {
  profile: Profile;
}

const ProfileTemplate: React.VFC<Props> = ({ profile }) => {
  const snsLinks = [
    {
      icon: FaTwitter,
      path: 'https://twitter.com/raku_guitar',
      alt: 'twitter',
    },
    {
      icon: FaInstagram,
      path: 'https://www.instagram.com/raku_1101',
      alt: 'instagram',
    },
  ];

  return (
    <Wrapper>
      <HeadLine>PROFILE</HeadLine>
      <ProfileArea>
        <Image
          src={`${profile.avatar.url}?w=200&h=200&dpr=2`}
          alt='プロフィール画像'
          width='200px'
          height='200px'
        />
        <Name>{profile.name}</Name>
        <SnsList>
          {snsLinks.map((link) => (
            <li key={link.alt}>
              <Link href={link.path} passHref>
                <link.icon size='30px' />
              </Link>
            </li>
          ))}
        </SnsList>
      </ProfileArea>
      <Description>{profile.description}</Description>
    </Wrapper>
  );
};

export default ProfileTemplate;
