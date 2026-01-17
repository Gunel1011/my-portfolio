import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const animatePath = (path: SVGPathElement, triggerSelector: string) => {
  const pathLine = path.getTotalLength();
  path.style.strokeDasharray = pathLine.toString();
  path.style.strokeDashoffset = pathLine.toString();
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });
};
export const initScrollPath = () => {
  const svg = document.querySelector(".gsapLine svg");
  if (svg) {
    const path = svg.querySelector("path");
    if (path) {
      animatePath(path as SVGPathElement, ".gsapLine");
    }
  }
};
