import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = elements => {
  const scrollTriggerAnimation = () => {
    elements.current.forEach(el => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          duration: 2,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=170"
          }
        }
      );
    });
  };

  return { scrollTriggerAnimation };
};

export default useScrollTrigger;
