import classes from "./Home.module.css";
import React from "react";
import pictureOfMe from "../../images/PictureOfMe.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {motion} from "framer-motion";


function Home(){
    
    const animateFrom = {opacity:0, x:40};
    const animateTo = {opacity:1, x:0};
        
    return(
    <div id="Home" className={classes.Home}>
        <Container>
          <Row>
            <Col xs={12} md={6}>
                <motion.h3
                className={classes.h3}
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.1}}>
                    Ciao, sono
                </motion.h3>
                <motion.h1 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.2}}
                className={classes.Hello}>
                    Riva Stefano
                </motion.h1>
                <motion.p
                className={classes.p}
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.3}}>
                    un Web Developer
                </motion.p>
                <motion.div 
                className={classes.button}
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.4}}>
                    <Button className={classes.Button} variant="outline-dark" size="lg">
                        <a className={classes.a} href="./CurriculumRivaStefano.pdf" download> Download CV</a>
                    </Button>
                </motion.div>
            </Col>
            <Col xs={12} md={6} className={classes.Col}>
                <motion.img 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.4}}
                className={classes.PictureOfMe} 
                src={pictureOfMe} 
                alt="Immagine Profilo" >
                </motion.img>  
            </Col>
          </Row>
      </Container>
    </div>);
}

export default Home;