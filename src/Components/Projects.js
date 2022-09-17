import { Component, React } from 'react';
import {FaCode} from 'react-icons/fa';
import {Container, Row, Col, Button, Carousel} from 'react-bootstrap';

let project1Link = "https://github.com/Swapnil07072000/Space-Invader-Game-Space-Battle-Game-";
let project2Link = "https://github.com/Swapnil07072000/Chat-Application";

class Projects extends Component{
    render(){
        return(
            <section id="Projects">
                <div className="Projects">
                    <div className="title">
                        <p><FaCode size="45"></FaCode></p>
                    </div>
                    <div className="content">
                        <Container fluid>
                            <div className="small-screen">
                                <Carousel>
                                    <Carousel.Item>
                                        <div className="square first r1 c1">
                                                <p>Sqaure</p>
                                                <div  className="button">
                                                    <Button variant="primary" target="_blank" href={ project1Link }>Github Repo</Button> 
                                                </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="square second r1 c2">
                                            <p>Sqaure</p>
                                            <div  className="button">
                                                <Button variant="primary" target="_blank" href={ project2Link }>Github Repo</Button> 
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="square third r1 c3">
                                            <p>Sqaure</p>
                                            <div  className="button">
                                                <Button variant="primary" target="_blank" href="/">Github Repo</Button> 
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>

                            <div className="large-screen">
                                <Row fluid="true">
                                    <Col sm>
                                        <div className="square first r1 c1">
                                            <p>Sqaure</p>
                                            <div  className="button">
                                                <Button variant="primary" target="_blank" href={ project1Link }>Github Repo</Button> 
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="linebreak"></div>
                                    <Col sm>
                                        <div className="square second r1 c2">
                                            <p>Sqaure</p>
                                            <div  className="button">
                                                <Button variant="primary" target="_blank" href={ project2Link }>Github Repo</Button> 
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="linebreak"></div>
                                    <Col sm>
                                        <div className="square third r1 c3">
                                            <p>Sqaure</p>
                                            <div  className="button">
                                                <Button variant="primary" target="_blank" href="/">Github Repo</Button> 
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="rowbreak"></div>
                                <Row fluid="true">
                                    <Col sm>
                                        <div className="square first r2 c1">
                                            <p>Sqaure</p>
                                            <div  className="button">
                                                <Button variant="primary" target="_blank" href="/">Github Repo</Button> 
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="linebreak"></div>
                                    <Col sm>
                                        <div className="square second r2 c2">
                                            <p>Sqaure</p>
                                            <div  className="button">
                                                <Button variant="primary" target="_blank" href="/">Github Repo</Button> 
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="linebreak"></div>
                                    <Col sm>
                                        <div className="square third r2 c3">
                                            <p>Sqaure</p>
                                            <div  className="button">
                                                <Button variant="primary" target="_blank" href="/">Github Repo</Button> 
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;