import { useEffect, useState } from "react";
import type { IData } from "../../Home/Models/HomeModels";
import { HomeService } from "../../Home/Service/HomeService";
import { useGSAP } from "@gsap/react";
import { initScrollPath } from "../../../scrollGsap/scroll";
// import line from "../../../assets/img/svg-path (9).svg"
const About = () => {
  useGSAP(() => {
    initScrollPath();
  });
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
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="aboutTopSide">
            <div className="aboutTopSideText">
              <h3 className="aboutTitle">I'm Gunel, a Frontend Developer.</h3>
              <p className="description">{data?.about_text}</p>
            </div>
            <div className="aboutImg">
              <img src={data?.profile_image} alt="" />
            </div>
          </div>
          <div className="skillsGrid">
            <h2 className="skilsGridTitle">
              I use a modern set of tools to bring ideas to life with clean code
              and smooth animations.
            </h2>
            <div className="gsapLine">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1874.27 -195.183 3371 8337"
              >
                <path
                  d="M-183.246-95.183-205.96 8041.844M-1774.271 4598.397-217.332 4598.397M1316.878 3552.862-183.239 3541.497M-1626.532 2257.307-183.246 2268.637M1373.692 1098.092-171.882 1109.456M-194.595 5882.585 1396.438 5871.22"
                  stroke="#FF9800"
                  stroke-width="10"
                  fill="#FF9800"
                />
              </svg>
            </div>
            {data?.skills &&
              Object.entries(data.skills).map(([category, items]) => (
                <div key={category} className="skillGroup">
                  <h4 className="categoryTitle">{category}</h4>
                  <div className="tagsContainer">
                    {Array.isArray(items) &&
                      items.map((skill, index) => (
                        <div key={index} className="skillTag">
                          {skill}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
