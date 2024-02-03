import { Component, React } from 'react';
import {FaCode} from 'react-icons/fa';
import {Container, Row, Col, Button, Carousel} from 'react-bootstrap';
import project_info from './../assets/jsonFiles/projectInfo.json';
import images from './images.js'

class Projects extends Component{

    projectInfo(){
        var project_cols = [];
        Object.entries(project_info).map(([key, value], index) => { 
            Object.entries(value).map(([key_1, value_1], index) => {
                var tmp_className = "square first r"+(Number(key)+1)+" c"+(Number(key_1)+1);
                var style_ = {
                    backgroundImage: "url("+images[value_1["project_img_id"]]+")",
                    backgroundSize: "100%"
                };
                project_cols.push(
                    (
                        <>
                        <Col sm  key={key+key_1}>
                            <div className={tmp_className} style={style_}> 
                                <p>Sqaure</p>
                                <div  className="button">
                                    <Button variant="primary" target="_blank" href={value_1["project_img_url"]}>Github Repo</Button> 
                                </div>
                            </div>
                        </Col>
                        <br/>
                        </>
                    )
                )
            })
        });
        return project_cols;
    }

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
                                <Row fluid="true">
                                    {this.projectInfo()}
                                </Row>
                            </div>
                            <div className="large-screen">
                                <Row fluid="true">
                                    {this.projectInfo()}
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