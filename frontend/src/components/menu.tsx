import { Link } from 'react-router-dom';
import '../styles/_menu.sass'

const Menu: React.FC = () => {

  return (
    
    <header>
      <nav className="menu">
          <ul className="menu-list">
           <li><Link to="/">Accueil</Link></li>
           <li><Link to="/Rois">Rois</Link></li>
          <li><Link to="/france">France</Link></li>
          </ul>
      </nav>
    </header>
  );
};

export default Menu;
