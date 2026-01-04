import Spline from "@splinetool/react-spline";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* TopSide */}
          <div className="footerTopSide">
            <div className="footerContact">
              <a href="mailto:gunelmm10@gmail.com" className="email">
                gunelmm10@gmail.com
              </a>
              <a
                target="_blank"
                href="https://wa.me/994519957262"
                className="phone-link"
              >
                +994 51 995 72 62
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
            <Link target="_blank" to={"www.linkedin.com/in/gunel-mammadova10"}>
              <IoLogoLinkedin className="fotterIcon" />
            </Link>
            <Link target="_blank" to={"https://github.com/Gunel1011"}>
              <IoLogoGithub className="fotterIcon" />
            </Link>
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
