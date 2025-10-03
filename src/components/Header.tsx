import Link from 'next/link';

const Header = () => (
  <header className="main-header">
    <div className="header-content">
      <Link href="/" className="header-link">
        <h1>Ateliê <span>de</span> Histórias</h1>
      </Link>
      <p>Um mergulho no universo de André Neves</p>
    </div>
  </header>
);

export default Header;