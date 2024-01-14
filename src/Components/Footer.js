import { Component, React } from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import socialmedia_info from './../assets/jsonFiles/socialMediaInfo.json';
import footer_info from './../assets/jsonFiles/footerInfo.json';

class Footer extends Component{
    render(){
        return(
            <footer id="Footer">
                <div className="Footer">
                    <div className="social-media-icons title">
                        <a href={socialmedia_info["github_link"]} target="_blank" rel="noreferrer">
                            <FaGithub size="35"></FaGithub>
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a href={socialmedia_info["linkedin_link"]} target="_blank" rel="noreferrer">
                            <FaLinkedin size="35"></FaLinkedin>
                        </a>
                    </div>
                    <div className="title">
                        <p>&copy; {footer_info["name_rights"]}</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;