import Spline from "@splinetool/react-spline";
import video from "../../../assets/img/video/network.mp4";
import { Link } from "react-router-dom";
import { GiCoffeeBeans } from "react-icons/gi";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <section className="home">
      <video
        onCanPlay={(e) => (e.currentTarget.muted = true)}
        autoPlay
        muted
        loop
        playsInline
        src={video}
      ></video>
      <div className="video-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="homeBlock">
            <h1 className="homeTitle">Hi! i’m Gunel</h1>
            <p className="homeBio">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Turning coffee ")
                    .typeString("☕")
                    .typeString(" and cookies ")
                    .typeString("🍪")
                    .typeString(" into code")
                    .pauseFor(2500)
                    .callFunction(() => {
                      console.log("Yazı bitdi, silinir...");
                    })
                    .deleteAll(50)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                }}
              />
            </p>
            <p className="homeWork">Frontend Developer</p>
            <div className="homeBtns">
              <button className="homeContactBtn">Contact Me</button>
              <span className="homeCookie">
                <GiCoffeeBeans />
              </span>
              <Link className="homeToWorkLink" to={"/"}>
                View Projects
              </Link>
              <span className="homeCookie">🍪</span>
            </div>
          </div>
          <div className="reactModel">
            <Spline scene="https://prod.spline.design/uj3aNEuZLxgg0vf2/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
