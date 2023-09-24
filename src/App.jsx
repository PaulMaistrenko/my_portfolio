import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { Projects } from "./pages/Projects";

import "./styles/main.css";

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
