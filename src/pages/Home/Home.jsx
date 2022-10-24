import React, { useState, useEffect } from "react";
import "./home.css";
import lap from "../../images/lap.png";
import { ImCss3, ImGithub, ImHtmlFive } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiJsonwebtokens,
  SiLinkedin,
} from "react-icons/si";
import Slider from "../../components/Slider/Slider";
function Home() {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  hiddenElements.forEach((el) => observer.observe(el));

  const [background, setBackground] = useState("");

  const styles = { backgroundImage: `url(${background})` };

  return (
    <div className='home'>
      <div className='hero hidden show'>
        <div className='primary-content'>
          <h2>
            <span>✌🏻</span>Hi There! I am Mohcine
          </h2>
          <h3>a web developer trying to find solutions for web problems</h3>
          <p>
            I am a self-taught Web developer . Highly motivated and ready to
            learn any new skill that can help me resolve the problem that I work
            for it.
          </p>
        </div>
        <div className='secondery-content'>
          <img src={lap} alt='' />
        </div>
      </div>
      <div className='tooling hidden'>
        <div className='tooling-title title '>Tooling</div>
        <div className='tools'>
          <ul>
            <li>
              <span>
                <ImHtmlFive />
              </span>
              html
            </li>
            <li>
              <span>
                <ImCss3 />
              </span>
              css
            </li>
            <li>
              <span>
                <SiJavascript />
              </span>
              javascript
            </li>
            <li>
              <span>
                <SiTypescript />
              </span>
              typescript
            </li>
            <li>
              <span>
                <SiReact />
              </span>
              reactJs
            </li>
            <li>
              <span>
                <SiNodedotjs />
              </span>
              Node js
            </li>
            <li>
              <span>
                <SiRedux />
              </span>
              Redux
            </li>
            <li>
              <span>
                <SiJsonwebtokens />
              </span>
              JWT
            </li>
          </ul>
        </div>
      </div>
      <div className='showcase hidden'>
        <div className='showcase-title title'>Showcase</div>
        <div className='showrome'>
          <div className='carsoual' style={styles}></div>
          <Slider setBackground={setBackground} />
        </div>
        <div className='btn-wrapper'>
          <button>
            <a href='/works'>All Projects Info</a>
          </button>
        </div>
      </div>
      <div className='connect hidden'>
        <div className='title'>Connect With Me</div>
        <div className='connect-links'>
          <a
            className='links github'
            href='https://github.com/mohcine50/'
            target='_blank'
          >
            Github
            <ImGithub style={{ fontSize: "30px" }} />
          </a>

          <a
            className='links linkedin'
            href='https://www.linkedin.com/in/mohcine50'
            target='_blan'
          >
            LinkedIn
            <SiLinkedin style={{ fontSize: "30px" }} />
          </a>

          <a
            className='links email'
            href='mailto:mohcinela1998@gmail.com'
            target='_blank'
          >
            E-mail
            <MdEmail style={{ fontSize: "30px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
