import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import {faJs,faReact,faNodeJs,faCss3Alt,faGithub} from '@fortawesome/free-brands-svg-icons'
import {faDatabase,faCode } from '@fortawesome/free-solid-svg-icons';


export default function Skills(){

  return (
    
    <div className=" text-lime-500 md:my-5 py-17 text-4xl leading-relaxed">
      <div className="  text-yellow-400 ">Skills</div>
      <div className=" ">

        FrontEnd:
        <FontAwesomeIcon icon={faHtml5} color='white'/>
        HTML,
        <FontAwesomeIcon icon={faCss3Alt} color='white'/>
        CSS, 
        <FontAwesomeIcon icon={faJs} color='white'/>
        Javascript,
        <FontAwesomeIcon icon={faReact} color='white'/>
        React
      </div>
      <div>BackEnd: 
      <FontAwesomeIcon icon={faNodeJs} color='white' />
      NodeJS, 
      Express
      </div>
      <div>
      <FontAwesomeIcon icon={faDatabase} color='white'/>Databases: 
      <FontAwesomeIcon icon={faCode} color='white'/>
      MySQL,
      MongoDB
      </div>
      <div>Deployment: Netlify, Vercel, Render</div>
      <div>Version Control: 
      <FontAwesomeIcon icon={faGithub} color='white'/> GitHub</div>
    </div>
  );
};

