import githubLogo from '../../src/assets/Header-footer/Github-logo.sng.png';

export default function Project({ name, thumbnail, link, github }) {

    const thumbnailStyling = {
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: 'cover', // img covers entire div
        backgroundPosition: 'top left', // positions img in div
    };

    return (
        <div className='project-card' style={thumbnailStyling}>

            <a className='app-name' href={link} target="_blank">{name}</a>
            <a className='github' href={github} target="_blank">
                <img className='github-logo-link' src={githubLogo} alt={`link to GitHub repo ${name}`} />
                <span className='github-tooltip'>See GitHub Repo</span>
            </a>

        </div>
    );
}