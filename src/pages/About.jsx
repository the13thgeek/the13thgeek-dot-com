import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Navbar from "../components/Navbar/Navbar";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Footer/Footer";
import "./About.scss";
import profilePhoto from '../assets/about/profile-photo-geek.jpg';
import imgBranding from '../assets/global/the13thgeek-brand.svg';
import imgFlagCan from '../assets/about/lang-en.png';
import imgFlagJpn from '../assets/about/lang-jp.png';
import imgFlagPhl from '../assets/about/lang-ph.png';
import seoCard from '../assets/global/seo-card-about.jpg';

const About = () => {

  const [lang, setLang] = useState("EN");

  const handleChangeLang = (val) => {
    setLang(val);
  };
  
    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Helmet>
        <title>About | {import.meta.env.VITE_GLOBAL_SITE_TITLE}</title>
        <meta name="description" content="Learn more about Aldreich, the tech geek behind @the13thgeek. Discover his journey as a web developer, gamer and geek culture enthusiast!" />
        <meta name='keywords' content='Web development, React developer, tech blog, geek culture, Kamen Rider fan, Power Rangers fan, gaming, Twitch streamer, Toronto developer, developer portfolio, the13thgeek' />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://the13thgeek.com/#/about" />

        <meta property="og:title" content={`About | ` + import.meta.env.VITE_GLOBAL_SITE_TITLE} />
        <meta property="og:description" content="Learn more about Aldreich, the tech geek behind @the13thgeek. Discover his journey as a web developer, gamer and geek culture enthusiast!" />
        <meta property="og:image" content={seoCard} />
        <meta property="og:url" content="https://the13thgeek.com/#/about" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`About | ` + import.meta.env.VITE_GLOBAL_SITE_TITLE} />
        <meta name="twitter:description" content="Learn more about Aldreich, the tech geek behind @the13thgeek. Discover his journey as a web developer, gamer and geek culture enthusiast!" />
        <meta name="twitter:image" content={seoCard} />
        <meta name="twitter:site" content="@the13thgeek" />
    </Helmet>
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
                          <h3 className="popup"><i className="fa-solid fa-thumbs-up"></i> Open to work!</h3>
                          <h3 className="highlighter">
                          <div>Aldreich is a Toronto-based developer who codes with creativity, and surprisingly not always glued to his screen.<sup>1</sup> He likes poutine, binging NBC comedies and staring up at the CN Tower.</div>
                          </h3>
                      </div>
                      <div className="body-content">
                          <p>He likes video games too, though nothing makes him question his life choices more than a spiny shell in Mario Kart. He claims he's allergic to them but somehow always seems to attract them.</p>
                          <p>With over 10 years in web development, Aldreich has worked with design and consulting firms to redesign corporate websites and modernize legacy systems. He has a knack for creating interactive experiences and bringing mockups to life. He maintains an ever-growing "special set of skills" that include PHP, WordPress and a healthy dose of Javascript with React.</p>
                          <p>When he's not coding or fixing something, Aldreich dabbles in streaming his video games, travelling, action figure photography, cosplaying at comic cons and learning Japanese.<sup>2</sup> He's currently upskilling in UX Design, Node.js and REST APIs, and applying what he's learned to his current projects.</p>
                          <p>Aldreich personally believes that web development is the art of trying to please everybody&mdash; and just like Barney Stinson, he'd say, "Challenge accepted!"</p>
                          <p className="footnote">
                            1. (boldly) assuming video games don't count<br />
                            2. He passed JLPT N5 level (Elementary), working towards N4
                          </p>
                          {/* <div className="call-to-action">
                              <Link className="cta-link" target="_blank" to="#"><i className="fa-solid fa-file-pdf"></i> My Resume <i className="fa-solid fa-chevron-right"></i></Link>
                          </div> */}
                          <hr className="divider" />
                          <div className="descriptor about-2-background">
                              <span className="title">Projects</span>
                          </div>
                          <div className="background-data">
                            <div className="item">
                                <h3>work.history<span>(tech)</span></h3>
                                <hr className="sub-divider" />
                                <p>
                                    <b>Online Business Systems</b><br />
                                    <span className="job-type f">F</span> Jr Software Engineer,<br />Digital Transformation<br />
                                    <em>2021 - 2024</em>
                                </p>
                                <p>
                                    <b>Artis REIT</b><br />
                                    <span className="job-type f">F</span> Full-Stack Web Developer,<br />Marketing & Creative<br />
                                    <em>2014 - 2021</em>
                                </p>
                                <p>
                                    <b>Web Wizards, Inc</b><br />
                                    <span className="job-type f">F</span> Web Developer<br />
                                    <em>2011 - 2013</em>
                                </p>
                                <p>
                                    <b>Tsukiden Global Solutions, Inc</b><br />
                                    <span className="job-type f">F</span> Design Engineer II,<br />2nd Business Unit<br />
                                    <em>2008 - 2011</em>
                                </p>
                                <h3>work.history<span>(non-tech)</span></h3>
                                <hr className="sub-divider" />
                                <p>
                                    <b>Downtown Community Safety Partnership</b><br />
                                    <span className="job-type p">P</span> CONNECT Team Member<br />
                                    <em>2020 - 2022</em>
                                </p>
                                <p>
                                    <b>Downtown Winnipeg BIZ</b><br />
                                    <span className="job-type p">P</span> Downtown Watch Ambassador<br />
                                    <em>2017 - 2020</em>
                                </p>
                                <p>
                                  <small>
                                    <span className="job-type f">F</span> Full-time<br />
                                    <span className="job-type p">P</span> Part-time
                                  </small>
                                </p>
                            </div>
                            <div className="item">
                                <h3>skills.tech<span>()</span></h3>
                                <hr className="sub-divider" />
                                <p>
                                    HTML5<br />
                                    CSS/SASS<br />
                                    JavaScript<br />
                                    jQuery<br />
                                    React<br />
                                    PHP<br />
                                    NodeJS<br />
                                    Express<br />
                                    SQL/mySQL<br />
                                    WordPress<br />
                                    Git<br />
                                    Figma<br />
                                    Photoshop<br />
                                    After Effects<br />
                                    Microsoft Office
                                </p>
                                <h3>skills.people<span>()</span></h3>
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
                                <h3>volunteer<span>()</span></h3>
                                <hr className="sub-divider" />
                                <p>
                                    <b>The Momentum Centre</b><br />
                                    Board Member<br />
                                    <em>2018 - 2022</em>
                                </p>
                                <p>
                                    <b>Downtown Winnipeg BIZ</b><br />
                                    Downtown Watch Volunteer/Customer Service Team<br />
                                    <em>2014 - 2017</em>
                                </p>
                                <p>
                                    <b>Bike Week Winnipeg</b><br />
                                    Pit Stop Personnel<br />
                                    <em>2014 - 2017</em>
                                </p>
                            </div>
                            <div className="item">
                                <h3>education<span>()</span></h3>
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
                          <li>avgeek</li>
                          <li>traveller</li>
                          <li>sitcom buff</li>
                          <li>gamer</li>
                          <li>cosplayer</li>
                      </ul>
                  </div>

              </div>
          </div>
      </section>

      <section id="off-the-grid" className="off-the-grid">        
          <div className="content-container">
            <div className="descriptor about-3-irl">
                <span className="title">IRL</span>
            </div>
            { (lang === "EN") ? (<h2>Off the Grid</h2>) : `` }
            { (lang === "JP") ? (<h2 className="jp">オフラインの生活</h2>) : `` }
            { (lang === "PH") ? (<h2>Buhay Off-screen</h2>) : `` }
            <div className="language-selector">
              <div className="div">
                <p>
                  { (lang === "EN") ? `Language` : `` }
                  { (lang === "JP") ? `言語設定` : `` }
                  { (lang === "PH") ? `Wika` : `` }
                </p>
              </div>
              <ul className="language-list">
                <li>
                    <Link to="#" onClick={() => handleChangeLang('EN')} className={ (lang === "EN") ? `active` : `` }>
                        <img src={imgFlagCan} alt="English" />
                    </Link>
                </li>
                <li>
                    <Link to="#" onClick={() => handleChangeLang('JP')} className={ (lang === "JP") ? `active` : `` }>
                        <img src={imgFlagJpn} alt="日本語" />
                    </Link>
                </li>
                <li>
                    <Link to="#" onClick={() => handleChangeLang('PH')} className={ (lang === "PH") ? `active` : `` }>
                        <img src={imgFlagPhl} alt="Tagalog" />
                    </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-container">
            <div className="col-a">
              { (lang === "EN") ? (
                <>
                  <p>When Aldreich is not busy crafting digital experiences, you'll often find him enjoying movies and video games on Twitch with his friends, doing casual cosplays at comic conventions, or just walking around exploring Toronto while listening to J-Pop and EDM. He makes time as well for running, (casual) photography, and exploring new places! His travels have taken him to the United States, Japan, Hong Kong, and Macau so far&mdash; and would love to visit more places!</p>
                  <p>He is currently learning Japanese, so you might spot the occasional Japanese post (with translations, of course!).</p>
                  <p>While not exactly a bookworm, he enjoys a good read! Some of his favourite authors include Kyle Higgins, Dan Brown and Suzanne Collins. He had just recently finished reading <i>Mary and the Secret Garden</i> and he's currently hooked on Boom! series' <i>Power Rangers Comics</i> universe.</p>
                </>
              ) : (<></>) }
              { (lang === "JP") ? (
                <>
                  <small className="generic jp"><b>警告:</b> 文法が間違っている可能性があります。</small>
                  <p className="generic jp">アルドリーッチはパソコンの前に忙しくないときは、友達と一緒に映画を見たり、Twitchでビデオゲームを楽しんだり、コミコンでコスプレをしたり、J-POPやEDMなどを聞きながらトロントを散歩してる事が多いです。また、時々ランニングや写真撮影、いろいろな新しい所を観光にも時間を割いています。今までアメリカ、日本、香港、マカオにいたことがあるんだけど、これはまだ冒険の始まりに過ぎません!</p>
                  <p className="generic jp">現在日本語を勉強しているので、このサイトで時々日本語で練習すると日本語の投稿が見られるかもしれません（訳するつもり、大丈夫なんです!）。</p>
                  <p className="generic jp">まだ本の虫にならないんですが、いい本を読むのが好きです。お気に入りの作家にはカイル・ヒギンズ、ダン・ブラウン、スザンヌ・コリンズなどがいます。最近「秘密の花園」を読み終え、現在はブーンシリーズの「パワーレンジャー」の漫画を読み込んでいます。</p>
                </>
              ) : (<></>) }
              { (lang === "PH") ? (
                <>
                  <p>Kapag wala si Aldreich sa harap ng computer, madalas siyang lumalabas at nanood ng pelikula o naglalaro ng video games sa Twitch kasama ang mga kaibigan, nagko-cosplay sa mga conventions or kaya naglalakad lang sa Toronto habang nakikinig ng J-Pop at EDM. Minsan tumatakbo din siya, kumukuha ng litrato at namamasyal sa iba't-ibang lugar. Nakapasyal na siya sa Amerika, bansang Hapon, Hong Kong at Macau&mdash; at madami pasyang lugar na gustong mapasyalan!</p>
                  <p>Kasalukuyan siyang nag-aaral ng wikang Hapon, kaya minsan ay mapapansin ninyong nagpa-practice ako dito (may translation naman, okey lang yan!)</p>
                  <p>Hindi pa naman siya masyadong nahuhumaling sa pagbabasa, pero may mga nagugustuhan naman siyang mga babasahin. Paborito niya ang mga gawa nila Kyle Higgins, Dan Brown at Suzanne Collins. Kakatapos niya lang basahin yung <i>Mary and the Secret Garden</i> at kasalukuyan niya ngayong binabasa yung komics ng <i>Power Rangers</i> na inilathala ng Boom! Studios.</p>
                </>
              ) : (<></>) }
            </div>
          </div>
          <div className="filter"></div>
      </section>

      <section id="branding" className="branding">
        <div className="content-container">
          <div className="descriptor about-4-branding">
              <span className="title">Branding</span>
          </div>
          <h2>Why <span className="highlight">the13thgeek</span>?</h2>
          <div className="row">
            <div className="brand">
              <img src={imgBranding} alt="the13thgeek logo" />
            </div>
            <div className="content">
              <p>During Aldreich's university days when BBCode forums were popular, he frequently posted and shared C-language tips and hacks for his fellow IT freshmen. He initially wanted to use the handle "13thgeek"&mdash; because thirteen is his lucky number and "geek" being an IT undergrad at the time. However, the forum system didn't allow usernames to start with a digit, so he added "the" to bypass the restriction. This workaround not only solved the issue but also gave the handle a more distinct and definitive tone!</p>
              <p>The branding depicts both serious and playful personalities converging together in harmony. The default "style" for the logo is a paint splatter, but can be versatile and changed depending on the event or occasion.</p>
            </div>
          </div>
        </div>
      </section>

      <Connect customClassName="about-5-connect" />
    </main>
    <Footer />
    </>
  );
};

export default About;