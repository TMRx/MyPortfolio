// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About"
import { Skill } from "./components/Skills2";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
// import { About } from "./components/About"

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <NavBar />
        <Banner />
        <div className="switch">
          <div className='light2'>
            <p>Light Mode</p>
          </div>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
          <div className='dark2'>
            <p>Dark Mode</p>
          </div>
        </div>
        < About />
        {/* <About/> */}
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
