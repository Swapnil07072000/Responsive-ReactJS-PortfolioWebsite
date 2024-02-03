import { Component, React } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Container, Row, Col, Card, CardImg } from 'react-bootstrap';
import education_info from './../assets/jsonFiles/educationInfo.json';
import images from './images.js';


class Education extends Component{

    educationInfo(){
        var education_div = [];
        Object.entries(education_info).map(([key, value], index) => { 
           
            education_div.push(
                (   <>
                    <Row fluid="true" className="row" key={key}>
                        <Col sm>
                            <Card fluid="true" className="card">
                                <CardImg src={images[value['college_img_id']]} className="cardimage">
                                </CardImg>
                                <Card.Body>
                                <div className="info">
                                    <h3>{value["degree_name"]}</h3>
                                    <p>{value["college_name"]}</p>
                                    <h4>{value["year_from"]}-{value["year_to"]} | {value["degree_status"]}</h4>
                                </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    </>
                )
            )
        })
        return education_div;
    }

    render(){  
        return(
            <section id="Education">
                <div className="Education">
                    <div className="title">
                        <p><FaGraduationCap size="50"/></p>
                    </div>
                    <div className="content">
                        <Container fluid="sm">
                            {this.educationInfo()}    
                        </Container>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;