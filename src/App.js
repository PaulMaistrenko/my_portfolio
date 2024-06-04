import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="body">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      { isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
      <div className="mobile__content">
        <Outlet/>
      </div>
      <div className="desktop__content">
        <About />
        <Projects />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}
