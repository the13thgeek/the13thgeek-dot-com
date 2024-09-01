import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./About.scss";
import profilePhoto from '../assets/about/profile-photo-geek.jpg';
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from "../assets/about_profile.svg";

const About = () => {

  const [lang, setLang] = useState("EN");

  const handleChangeLang = (val) => {
    setLang(val);
  };
  
    useEffect(() => {
    document.title = "About | " + import.meta.env.VITE_GLOBAL_SITE_TITLE;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="about" className="about">
          <div className="g-content-container intro">
            <div className="descriptor">01 <span className="title">Profile</span></div>
            <h1>About Me</h1>

            <div className="overview">
              <div className="profile-photo">
                <img src={profilePhoto} alt="Profile Photo" />
              </div>
                <div className="profile-main">
                  <div className="heading">
                    <h3 className="name-dictionary">Aldreich <small>/ˈɔːldrɪtʃ/</small></h3>
                    <h3 className="highlighter">
                      <div>Frontend developer currently based in Toronto, Canada. Mostly focused on working on the front-end side of things including UI/UX and graphic design.</div>
                    </h3>
                  </div>
                  <div className="body-content">
                    <p className='generic'>I began my front-end journey in the early 2000s as a high school student. My initial thought was that I wanted to put together a website for my class as we just got our first Internet connection. I used the gool ol' <b>Microsoft FrontPage Express</b> that came with Windows and signed up for a free <b>GeoCities</b> (!) account.</p>
                    <p className='generic'>It was that project that started off as a hobby and it eventually ignited my interest in web development, and the rest was history. I've been a front-end developer for the last ten years. I've specialized in UI/UX and client interaction while working with frameworks and languages including React, HTML5, CSS, SASS, PHP, Laravel and WordPress.</p>
                    <p className='generic'>I've worked closely with numerous design and consulting organizations over the past decade, overseeing and contributing to projects in a variety of roles. These included application management, digital transformations, and redesigns of company websites. I'm particularly passionate about modernizing legacy systems and streamlining business processes.</p>
                    <p className='generic'>My work on the visual side of things has fueled my interest in multimedia and engaging user experiences. I'm currently expanding my skillset in UI/UX to blend creativity with logic and turning the subjective into objective.</p>
                    <div className="actions">
                      <Link className="g-action" target="_blank" to="#"><i className="fa-solid fa-file-pdf"></i> My Resume <i className="fa-solid fa-chevron-right"></i></Link>
                    </div>
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

          {/* <div className="g-content-container overview">
            
            <div className="profile-main">
              <h3 className="name-dictionary">Aldreich <small>/ˈɔːldrɪtʃ/</small></h3>
              <h3 className="highlighter">
                <div>Frontend developer currently based in Toronto, Canada. Mostly focused on working on the front-end side of things including UI/UX and graphic design.</div>
              </h3>
              <p className='generic'>I began my front-end journey in the early 2000s as a high school student. My initial thought was that I wanted to put together a website for my class as we just got our first Internet connection. I used the gool ol' <b>Microsoft FrontPage Express</b> that came with Windows and signed up for a free <b>GeoCities</b> (!) account.</p>
              <p className='generic'>It was that project that started off as a hobby and it eventually ignited my interest in web development, and the rest was history. I've been a front-end developer for the last ten years. I've specialized in UI/UX and client interaction while working with frameworks and languages including React, HTML5, CSS, SASS, PHP, Laravel and WordPress.</p>
              <p className='generic'>I've worked closely with numerous design and consulting organizations over the past decade, overseeing and contributing to projects in a variety of roles. These included application management, digital transformations, and redesigns of company websites. I'm particularly passionate about modernizing legacy systems and streamlining business processes.</p>
              <p className='generic'>My work on the visual side of things has fueled my interest in multimedia and engaging user experiences. I'm currently expanding my skillset in UI/UX to blend creativity with logic and turning the subjective into objective.</p>
              <div className="actions">
                <Link className="g-action" target="_blank" to="#"><i className="fa-solid fa-file-pdf"></i> My Resume <i className="fa-solid fa-chevron-right"></i></Link>
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
          </div> */}

          <div className="filter"></div>

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
        <section id="off-the-grid" className="off-the-grid">        
            <div className="g-content-container">
              <div className="descriptor">02 <span className="title">Profile Extended</span></div>
              { (lang === "EN") ? (<h2>Off the Grid</h2>) : `` }
              { (lang === "JP") ? (<h2 className="jp">オフラインの生活</h2>) : `` }
              { (lang === "PH") ? (<h2>Buhay Off-screen</h2>) : `` }
              <div className="language-selector">
                <p>
                  { (lang === "EN") ? `Language` : `` }
                  { (lang === "JP") ? `言語設定` : `` }
                  { (lang === "PH") ? `Wika` : `` }
                </p>
                <ul className="language-list">
                  <li>
                    <Link to="#" onClick={() => handleChangeLang('EN')} className={ (lang === "EN") ? `active` : `` }>
                    { (lang === "EN") ? `EN` : `` }
                    { (lang === "JP") ? `英語` : `` }
                    { (lang === "PH") ? `EN` : `` }
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handleChangeLang('JP')} className={ (lang === "JP") ? `active` : `` }>
                    { (lang === "EN") ? `JP` : `` }
                    { (lang === "JP") ? `日本語` : `` }
                    { (lang === "PH") ? `JP` : `` }
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handleChangeLang('PH')} className={ (lang === "PH") ? `active` : `` }>
                    { (lang === "EN") ? `PH` : `` }
                    { (lang === "JP") ? `フィリピン語` : `` }
                    { (lang === "PH") ? `PH` : `` }
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="g-content-container">
              <div className="col-a">
                { (lang === "EN") ? (
                  <>
                    <p className='generic'>When I'm not busy crafting digital experiences, you'll often find me enjoying movies and video games on Twitch with friends, doing casual cosplays at comic conventions, or just walking around exploring Toronto while listening to J-Pop and EDM. I also make time for running, (casual) photography, and exploring new places! My travels have taken me to the United States, Japan, Hong Kong, and Macau so far&mdash; and this is just the beginning!</p>
                    <p className='generic'>I'm currently learning Japanese, so you might spot the occasional Japanese post (with translations, of course!).</p>
                    <p className='generic'>While I'm not [yet] an avid reader, I enjoy a good read. Some of my favourite authors include Kyle Higgins, Dan Brown and Suzanne Collins. I recently finished reading <i>Mary and the Secret Garden</i> and I'm currently hooked on Boom! series' <i>Power Rangers Comics</i> universe.</p>
                  </>
                ) : (<></>) }
                { (lang === "JP") ? (
                  <>
                    <small className="generic jp"><b>警告:</b> 文法が間違っている可能性があります。</small>
                    <p className="generic jp">パソコンの前に忙しくないときは、友達と一緒に映画を見たり、Twitchでビデオゲームを楽しんだり、コミコンでコスプレをしたり、J-POPやEDMなどを聞きながらトロントを散歩してる事が多いです。また、時々ランニングや写真撮影、いろいろな新しい所を観光にも時間を割いています。今までアメリカ、日本、香港、マカオにいたことがあるんだけど、これはまだ冒険の始まりに過ぎません!</p>
                    <p className="generic jp">現在日本語を勉強しているので、このサイトで時々日本語で練習すると日本語の投稿が見られるかもしれません（訳するつもり、大丈夫なんです!）。</p>
                    <p className="generic jp">まだ本の虫にならないんですが、いい本を読むのが好きです。お気に入りの作家にはカイル・ヒギンズ、ダン・ブラウン、スザンヌ・コリンズなどがいます。最近「秘密の花園」を読み終え、現在はブーンシリーズの「パワーレンジャー」の漫画を読み込んでいます。</p>
                  </>
                ) : (<></>) }
                { (lang === "PH") ? (
                  <>
                    <p className='generic'>Kapag wala ako sa harap ng computer, madalas akong lumalabas at nanood ng pelikula o naglalaro ng video games sa Twitch kasama ang mga kaibigan, nagko-cosplay sa mga conventions or kaya naglalakad lang sa Toronto habang nakikinig ng J-Pop at EDM. Minsan tumatakbo din ako, kumukuha ng litrato at namamasyal sa iba't-ibang lugar. Nakapasyal na ako sa Amerika, bansang Hapon, Hong Kong at Macau&mdash; at madami pa akong gustong mapasyalan!</p>
                    <p className='generic'>Kasalukuyan akong nag-aaral ng wikang Hapon, kaya minsan ay mapapansin ninyong nagpa-practice ako dito (may translation naman, okey lang yan!)</p>
                    <p className='generic'>Hindi pa naman ako masyadong nahuhumaling sa pagbabasa, pero may mga nagugustuhan naman ako. Paborito kong basahin yung mga gawa nila Kyle Higgins, Dan Brown at Suzanne Collins. Kakatapos ko lang basahin yung <i>Mary and the Secret Garden</i> at ngayon binabasa ko yung komics ng <i>Power Rangers</i> na gawa ng Boom! Studios.</p>
                  </>
                ) : (<></>) }
              </div>
            </div>
            <div className="filter"></div>
        </section>

        <section className="socials" id="socials">
          <div className="g-content-container">
            <div className="descriptor">03 <span className="title">Socials</span></div>
            <h2>Follow Me</h2>
          </div>
          <div className="g-content-container">
            <div className="showcase">
              <a href="//www.linkedin.com/in/aldreich-aguilar/" target="_blank" rel="noopener" className="social-item linkedin">
                <div className="detail">
                  <i className="fa-brands fa-linkedin-in"></i>
                  <p>LinkedIn</p>
                </div>
              </a>
              <a href="//x.com/the13thgeek" target="_blank" rel="noopener" className="social-item twitter">
                <div className="detail">
                    <i className="fa-brands fa-x-twitter"></i>
                    <p>X (formerly Twitter)</p>
                </div>
              </a>
              <a href="//instagram.com/the13thgeek" target="_blank" rel="noopener" className="social-item instagram">
                <div className="detail">
                    <i className="fa-brands fa-square-instagram"></i>
                    <p>Instagram</p>
                </div>
              </a>
              <a href="//twitch.tv/the13thgeek" target="_blank" rel="noopener" className="social-item twitch">
                <div className="detail">
                    <i className="fa-brands fa-twitch"></i>
                    <p>Twitch</p>
                </div>
              </a>
            </div>
          </div>

          {/* <div className="actions social">
            
            <Link className="g-action" target="_blank" to="//x.com/the13thgeek"><i className="fa-brands fa-x-twitter"></i> X (Twitter) <i className="fa-solid fa-chevron-right"></i></Link>
            <Link className="g-action" target="_blank" to="//twitch.com/the13thgeek"><i className="fa-brands fa-twitch"></i> Twitch <i className="fa-solid fa-chevron-right"></i></Link>
            <Link className="g-action" target="_blank" to="//instagram.com/the13thgeek"><i className="fa-brands fa-square-instagram"></i> Instagram <i className="fa-solid fa-chevron-right"></i></Link>
          </div> */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
