import "./hint-to-scroll.scss";

function HintToScroll({ children }) {
  return (
    <div className='hint-to-scroll'>
      <div className='hint-to-scroll__hint'>{children}</div>
      <div className='hint-to-scroll__icon'></div>
      <div className='hint-to-scroll__icon'></div>
    </div>
  );
}

export default HintToScroll;
