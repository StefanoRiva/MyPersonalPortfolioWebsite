import React from "react";
import {motion} from "framer-motion";

function NavLinks(props){
    
    function handleClick(){
        if(props.isMobile)
        {
            props.closeMobileMenu();
        }
    }

    const animateFrom = {opacity:0, y:-40};
    const animateTo = {opacity:1, y:0};
    
    
    return (
    <ul>
        <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay:0.1}}
            onClick={handleClick}>
            <a href="#Home">Home</a>
        </motion.li>
        <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay:0.2}}
            onClick={handleClick}>
            <a href="#Competenze">Competenze</a>
        </motion.li>
        <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay:0.3}}
            onClick={handleClick}>
            <a href="#Esperienze">Esperienze</a>
        </motion.li>
        <motion.li
            initial={animateFrom}
            animate={animateTo} 
            transition={{delay:0.4}}
            onClick={handleClick}>
            <a href="#Contatti">Contatti</a>
        </motion.li>
  </ul>  );
}
 
export default NavLinks;

 