import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { MainProvider } from './context/MainContext';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Projects } from './pages/Projects/Projects';
import { Contacts } from './pages/Contacts/Contacts';

export const Root = () => (
  <Router>
    <MainProvider>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </MainProvider>
  </Router>
);

