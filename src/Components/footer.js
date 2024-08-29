import{FaInstagram,FaLinkedin} from "react-icons/fa";
import{SiLeetcode} from "react-icons/si";
import"./footer.css";
const Footer = ({fordata}) => {
    return (<>
        <footer>
        <h3>News Today</h3>
            <ul className="category">
                <li><a href='#'>Home</a></li>
                <li><a href='#'onClick={() => { fordata("politics" )}}>Politics</a></li>
                <li><a href='#'onClick={() => { fordata("software development" )}}>Technology</a></li>
                <li><a href='#'onClick={() => { fordata("sports" )}}>Sports</a></li>
                <li><a href='#'onClick={() => { fordata("economis" )}}>Economics</a></li>
                <li><a href='#'onClick={() => { fordata("bollywood" )}}>Entertainment</a></li>
            </ul>
            <ul className="socialmedia">
            <li><a target='_blank' href="https://leetcode.com/nagasundaram373/"><SiLeetcode /></a></li>
            <li><a target='_blank' href="https://www.instagram.com/naga_13_/"><FaInstagram/></a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/nagasundaram-sundar-bb78571bb/"><FaLinkedin/></a></li>
            
            </ul>
        </footer>

    </>);
}
export default Footer;