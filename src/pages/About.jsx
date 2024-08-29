import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./About.scss";
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from "../assets/about_profile.svg";

const About = () => {

  useEffect(() => {
    document.title = "About | " + import.meta.env.VITE_GLOBAL_SITE_TITLE;
  }, []);

  return (
    <>
      <Navbar />
      <section id="about" className="about">
        <div className="g-content-container intro">
          <div className="descriptor">01 <span className="title">Profile</span></div>
          <h1>About Me</h1>
        </div>
        <div className="g-content-container overview">
          <div className="sections">
            <div className="left">
              {/* <img src={profile_img} alt="" /> */}
              <div className="photo-geek"></div>
              <ul className="tags">
                <li>web dev</li>
                <li>cosplayer</li>
                <li>storyteller</li>
                <li>traveller</li>
                <li>gamer</li>
                <li>cosplayer</li>
              </ul>
            </div>
            <div className="right">
              <h3 className="name-dictiopnary">Aldreich <small>/ˈɔːldrɪtʃ/</small></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                venenatis bibendum vestibulum. Cras molestie est quis lorem
                scelerisque, ut molestie massa vulputate. Nunc eget ultricies
                turpis. Phasellus at eros faucibus, pharetra diam sed, aliquet
                erat. Integer lacus purus, consequat nec sem ac, eleifend
                pharetra nunc.
              </p>
            </div>
          </div>

          
        </div>

        


        {/* <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div> */}
        <div className="about-sections">
          <div className="about-left">
            
          </div>
          <div className="about-right">
            <div className="about-para">
              
              <p>
                Vestibulum nunc ex, lacinia eget felis eget, sodales tempus sem.
                Nam id elit eget sapien sodales accumsan in id enim. Nam tellus
                massa, lacinia vel massa id, pulvinar ultricies massa.
                Suspendisse vestibulum diam ex, finibus blandit nulla maximus
                vitae. Praesent ultrices porttitor tortor eu rhoncus. Cras
                ultricies turpis in velit feugiat, nec posuere elit interdum.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML5 & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>ReactJS</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>NextJS</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
