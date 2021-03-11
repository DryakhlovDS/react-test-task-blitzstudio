import "./intro.scss";
import HintToScroll from "../hintToScroll/hintToScroll";

function Intro() {
  return (
    <section className='intro'>
      <div className='intro__hint'>
        <HintToScroll>Scroll down to see more</HintToScroll>
      </div>
    </section>
  );
}

export default Intro;
