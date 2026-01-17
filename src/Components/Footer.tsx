import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import type { IData } from "../Modules/Home/Models/HomeModels";
import { HomeService } from "../Modules/Home/Service/HomeService";

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* TopSide */}
          <div className="footerTopSide">
            <div className="footerContact">
              <a href="mailto:gunelmm10@gmail.com" className="email">
                {data?.email}
              </a>
              <a
                target="_blank"
                href="https://wa.me/994519957262"
                className="phone-link"
              >
                {data?.contact.phone}
              </a>
            </div>
            <div className="footerBlock">
              <h2>Copyright © 2026 M.Gunel</h2>
            </div>
          </div>
          {/* sosialLinks */}
          <div className="sosialLinks">
            <Link target="_blank" to={"https://www.instagram.com/silentz_gun/"}>
              <FaInstagram className="fotterIcon" />
            </Link>
            {data?.contact.social_links.linkedin && (
              <Link target="_blank" to={data?.contact.social_links.linkedin}>
                <IoLogoLinkedin className="fotterIcon" />
              </Link>
            )}
            {data?.contact.social_links.github && (
              <Link target="_blank" to={data.contact.social_links.github}>
                <IoLogoGithub className="fotterIcon" />
              </Link>
            )}
          </div>
          {/* BottomSide */}
          <div className="footerBottomSide">
            <div className="robot">
              <Spline scene="https://prod.spline.design/I0XhQJ4omypFXELB/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
