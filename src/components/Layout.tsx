import { ReactNode } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Nav />
    <main className="container">{children}</main>
    <Footer />
  </>
);

export default Layout;