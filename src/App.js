import "./css/App.css";

import Header from "./components/header/header";
import Nav from "./components/navigation/navigation";
import Intro from "./components/intro/intro";
import AboutMe from "./components/aboutMe/aboutMe";

function App() {
  return (
    <div className='App'>
      <Header>
        <Nav />
      </Header>
      <Intro />
      <AboutMe>
        <Nav />
      </AboutMe>
    </div>
  );
}

export default App;
