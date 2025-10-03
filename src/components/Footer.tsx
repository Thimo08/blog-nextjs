import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="main-footer">
    <p>&copy; Desenvolvido por Thimótio Jeronimo</p>
    <div className="social-media">
      <a href="https://www.facebook.com/andreneves.ilustrador" target="_blank" rel="noopener noreferrer" aria-label="Facebook de André Neves">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.instagram.com/neves.ilustra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de André Neves">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.youtube.com/results?search_query=andr%C3%A9+neves+ilustrador" target="_blank" rel="noopener noreferrer" aria-label="Conteúdo sobre André Neves no YouTube">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  </footer>
);

export default Footer;