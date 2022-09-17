import { Component, React } from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';


class Footer extends Component{
    render(){
        return(
            <footer id="Footer">
                <div className="Footer">
                    <div className="social-media-icons title">
                        <a href=" https://github.com/Swapnil07072000" target="_blank" rel="noreferrer">
                            <FaGithub size="35"></FaGithub>
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/swapnil-pawar-07/" target="_blank" rel="noreferrer">
                            <FaLinkedin size="35"></FaLinkedin>
                        </a>
                    </div>
                    <div className="title">
                        <p>&copy; Swapnil Pawar. All rights reserved</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;