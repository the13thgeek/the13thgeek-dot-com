import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./About.scss";
import profilePhoto from '../assets/about/profile-photo-geek.jpg';

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
      <header className="main">
        <Navbar />
        <div className="page-title-bar about">
            <div className="content-container">
                <div className="descriptor about-1-profile">
                    <span className="title">Profile</span>
                </div>
                <h1>About Me</h1>
            </div>
        </div>
    </header>
      <main className="page-about">
        <section id="about-profile" className="about-profile">
            <div className="content-container">
                <div className="overview">
                    <div className="profile-photo">
                        <img src={profilePhoto} alt="Profile Photo" />
                    </div>
                    <div className="profile-main">
                        <div className="heading">
                            <h3 className="name-dictionary">Aldreich <small>/ˈɔːldrɪtʃ/</small></h3>
                            <h3 className="highlighter">
                            <div>Web experience creator [designer+developer] currently based in Toronto, Canada. Mostly focused on working on the front-end side of things including UX and graphic design.</div>
                            </h3>
                        </div>
                        <div className="body-content">
                            <p>My web dev journey began in the early 2000s when I built a class website using <b>FrontPage Express</b> and a free <b>GeoCities (!)</b> account back in high school. What started as a hobby sparked a lasting passion.</p>
                            <p>With over ten years of experience, I've specialized in UI/UX and client interaction, working with technologies like HTML5/CSS3, SASS, PHP, Laravel and WordPress. While my background is mostly in PHP/WordPress, I'm currently upskilling in React, REST, and Node.js and applying what I've learned so far on my ongoing projects.</p>
                            <p>I've collaborated with design and consulting firms, contributing to projects involving application management, digital transformations and website redesigns. I'm particularly passionate about modernizing legacy systems.</p>
                            <p>My focus on visual design has deepened my interest in multimedia and interactive user experiences. I'm currently expanding my UI/UX skills to merge creativity with logic.</p>
                            {/* <div className="call-to-action">
                                <Link className="cta-link" target="_blank" to="#"><i className="fa-solid fa-file-pdf"></i> My Resume <i className="fa-solid fa-chevron-right"></i></Link>
                            </div> */}
                            <hr className="divider" />
                            <div className="descriptor about-2-background">
                                <span className="title">Projects</span>
                            </div>
                            <div className="background-data">
                            <div className="item">
                                    <h3>Skill: Tech</h3>
                                    <hr className="sub-divider" />
                                    <p>
                                        HTML5 + CSS<br />
                                        JavaScript<br />
                                        jQuery<br />
                                        React<br />
                                        PHP<br />
                                        SQL/mySQL<br />
                                        WordPress<br />
                                        Git<br />
                                        Figma<br />
                                        Photoshop<br />
                                        After Effects<br />
                                        Microsoft Office
                                    </p>
                                    <h3>Skill: People</h3>
                                    <hr className="sub-divider" />
                                    <p>
                                        Attention to Detail<br />
                                        Empathy<br />
                                        Collaboration<br />
                                        Communication<br />
                                        Customer Service<br />
                                        Problem-Solving
                                    </p>
                                </div>
                                <div className="item">
                                    <h3>Work</h3>
                                    <hr className="sub-divider" />
                                    <p>
                                        <b>Online Business Systems</b><br />
                                        Jr Software Engineer,<br />Digital Transformation<br />
                                        <em>2021 - 2024</em>
                                    </p>
                                    <p>
                                        <b>Artis REIT</b><br />
                                        Full-Stack Web Developer,<br />Marketing & Creative<br />
                                        <em>2014 - 2021</em>
                                    </p>
                                    <p>
                                        <b>Web Wizards, Inc</b><br />
                                        Web Developer<br />
                                        <em>2011 - 2013</em>
                                    </p>
                                    <p>
                                        <b>Tsukiden Global Solutions, Inc</b><br />
                                        Design Engineer II,<br />2nd Business Unit<br />
                                        <em>2008 - 2011</em>
                                    </p>
                                </div>
                                <div className="item">
                                    <h3>Education</h3>
                                    <hr className="sub-divider" />
                                    <p>
                                        <b>Polytechnic University of the Philippines</b><br />
                                        Bachelor of Science, Information Technology<br />
                                        <em>March 2008</em>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="profile-misc">
                        <ul className="tags">
                            <li>web dev</li>
                            <li>cosplayer</li>
                            <li>storyteller</li>
                            <li>moviegoer</li>
                            <li>low-key avgeek</li>
                            <li>traveller</li>
                            <li>sitcom junkie</li>
                            <li>gamer</li>
                            <li>cosplayer</li>
                        </ul>
                        <div className="geek-origin">
                            <h4><span className="highlight">the13thgeek</span>?</h4>
                            <p>During my university days when BBCode forums were popular, I frequently posted and shared C-language tips and hacks for the IT freshmen. I initially wanted to use the handle "13thgeek"&mdash; with thirteen being my lucky number and "geek" being an IT undergrad at the time. However, the forum system didn't allow usernames to start with a digit, so I added <i>"the"</i> to bypass the restriction. This workaround not only solved the issue but also gave the handle a more distinct and definitive tone!</p>
                        </div>
                    </div>

                </div>
            </div>
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

        <section className="about-socials" id="about-socials">
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