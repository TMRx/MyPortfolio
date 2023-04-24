import React, { useEffect } from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import Button_Scroll from "./Button_Scroll";


// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from 'TagCloud';

import './Skills.scss';

export const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = '.tagcloud';
    let radii;

    // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
    return () => {
      const texts = [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'Vue',
        'Nuxt',
        'NodeJS',
        'Shopify',
        'Jquery',
        'ES6',
        'GIT',
        'GITHUB',
      ];
      // Decrasing 'radius' value for small screen devices  
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };

      TagCloud(container, texts, options);
    }
  }, []);
  return (
    <>
      <div className="skill" id="skills" >
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h2>Skills
              {/* <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>

              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                k
              </span>

              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                i
              </span>

              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                l
              </span>

              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                l
              </span>

              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                s
              </span> */}
            </h2>
          </div>
          <div className="skill__inner-container">
             <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>HTML/CSS/JS</h4>
                  <ul>
                    <li>
                      <span>HTML5, CSS3</span>
                    </li>
                     <li>
                      <span>
                        <b>Frameworks & Libraries:</b> &nbsp; React JS
                      </span>
                    </li>
                    <li>
                      <span>ES5/ES6</span>
                    </li>
                    <li>
                      <span>Node.js</span>
                    </li>
                    <li>
                      <span>jQuery</span>
                    </li>
                    <li>
                      <span>Typescript</span>
                    </li>
                  </ul>
                </div>
              {/* <div className="skill__details"> */}
                  {/* <h4>JavaScript</h4> */}
                  {/* <ul>
                   
                    <li>
                      <span>ES5/ES6</span>
                    </li>
                    <li>
                      <span>Node.js</span>
                    </li>
                    <li>
                      <span>jQuery</span>
                    </li>
                    <li>
                      <span>Typescript</span>
                    </li>
                  </ul> */}
                {/* </div> */}
                <div className="skill__details">
                  <h4>Python</h4>
                  <ul>
                    <li>
                      <span>PyQT, PySide, Tkinter </span>
                    </li>
                    <li>
                      <span> Multiprocessing, Threading, Socket, Asyncio </span>
                    </li>
                    <li>
                      <span> OOP </span>
                    </li>
                    <li>
                      <span> Django,  REST API, Flask API, GraphQL </span>
                    </li>
                    <li>
                      <span> TCP/IP, OSI, Http requests </span>
                    </li>
                    <li>
                      <span> Telegram Bots(aiogram, telegram-bot)</span>
                    </li>
                    <li>
                      <span> Clean Code</span>
                    </li>
                    
                  </ul>

                </div>
                <div className="skill__details">
                  <h4>Machine Learning</h4>
                  <ul>
                    <li>
                      <span> jupyter, numpy, scipy, pandas, keras, tensorflow, opencv</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details"> 
                  <h4>Others</h4>
                  <ul>
                    <li>
                      <span>Docker, Docker Compose, Kubernetes</span>
                    </li>
                    <li>
                      <span>AWS, GCP, Heroku</span>
                    </li>
                    <li>
                      <span>SQL, Postgresql</span>
                    </li>
                    <li>
                      <span>Unix/Linux</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> 

            {/* 3D Text Cloud  */}
             <div className="skill__cloud">
              <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200"></div>
            </div>
            
          </div> 
           <img className="background-image-left" src={colorSharp} alt="Image" />
        </div>
        <Button_Scroll />
      </div>
    </>
  );
};





// export default Skill;
