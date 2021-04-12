import React,{useState} from "react";
import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css";
import {GiHamburgerMenu} from "react-icons/gi";
import {CgCloseR} from "react-icons/cg";
import {motion} from "framer-motion";


function MobileNavigation(){
    
    const[open, setOpen]= useState(false);

    const hamburgerIcons = <GiHamburgerMenu className={classes.Hamburger} onClick={handleClick}/>;

    const closeIcons = <CgCloseR className={classes.Hamburger} onClick={handleClick}/>;

     
    const animateFrom = {opacity:0, x:-40};
    const animateTo = {opacity:1, x:0};

    function handleClick(){
        setOpen(!open);
    }

    function closeMobileMenu(){
        setOpen(false);
    }
    
    return(
        <nav className={classes.MobileNavigation}>
            <motion.span initial={animateFrom} animate={animateTo}>Riva Stefano</motion.span>
            {open ? closeIcons : hamburgerIcons}
            {open ? <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/> : null}
        </nav>
    );
}

export default MobileNavigation;