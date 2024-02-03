import { Component, React } from 'react';
import { Container, Row, Col, Form, Button, Image} from 'react-bootstrap';
import {FaHeadset, FaPaperPlane} from 'react-icons/fa';
import images from './images.js';

class Contacts extends Component{
    constructor(props){
        super(props);
        this.state = {
            validated: false,
            setValidated: false
        };
    }
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
                                        <Image fluid src={images.contact_us} alt="No Image Found"></Image>
                                    </div>
                                </Col>
                                <Col sm>
                                    <Form fluid="true">
                                        <Form.Group className="formgroup">
                                            <Form.Control type="text"  placeholder="First Name" required></Form.Control>
                                        </Form.Group>
                                        <Form.Group className="formgroup">
                                            <Form.Control type="text" id="lname" placeholder="Last Name" required></Form.Control>
                                        </Form.Group>
                                        <Form.Group className="formgroup">
                                            <Form.Control type="email" id="email" placeholder="Email" required></Form.Control>
                                        </Form.Group>
                                        <Form.Group className="formgroup">
                                            <Form.Control type="text" id="phoneno" placeholder="Phone No." required></Form.Control>
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