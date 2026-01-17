import video from "../../../assets/img/video/network.mp4";
import { Link } from "react-router-dom";
import { GiCoffeeBeans } from "react-icons/gi";
import Typewriter from "typewriter-effect";
import { HomeService } from "../Service/HomeService";
import { useEffect, useState } from "react";
import type { IData } from "../Models/HomeModels";

const Home = () => {
  const [data, setData] = useState<IData | null>(null);
  const getData = async () => {
    try {
      const res = await HomeService.dataList();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
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
            <h1 className="homeTitle">{data?.bio}</h1>
            <div className="homeBio">
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
            </div>
            <p className="homeWork">
              {data?.experience.map((item) => item.position)}
            </p>
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
        </div>
      </div>
    </section>
  );
};
export default Home;
