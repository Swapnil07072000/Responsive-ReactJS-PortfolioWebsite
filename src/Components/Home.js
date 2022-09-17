import { Component, React } from 'react';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

class Home extends Component{
    render(){
        const particlesInit = async (main) => {
            console.log(main);
            await loadFull(main);
        };
    
        const particlesLoaded = (container) => {
            console.log(container);
        };
        return(
            <section id="Home">
                <div className="Home">
                    <div>
                        <Particles 
                        className="homeBackground"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                value: "#fdfefe",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#5DADE2",
                                },
                                links: {
                                    color: "#000000",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                enable: true,
                                area: 700,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                            },
                            detectRetina: true,
                            fullScreen:{
                                enable: false,
                            }
                            }
                        }
                        ></Particles>
                    </div>
                    <div className="content">
                        <Container fluid className="info">
                            <p>Hi</p>
                            <h1><span>I'm</span> Swapnil Pawar  </h1>
                            <h3><span>I am into </span><br/>
                                <Typed 
                                    strings={['Frontend Developement','Backend Development', 
                                            'Web Development', 'Mobile Development']} 
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                ></Typed>
                            </h3>
                            <div className="social-media-icons title">
                                <a href="https://github.com/Swapnil07072000" target="_blank" rel="noreferrer">
                                    <FaGithub size="35"></FaGithub>
                                </a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="https://www.linkedin.com/in/swapnil-pawar-07/" target="_blank" rel="noreferrer">
                                    <FaLinkedin size="35"></FaLinkedin>
                                </a>
                            </div>
                        </Container>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;