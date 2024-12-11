import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import logo_html from "../../assets/img/logo-html5.png";
import logo_css from "../../assets/img/logo-css3.png";
import logo_js from "../../assets/img/logo-js.png";
import logo_bs from "../../assets/img/logo-bs.png";
import logo_mongo from "../../assets/img/logo-mongodb.png";
import logo_ejs from "../../assets/img/logo-ejs.png";
import logo_react from "../../assets/img/logo-react.png";
import logo_njs from "../../assets/img/logo-nodejs.png";
import heroku from "../../assets/img/logo-heroku.png";
import git from "../../assets/img/logo-git.png";
import postman from "../../assets/img/logo-postman.png";
import sublime3 from "../../assets/img/logo-sublime3.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi my name is Mark Anthony,a self-taught developer, and a proud
              Zuitt BootCamp alumnus, now specializing as a Full Stack
              Developer, <br />
              <p className="p-spacing">
                with a passion for coding and a keen eye for design, I thrive on
                building websites from scratch, creating seamless user
                experiences, and bringing innovative ideas to life.
              </p>
              <p className="p-spacing">
                Whether you're looking to develop a brand new site or enhance an
                existing one, I'm here to turn your vision into reality
              </p>
            </p>
          </div>
          <div className="about-skills">
            <div className="tech-stack-header">
              <h2>Web Development Stack</h2>
            </div>
            <div className="about-skill">
              <div className="tech-stack-subtitle">
                <h3>Front-End</h3>
              </div>
              <div className="tech-stack-body">
                <img src={logo_html} alt="HTML Logo" />
                <img src={logo_css} alt="CSS Logo" />
                <img src={logo_js} alt="JavaScript Logo" />
                <img src={logo_bs} alt="Bootstrap Logo" />
              </div>
            </div>
            <div className="about-skill">
              <div className="tech-stack-subtitle">
                <h3>Back-End</h3>
              </div>
              <div className="tech-stack-body">
                <img src={logo_mongo} alt="MongoDB Logo" />
                <img src={logo_ejs} alt="EJS Logo" />
                <img src={logo_react} alt="React Logo" />
                <img src={logo_njs} alt="Node.js Logo" />
              </div>
            </div>
            <div className="about-skill">
              <div className="tech-stack-subtitle">
                <h3>Other Tools</h3>
              </div>
              <div className="tech-stack-body">
                <img src={heroku} alt="heroku" />
                <img src={git} alt="git" />
                <img src={postman} alt="postman" />
                <img src={sublime3} alt="sublime3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
