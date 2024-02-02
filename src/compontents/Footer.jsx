import '../styles/Footer.css';

import github from '../assets/Header-footer/Github-logo.sng.png';
import indeed from '../assets/Header-footer/indeed.png';

function Footer() {
  return (
    <footer >
      <div>
        <a href="https://github.com/mrsargent00" target="_blank">
            <img src={github} alt="github icon"/>
        </a>
      </div>

      <div>
        <a href="https://profile.indeed.com/resume" target="_blank">
            <img src={indeed} alt="indeed icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;