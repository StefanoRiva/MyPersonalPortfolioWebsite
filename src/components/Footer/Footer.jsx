import React from "react";
import classes from "./Footer.module.css";

function Footer(){
    const date = new Date();
    return(
        <div className={classes.DivBody}>
           <br/> <br/>
           <p className={classes.Rights}>@{date.getFullYear()} Riva Stefano, All right reserved</p>
        </div>
    );
}

export default Footer;