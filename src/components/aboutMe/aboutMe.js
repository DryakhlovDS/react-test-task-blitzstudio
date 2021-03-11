import "./about-me.scss";
import jasonWood from "../../img/JasonWood.png";

import HintToScroll from "../hintToScroll/hintToScroll";

const classComponentName = "about-me";

function AboutMe({ children }) {
  return (
    <section className={classComponentName}>
      <div className={`${classComponentName}__slot`}>{children}</div>
      <div className={`${classComponentName}__inner`}>
        <div className={`${classComponentName}__item`}>
          <img src={jasonWood} alt='Jason Wood' />
        </div>
        <div className={`${classComponentName}__item`}>
          <h2 className={`${classComponentName}__title`}>about me</h2>
          <p className={`${classComponentName}__text`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={`${classComponentName}__text`}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className={`${classComponentName}__name`}>jason wood</div>
        </div>
      </div>
      <div className={`${classComponentName}__hint`}>
        <HintToScroll>
          Keep scrolling, there is still more to come.
        </HintToScroll>
      </div>
    </section>
  );
}

export default AboutMe;
