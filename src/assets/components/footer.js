import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/KyleKryst" target="_blank"><img src="https://icons8.com/icon/LoL4bFzqmAa0/github" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/kyle-kryst-2872a3267/" target="_blank"><img src="https://icons8.com/icon/447/linkedin" alt="LinkedIn" className="icon"/></a>
                <a href="https://twitter.com/osiris_alpha" target="_blank"><img src="https://icons8.com/icon/437/twitter" alt="Twitter" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; Kyle Kryst  |  <a href="https://1drv.ms/w/s!AsCs8MX6Nl3-slcT-4Xkg9ZrZKlf?e=ldKFAL" className="link">Download Resume</a>  |  Made With <img id="react-icon" src="https://icons8.com/icon/wPohyHO_qO1a/react" alt="React"/>
            </p>

        </div>
    )
}

export default Footer;
