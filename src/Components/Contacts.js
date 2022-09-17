import { Component, React } from 'react';
import { Container, Row, Col, Form, Button, Image} from 'react-bootstrap';
import {FaHeadset, FaPaperPlane} from 'react-icons/fa';
import Image1 from './../assets/images/ContactUs.jpg';

class Contacts extends Component{
    render(){
        return(
            <section id="Contacts">
                <div className="Contacts">
                    <div className="title">
                        <p><FaHeadset size="50"></FaHeadset></p>
                    </div>
                    <div className="content">
                        <Container fluid>
                            <Row sm>
                                <Col sm>
                                    <div className="formgroup">
                                        <Image fluid src={Image1} alt="No Image Found"></Image>
                                    </div>
                                </Col>
                                <Col sm>
                                    <Form fluid="true">
                                        <Form.Group className="formgroup">
                                            <Form.Control type="text" id="fname" placeholder="First Name"></Form.Control>
                                        </Form.Group>
                                        <Form.Group className="formgroup">
                                            <Form.Control type="text" id="lname" placeholder="Last Name"></Form.Control>
                                        </Form.Group>
                                        <Form.Group className="formgroup">
                                            <Form.Control type="text" id="email" placeholder="Email"></Form.Control>
                                        </Form.Group>
                                        <Form.Group className="formgroup">
                                            <Form.Control type="text" id="phoneno" placeholder="Phone No."></Form.Control>
                                        </Form.Group>
                                        <Form.Group className="formgroup">
                                            <Form.Control style={{resize: "none"}} as="textarea" id="txtarea" placeholder="Comment"></Form.Control>
                                        </Form.Group>
                                        <Button type="submit" variant="primary">Submit <FaPaperPlane></FaPaperPlane></Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contacts;