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
      <div className="skill">
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
                  <h4>HTML / CSS</h4>
                  <ul>
                    <li>
                      <span>HTML5, CSS3</span>
                    </li>
                    <li>
                      <span>
                        <b>Preprocessors:</b> PUG, SASS
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Modular:</b> BEM
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>JavaScript</h4>
                  <ul>
                    <li>
                      <span>
                        <b>Frameworks & Libraries:</b> &nbsp; React JS, React
                        Native, Vue.js, Nuxt
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
                <div className="skill__details">
                  <h4>Version Control Systems</h4>
                  <ul>
                    <li>
                      <span>GIT</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>E-Commerce</h4>
                  <ul>
                    <li>
                      <span>Shopify</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details"> 
                  <h4>Server Side</h4>
                  <ul>
                    <li>
                      <span>Node.js</span>
                    </li>
                    <li>
                      <span>Express.js</span>
                    </li>
                    <li>
                      <span>MongoDB</span>
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
