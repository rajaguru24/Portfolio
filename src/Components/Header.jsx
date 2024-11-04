import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header=()=>{
  return(
    <div className="header">
      <div className="header_left">
       <h2>
          Rajaguru Portfolio
          </h2>
        <div className="header_right">
        <Link to="skills"><h4>Skills</h4></Link>
        <Link to="certification"><h4>Certification</h4></Link>
        <Link to="projects"><h4>Projects</h4></Link>
        <Link to ='resume'><h4>Resume</h4></Link>
        <Link to ="contact"><h4>Contact</h4></Link>
        </div>
        
      </div>
    </div>

  )

}
export default Header;