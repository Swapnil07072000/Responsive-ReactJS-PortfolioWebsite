import { Component, React } from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from './../assets/images/ContactUs.jpg';

class About extends Component{
    render(){
        return(
            <section id="About">
                <div className="About">
                    <div className="title">
                        <p><FaUser size="30"/></p>
                    </div>
                    <div className="content">
                        <Container fluid="md">
                            <Row fluid="true">
                                <Col sm>
                                    <div>
                                        <Image className="image" fluid="md" src={Image1} rounded>
                                        </Image>
                                    </div>
                                </Col>
                                <Col sm>
                                    <div>
                                        <Container fluid>
                                            <h1><span>I'm</span> Swapnil Pawar</h1>
                                            <h5>Fresher</h5>
                                            <p>Currently in final year of Masters in I.T pursuing from Mumbai University.
                                                 Adaptive, enthusiastic to learn new things that will not only be beneficial
                                                 for the company but also will help me achieve company as well as my dreams.</p>
                                        </Container>
                                    </div>
                                    <div className="info">
                                        <Container fluid>
                                            <Row sm>
                                                <Col sm> <span>Age</span> : 22 </Col>
                                            </Row>
                                            <Row sm>
                                                <Col sm> <span>Email Id</span> : swapniluttampawar2007@gmail.com </Col>
                                            </Row>
                                            <Row sm>
                                                <Col sm> <span>Phone No.</span> : +91 9137609330 </Col>
                                            </Row>
                                            <Row sm>
                                                <Col sm> <span>Address</span> : Mumbai - 55, India </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;