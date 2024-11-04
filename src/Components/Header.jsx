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
        </div><br/><br/>
        <div className='content_container'>
        <h1 className='w-full text-green-400 text-4xl leading-relaxed'>Welcome,<br/>I'm Rajaguru
        <p> I am a Full Stack Developer</p>

        </h1>
        <p className="text-yellow-300 text-2xl">I am proficient in React JS, Node JS and MongoDB, using these as Frontend, Backend and Database, I will create websites in my unique style... </p>        
    </div>
      </div>
    </div>

  )

}
export default Header;