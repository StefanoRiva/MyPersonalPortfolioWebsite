import classes from "./NavBar.module.css";
import React from "react";
import NavLinks from "./NavLinks";
import {motion} from "framer-motion";

function Navigation(){
    
    const animateFrom = {opacity:0, x:-40};
    const animateTo = {opacity:1, x:0};
    
    
    return(
        <nav className={classes.Navigation}>
            <motion.span  initial={animateFrom} animate={animateTo} >Riva Stefano</motion.span>
            <NavLinks/>
        </nav>
    );
}

export default Navigation;