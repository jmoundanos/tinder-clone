import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButtons from "@material-ui/core"
import "./Header.css";

function Header(){
    return (
    <div className="header">
        <PersonIcon className="header_icon" fontSize="large" />
        <img 
        className="header_logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinderlogo.com"
        alt="tinder logo"/>

        <ForumIcon className="header_icon" fontSize="large"/>
    </div>
    )
}


export default Header;