import React from "react";
import classes from "./About.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function About(){
    return(
      <div id="Esperienze" className={classes.Esperienze}>
       <Container className={classes.Esp}>
        <Row>
            <Col>
              <h1 className={classes.h1Esp}>Esperienze</h1>
            </Col>
        </Row>
        <Row> 
          <Col md={12}  lg={6}>
            <Card>
              <Card.Header className={classes.CardOver}> 
                <span>
                  <FontAwesomeIcon icon={faBriefcase } className={classes.TitleIcon}/>
                  <h2 className={classes.h2Icon}>Esperienze Lavorative</h2>
                </span>
              </Card.Header>
              <Card.Header className={classes.Card}>
                <p className={classes.pTitolo}>Unity Junior Developer</p>
                <p className={classes.pAzienda}>TXT e-solutions, MI</p>
                <p className={classes.pPeriodo}>Dic 2019-Mar 2021</p>
              </Card.Header>
              <Card.Header className={classes.Card}>
                <p className={classes.pTitolo}>Xamarin.Forms Junior Developer</p>
                <p className={classes.pAzienda}>Exero s.p.a., LC</p>
                <p className={classes.pPeriodo}>Giu 2019-Set 2019</p>
              </Card.Header>
              <Card.Header className={classes.Card}>
                <p className={classes.pTitolo}>Stage Curriculare Xamarin.Forms</p>
                <p className={classes.pAzienda}>Unimib Biccocca, MI</p>
                <p className={classes.pPeriodo}>Ott 2018-Gen 2019</p>
              </Card.Header>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card className={classes.CardMargin}>
              <Card.Header className={classes.CardOver}>
                <span>
                  <FontAwesomeIcon icon={faGraduationCap} className={classes.TitleIcon}/>
                  <h2 className={classes.h2Icon}>Esperienze Formative</h2>
                </span>
              </Card.Header>
              <Card.Header className={classes.Card}>
                <p className={classes.pTitolo}>Corso Udemy Full Stack Web Developer</p>
                <p className={classes.pAzienda}>Corso Online</p>
                <p className={classes.pPeriodo}>Mar 2021-Apr 2021</p>
              </Card.Header>
              <Card.Header className={classes.Card}>
                <p className={classes.pTitolo}>Laurea Triennale In Informatica </p>
                <p className={classes.pAzienda}>Unimib Bicocca, MI</p>
                <p className={classes.pPeriodo}>2012-2019</p>
              </Card.Header>
              <Card.Header className={classes.Card}>
                <p className={classes.pTitolo}>Diploma Liceo Scientifico Tecnologico</p>
                <p className={classes.pAzienda}>ITIS A.Badoni, LC</p>
                <p className={classes.pPeriodo}>2006-2011</p>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;