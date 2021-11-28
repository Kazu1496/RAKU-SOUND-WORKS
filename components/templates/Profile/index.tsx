import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

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
      <ProfileArea>
        <Image
          src={`${profile.avatar.url}?w=200&h=200&dpr=1 1x, ${profile.avatar.url}?w=200&h=200&dpr=2 2x`}
          alt='プロフィール画像'
          width='200px'
          height='200px'
        />
        <div>
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
        </div>
      </ProfileArea>
      <Description>{profile.description}</Description>
    </Wrapper>
  );
};

export default ProfileTemplate;
