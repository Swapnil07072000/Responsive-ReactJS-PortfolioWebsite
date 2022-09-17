import { Component, React } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Container, Row, Col, Card, CardImg } from 'react-bootstrap';
import CollegeImage from './../assets/images/College-Image.jpg';

class Education extends Component{
    render(){
        return(
            <section id="Education">
                <div className="Education">
                    <div className="title">
                        <p><FaGraduationCap size="50"/></p>
                    </div>
                    <div className="content">
                            <Container fluid="sm">
                                <Row fluid="true" className="row">
                                    <Col sm>
                                        <Card fluid="true" className="card">
                                            <CardImg src={CollegeImage} className="cardimage">
                                            </CardImg>
                                            <Card.Body>
                                            <div className="info">
                                                <h3>Master of Science in Information Technology</h3>
                                                <p>M.L. Dahanukar College of Commerce | MU</p>
                                                <h4>2021-2023 | Pursuing</h4>
                                            </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <br/>
                                <Row fluid="true" className="row">
                                    <Col sm>
                                        <Card fluid="true" className="card">
                                            <CardImg src={CollegeImage} className="cardimage">
                                            </CardImg>
                                            <Card.Body>
                                            <div className="info">
                                                <h3>Bachelor of Science in Information Technology</h3>
                                                <p>M.L. Dahanukar College of Commerce | MU</p>
                                                <h4>2018-2021 | Completed</h4>
                                            </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <br/>
                                <Row fluid="true">                                    
                                    <Col sm>
                                        <Card fluid="true" className="card">
                                            <CardImg src={CollegeImage} className="cardimage">
                                            </CardImg>
                                            <Card.Body>
                                            <div className="info">
                                                <h3>Higher Secondary College <br/>i.e 12th</h3>
                                                <p>Patuck Jr. College | MU</p>
                                                <h4>2016-2018 | Completed</h4>
                                            </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <br/>
                            </Container>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;