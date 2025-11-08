import {Data} from './data/Head.js';

import './style.css';

import ParticleBackground from './ParticleBackground.js';
import Typical from 'react-typical';

import icons from "./data/icons.js";
function Head(){
    return(
            
        
        <section className="light head-back cover-img" >
         {/* <ParticleBackground canvasClassName="example"/> */}
            <div className="stuff">
            <div className="stuff-head">
            <p>
                
            {/* <Typical
                steps={['Hi I am Maanasa', 1000, 
                'Welcome to my Page', 1000]}
                loop={Infinity}
            /> */}
            
            </p>
            </div>

                <div className="about inline centre">
                    <div className="photo">
                    <div className="pro-pic"><img src={Data[0].photo} alt="" /></div>
                    </div>
                    <div className="writing">
                        <h1 className="main-title">{Data[0].name}</h1>
                        <h2>{Data[0]['one-line']}</h2>
                        {Data[0].about}
                        <h3>
                        <a href="/Maanasa Manikantan-RESUME.pdf" target="_blank" rel="noopener noreferrer">
                            View Resume
                        </a>
                        </h3>
                        
                    </div>    
                    <div className="side">
                    {/* <div className="social-link"><a href={Data[0].github} className="git-link" target="_blank" rel="noreferrer noopener">{icons["git2"]}</a></div> */}
                    <div className="social-link"><a href={Data[0].li} className="git-link" target="_blank" rel="noreferrer noopener">{icons["li2"]}</a></div>
                    {/* <div className="social-link"><a href={Data[0].insta} className="git-link" target="_blank" rel="noreferrer noopener">{icons["insta2"]}</a></div> */}
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Head;