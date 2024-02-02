import Project from '../compontents/Project';
import '../styles/Project.css'

import JSQuiz from '../assets/thumbnails/JSQuiz.png';
import Money from '../assets/thumbnails/Money.png';
import PassGen from '../assets/thumbnails/PassGen.png';
import weather from '../assets/thumbnails/weather.png';
import Workday from '../assets/thumbnails/Workday.png';

const projectsData = [
  { "name": "JavaScript Quiz", "thumbnail": JSQuiz, "link": "https://mrsargent00.github.io/JavaQuiz/", "github": "https://github.com/mrsargent00/JavaQuiz" },
  { "name": "Country Currency Converter", "thumbnail": Money, "link": "https://benrodriguezmoran.github.io/country-curency-converter/", "github": "https://github.com/benrodriguezmoran/country-curency-converter" },
  { "name": "Password Generator", "thumbnail": PassGen, "link": "https://mrsargent00.github.io/Java5/", "github": "https://github.com/mrsargent00/Java5" },
  { "name": "5 Day Weather Forcast", "thumbnail": weather, "link": "https://mrsargent00.github.io/weather/", "github": "https://github.com/mrsargent00/weather" },
  { "name": "Workday Calender", "thumbnail": Workday, "link": "https://mrsargent00.github.io/mod5/", "github": "https://github.com/mrsargent00/mod5"}
];

export default function Portfolio() {
  return (
    <div className='portfolio'> 
      <h1>Portfolio</h1>            
      <div className='portfolio'>
        {projectsData.map((project, index) => (
          <Project key={index} name={project.name} thumbnail={project.thumbnail} link={project.link} github={project.github} />
        ))}
      </div>
    </div>
  );
}
