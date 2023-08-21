import style from './aboutme.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Aboutme = () => {
    return (<div className={style.aboutme}>
        <div className={style.content}>
       
            <h3>Full Stack Developer</h3></div>
        <span></span>
        <span>yanivgali6@gmail.com</span>
        <a href="tel:+972585658555" style={{ textDecoration: 'none' }}>
            <span>+972-58-565-8555</span></a>
        <a href="https://github.com/Yanivgali" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} /><span>github.com/Yanivgali </span></a>
        <a href="https://www.linkedin.com/in/yaniv-gali" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /><span>linkedin.com/in/yaniv-gali </span></a>
        <div className={style.Skills}><h2 className={style.center}>Skills<hr className={style.hrstyle} /></h2>
        <h3>Front End</h3>
        <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>Bootstrap</li>
            <li>CSS</li>
        </ul>
        <h3>Back End</h3>
        <ul>
        <li>.NET</li>
        <li>Firebase/MongoDB</li>
        <li>Microsoft Access</li>
        </ul>
        <h3>Miscellaneous skills</h3>
            <ul style={{ liststyletype:'disc'}}>
        <li>C#</li>
            </ul>
            <h3>Language</h3>
            <ul style={{ listStyleType: 'square' }} >
            <li>English</li>
            <li>Hebrrew</li>
            </ul>
        <h3>References</h3>
        <span>Available upon request.</span>
        </div>
    </div>);
}
export default Aboutme;