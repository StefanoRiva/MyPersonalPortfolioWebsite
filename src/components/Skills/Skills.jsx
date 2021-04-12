import React from "react";
import classes from "./Skills.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function Skills(){
    return(
    <div id="Competenze">
      <Container className={classes.Skills}>
        <Row>
            <Col>
              <h1 className={classes.h1Skills}>Competenze</h1>
            </Col>
          </Row>
          <Row> 
              <Col>
                <p className={classes.pSkills}>Sono un Junior Web Developer che ama mettersi in gioco e imparare sempre cose nuove.</p>
                <p className={classes.pSkills}>Qui sotto ci sono i linguaggi di programmazione, i frameworks, i toolkit e le librerie che conosco.</p>
                <p className={classes.pSkills}>Alcuni di questi li conosco meglio di altri.</p>
              </Col>
          </Row>
          <Row>
           <Col xs={12} md={6} lg={4}>
            <Card className="text-center" className={classes.cardSkills}>
             <Card.Header className={classes.cardHSkills}>
              <span>
                <FontAwesomeIcon icon={faFileCode } className={classes.TitleIcon}/>
                <h2 className={classes.h2Icon}>Frontend</h2>
              </span>
            </Card.Header>
                <Card.Body className={classes.cardBSkills}>
                    <Card.Text>
                         Reactjs HTML5 CSS3 Javascript Bootstrap JQuery
                    </Card.Text>
                </Card.Body>            
           </Card>
          </Col>
            <Col xs={12} md={6} lg={4}>
            <Card className="text-center" className={classes.cardSkills}>
             <Card.Header className={classes.cardHSkills}>
              <span>
                <FontAwesomeIcon icon={faDatabase } className={classes.TitleIcon}/>
                <h2 className={classes.h2Icon}>Backend</h2>
              </span>
             </Card.Header>
                <Card.Body className={classes.cardBSkills}>
                    <Card.Text>
                        Nodejs Express Mongoose MongoDB
                    </Card.Text>
                </Card.Body>            
          </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <Card className="text-center" className={classes.cardSkills}>
             <Card.Header className={classes.cardHSkills}>
              <span>
                <FontAwesomeIcon icon={faLaptopCode } className={classes.TitleIcon}/>
                <h2 className={classes.h2Icon}>Altre</h2>
              </span>
             </Card.Header>
                <Card.Body className={classes.cardBSkills}>
                    <Card.Text>
                         C# Java Git Github Sourcetree DevOps SQL Json
                    </Card.Text>
                </Card.Body>           
            </Card>
            </Col>
           </Row>
      </Container>
    </div> 
 );   
}

export default Skills;