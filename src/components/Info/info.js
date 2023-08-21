import style from './info.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faUser, faShieldHalved,faBriefcase,faBrain } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
    return (
        <div className={style.info}>
        <h1>YANIV GALI</h1>
        <h4>WEB DESIGNER & DEVELOPER</h4>
        <hr />
        <div className={style.personalinfo}>
         <span><FontAwesomeIcon icon={faMobile} />0585658555</span>
        <span>yanivgali6@gmail.com</span>
        <span>Yavne</span>
            </div>
            <hr />
            <div>
                <h3><FontAwesomeIcon icon={faUser} />ABOUT ME</h3><hr />
                <li>Highly motivated and dedicated individual seeking a challenging position as a web developer. Possess strong troubleshooting and problem-solving abilities with a passion for technology. Committed to contributing to the success of an organization.</li>
            </div>
            <div>
            <div>
                <h3><FontAwesomeIcon icon={faBriefcase} />Career Portfolio</h3><hr />
                <span>2022 - 2023</span>
                <ul>
                    <li>Gaming Website.</li>
                    <li>Website for barbershop.</li>
                    <li>Pokedex - based on java script + API.</li>
                    <li>Wedding survey.</li>
                </ul>
            </div>
                <div>

                <h3><FontAwesomeIcon icon={faBrain} />Education</h3><hr />
                <span>2017 - 2020</span>
                <ul>
                    <li>High School degree - Computer science.</li>
                    <li>Majored in Computer Science</li>
                    <li>React Development | Udemy.</li>
                </ul>
            </div>
                <div>
                <h3><FontAwesomeIcon icon={faShieldHalved} />Military Service</h3><hr />
                <h4>Border Defense Corps.</h4>
                <span>2020 - 2023</span>
                <ul>
                    <li>Combatant on the operational line - professionally executing operational activities, including patrols, ambushes, and surveillance, through teamwork and cooperation.</li>
                    <li>Commander from training to operational line, training soldiers professionally and ethically. Training and leading a class of soldiers, maintaining a high level of professionalism, and making decisions in routine and emergency situations.</li>
                    <li>Sergeant during training, mentoring new commanders, leading a combat department, conducting assessments, and providing feedback. Released at the rank of Staff Sergeant.</li>
                    </ul>
                </div>
            </div>
    </div>);
}
export default Info;