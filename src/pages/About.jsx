import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
              {/* <img src={profile_img} alt="" /> */}
            <div className="photo-geek"></div>
            <div className="profile-main">
              <h3 className="name-dictionary">Aldreich <small>/ˈɔːldrɪtʃ/</small></h3>
              <h3 className="highlighter">
                <div>Frontend developer currently based in Toronto, Canada. Mostly focused on working on the front-end side of things including UI/UX and graphic design.</div>
              </h3>
              <p>My frontend journey began in high school in the early 2000s when I created a class website on <b>GeoCities</b> using <b>Microsoft FrontPage Express</b>. That early project sparked my interest, culminating over 10 years of experience as a Frontend Developer. I've honed my skills in technologies like React, HTML5, CSS, SASS, PHP, Laravel, and WordPress, with a strong focus on UI/UX and communication.</p>
              <p>Throughout my career, I've worked extensively with design and consultation firms, leading projects on corporate website redesigns, digital transformations and application management. I'm particularly passionate about modernizing legacy systems and streamlining processes.</p>
              <p>My work on the visual side has fueled my interest in multimedia and engaging user experiences, and I'm currently expanding my skillset in UI/UX to blend creativity with logic and turning the subjective into objective.</p>
              <div className="actions">
                <Link className="g-action" target="_blank" to="#"><i class="fa-solid fa-file-pdf"></i> My Resume <i class="fa-solid fa-chevron-right"></i></Link>
              </div>
              <h3 className="highlighter">
                <div>Off the Grid</div>              
              </h3>
              <p>When I'm not busy crafting digital experiences, you'll often find me enjoying movies and video games on Twitch with friends, doing casual cosplays at comic conventions, or just walking around exploring Toronto while listening to J-Pop and EDM. I also make time for running, (casual) photography, and exploring new places! My travels have taken me to the United States, Japan, Hong Kong, and Macau so far&mdash; and this is just the start of my journey!</p>
              <p>I'm currently learning Japanese, so you might spot the occasional Japanese post (with translations, of course!).</p>
              <p>While I'm not [yet] an avid reader, I do enjoy a good book. Some of my favorite authors include Kyle Higgins, Dan Brown, and Suzanne Collins. I recently finished reading <i>Mary and the Secret Garden</i> and am currently diving into the <i>Boom! Power Rangers Comics</i> universe.</p>
              <h3 className="highlighter">
                <div>Follow me on...</div>              
              </h3>
              <div className="actions social">
                <Link className="g-action" target="_blank" to="//www.linkedin.com/in/aldreich-aguilar/"><i class="fa-brands fa-linkedin-in"></i> LinkedIn <i class="fa-solid fa-chevron-right"></i></Link>
                <Link className="g-action" target="_blank" to="//x.com/the13thgeek"><i class="fa-brands fa-x-twitter"></i> X (Twitter) <i class="fa-solid fa-chevron-right"></i></Link>
                <Link className="g-action" target="_blank" to="//twitch.com/the13thgeek"><i class="fa-brands fa-twitch"></i> Twitch <i class="fa-solid fa-chevron-right"></i></Link>
                <Link className="g-action" target="_blank" to="//instagram.com/the13thgeek"><i class="fa-brands fa-square-instagram"></i> Instagram <i class="fa-solid fa-chevron-right"></i></Link>
              </div>
            </div>
            <div className="profile-misc">
              <ul className="tags">
                <li>web dev</li>
                <li>cosplayer</li>
                <li>storyteller</li>
                <li>traveller</li>
                <li>gamer</li>
                <li>cosplayer</li>
              </ul>
              <div className="geek-origin">
                <h4>the13thgeek?</h4>
                <p>During my university days when BBCode forums were popular, I frequently posted and shared C-language tips and hacks for the IT freshmen. I initially wanted to use the handle "13thgeek"&mdash; with thirteen being my lucky number and "geek" being an IT undergrad at the time. However, the forum system didn't allow usernames to start with a digit, so I added <i>"the"</i> to bypass the restriction. This workaround not only solved the issue but also gave the handle a more distinct and definitive tone!</p>
              </div>
            </div>
          </div>

          
        </div>

        {/* <div className="about-sections">
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
        </div> */}

      </section>
      <Footer />
    </>
  );
};

export default About;
