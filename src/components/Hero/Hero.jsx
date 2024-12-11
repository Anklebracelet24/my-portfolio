import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Mark Anthony</span>
      </h1>
      <h3>Full Stack developer</h3>
      <p>
        Hi there! I'm a full-stack developer trained at Zuitt BootCamp, ready to
        bring your dream website to life. Let's collaborate and turn your vision
        into a reality – together, we can build something amazing!
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">Download CV</div>
      </div>
    </div>
  );
};

export default Hero;
