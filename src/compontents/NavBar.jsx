import { NavLink } from 'react-router-dom';

import '../styles/NavBar.css';

function NavBar({currentPage}) {
  return (
    <nav className='container'>
      <NavLink 
        to='/'
        className={currentPage === '/' ? 'nav-section active' : 'nav-section'}>about me
      </NavLink>

      <NavLink 
        to='/portfolio'
        className={currentPage === 'Portfolio' ? 'nav-section active' : 'nav-section'}>portfolio
      </NavLink>

      <NavLink 
        to='/contact'
        className={currentPage === 'Contact' ? 'nav-section active' : 'nav-section'}>contact
      </NavLink>

      <NavLink 
        to='/resume'
        className={currentPage === 'Resume' ? 'nav-section active' : 'nav-section'}>resume
      </NavLink>
    </nav>
  );
}

export default NavBar;