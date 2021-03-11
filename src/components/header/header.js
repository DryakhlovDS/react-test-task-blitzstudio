import "./header.scss";
import Menu from "../menu/Menu";

function Header({ children }) {
  function toggleMenu() {
    const headerMenu = document.querySelector(".header__menu");
    headerMenu.classList.toggle("active");
    headerMenu.firstChild.classList.toggle("active");
  }

  return (
    <header className='header'>
      <div className='header__menu' onClick={toggleMenu}>
        <Menu />
      </div>
      <div className='header__content'>{children}</div>
    </header>
  );
}

export default Header;
