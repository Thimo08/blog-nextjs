import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="main-nav">
      <div className="container">
        <ul>
          <li><Link href="/" className={router.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link href="/biografia" className={router.pathname === '/biografia' ? 'active' : ''}>Vida do Autor</Link></li>
          <li><Link href="/obra" className={router.pathname.startsWith('/obra') ? 'active' : ''}>Obras</Link></li>
          <li><Link href="/curiosidades" className={router.pathname === '/curiosidades' ? 'active' : ''}>Curiosidades</Link></li>
          <li><Link href="/mural" className={router.pathname === '/mural' ? 'active' : ''}>Mural de Mensagens</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;