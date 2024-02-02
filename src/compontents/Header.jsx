import '../styles/Header.css';
import profilePic from '../assets/header-footer/prof_pic2.png';
import NavBar from './NavBar';

function Header() {
  return (
    <header>
      <div>
        <div className='container'>
          <div className='left-container'>
            <img src={profilePic} alt="profile" />
          </div>
          <div className='right-container'>
          </div>
        </div>
      </div>
      <NavBar />
    </header>

  );
}

export default Header;
