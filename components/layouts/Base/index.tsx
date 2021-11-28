import Link from 'next/link';

import { Footer, Header, Nav, Ul, Wrapper } from './style';

const BaseLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Nav>
          <Ul>
            <li>
              <Link href='/profile'>PROFILE</Link>
            </li>
            <li>
              <Link href='/works'>WORKS</Link>
            </li>
            <li>
              <Link href='/contact'>CONTACT</Link>
            </li>
          </Ul>
        </Nav>
      </Header>
      <main>{children}</main>
      <Footer>&copy; Raku Official Website 2021</Footer>
    </Wrapper>
  );
};

export default BaseLayout;
