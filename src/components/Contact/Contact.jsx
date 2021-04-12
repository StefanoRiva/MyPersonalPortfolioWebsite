import React from "react";
import classes from "./Contact.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact(){
    return(
      <div id="Contatti">
      <Container className={classes.Contact}>
        <Row>
            <Col>
              <h1 className={classes.h1Contact}>Contatti</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Card className="text-center" className={classes.cardContact}>
                <Card.Header className={classes.cardHContact}>
                  <span>
                    <FontAwesomeIcon icon={faPhoneAlt } className={classes.TitleIcon}/>
                    <h2 className={classes.h2Icon}>Telefono</h2>
                  </span>
                </Card.Header>
                <Card.Body className={classes.cardBContact}>
                 <Card.Text>
                  342-6087483
                 </Card.Text>
                </Card.Body>            
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <Card className="text-center" className={classes.cardContact}>
                <Card.Header className={classes.cardHContact}>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope } className={classes.TitleIcon}/>
                    <h2 className={classes.h2Icon}>Email</h2>
                  </span>
                </Card.Header>
                <Card.Body className={classes.cardBContact}>
                 <Card.Text>
                    <Button className={classes.Button} variant="outline-dark" size="lg">
                        <a className={classes.a} href="mailto:stefanoriva92@gmail.com" download>Invia Mail</a>
                    </Button>
                 </Card.Text>
                </Card.Body>            
              </Card>
           </Col>
            <Col xs={12} md={6} lg={4}>
            <Card className="text-center" className={classes.cardContact}>
                <Card.Header className={classes.cardHContact}>
                  <span>
                    <FontAwesomeIcon icon={faComments } className={classes.TitleIcon}/>
                    <h2 className={classes.h2Icon}>Linkedin</h2>
                  </span>
                </Card.Header>
                <Card.Body className={classes.cardBContact}>
                 <Card.Text>
                    <Button className={classes.Button} variant="outline-dark" size="lg">
                        <a className={classes.a} href="https://www.linkedin.com/in/stefanoriva92/">Il Mio Profilo</a>
                    </Button>
                 </Card.Text>
                </Card.Body>            
              </Card>
            </Col>
           </Row>
      </Container>
    </div> );
}

export default Contact;