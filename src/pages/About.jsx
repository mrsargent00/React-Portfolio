import '../styles/About.css';
import Author from '../assets/Author.web';

export default function About() {
  return (
    <div className='about-me'> 
      <h1>About Me</h1>
      <div className='about-me-container'>
        <div className='left'><img src={Author} alt='Capybara with an orange on its head' /></div>
        <div className='right'>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Greetings! I'm Megan, and I'm from the Lansing area of Michigan.
          I have a certificate as a Medical Assistant, and after a few years of working in 
          the medical field, I started my persue for more knowlegdge, and started to work on a college
          degree for Computer Science. Before I made this jump, I found the MSU coding 
          boot cam and I'm in the process of 
          completing the full-stack coding bootcamp.</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Most recently, I have been obsessed with learning character design for video 
          games. Having the knowlegdge of human anatomy, and now learning the knowlegdge
          to code, I have now started the desire to make my own horror video games.</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Just like the adorable Capybara that is balancing an orange on its head, 
          I too, feel like I am balancing delicate things to keep them from falling.
          </p>
        </div>
      </div>
      
    </div>
  );
}