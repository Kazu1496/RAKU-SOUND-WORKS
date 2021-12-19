import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SITE_NAME } from '@/constant/meta';

import { Footer, Header, Li, Logo, Nav, Ul, Wrapper } from './style';

const BaseLayout: React.FC = ({ children }) => {
  const router = useRouter();

  const isActive = (to: string): boolean => router.pathname.startsWith(to);

  const links = [
    {
      title: 'PROFILE',
      to: '/profile',
    },
    {
      title: 'WORKS',
      to: '/works',
    },
    {
      title: 'CONTACT',
      to: '/contact',
    },
  ];

  return (
    <Wrapper>
      <Header>
        <Nav>
          <Logo>
            <a href='/'>
              <Image
                src='/Logo_Favicon_Green.png'
                alt=''
                width='18px'
                height='28px'
              />
            </a>
          </Logo>
          <Ul>
            {links.map((link) => (
              <Li key={link.title} isActive={isActive(link.to)}>
                <Link href={link.to}>{link.title}</Link>
              </Li>
            ))}
          </Ul>
        </Nav>
      </Header>
      <main>{children}</main>
      <Footer>&copy; {SITE_NAME} 2021</Footer>
    </Wrapper>
  );
};

export default BaseLayout;
