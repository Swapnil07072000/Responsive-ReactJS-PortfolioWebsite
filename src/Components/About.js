import { Component, React } from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import about_info from './../assets/jsonFiles/aboutInfo.json';
import images from './images.js';


class About extends Component{
    
    
    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

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
                                        <Image className="image" fluid="md" src={images[about_info.aboutus_img_id]} rounded>
                                        </Image>
                                    </div>
                                </Col>
                                <Col sm>
                                    <div>
                                        <Container fluid>
                                            <h1>{about_info.name}</h1>
                                            <h5>{about_info.exp_status}</h5>
                                            <p></p>
                                        </Container>
                                    </div>
                                    <div className="info">
                                        <Container fluid>
                                            <Row sm>
                                                <Col sm> <span>Age</span> : {this.getAge(about_info.dob)} </Col>
                                            </Row>
                                            <Row sm>
                                                <Col sm> <span>Email Id</span> : {about_info.email} </Col>
                                            </Row>
                                            <Row sm>
                                                <Col sm> <span>Phone No.</span> : {about_info.phone_no} </Col>
                                            </Row>
                                            <Row sm>
                                                <Col sm> <span>Address</span> : {about_info.address} </Col>
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