import "./navigation.scss";

function Nav() {
  return (
    <nav className='nav'>
      <a href='#noscroll' className='nav__link'>
        home
      </a>
      <a href='#noscroll' className='nav__link'>
        about me
      </a>
      <a href='#noscroll' className='nav__link'>
        portfolio
      </a>
      <a href='#noscroll' className='nav__link'>
        contact
      </a>
    </nav>
  );
}

export default Nav;
