import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { App } from '../App';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Projects } from '../pages/Projects/Projects';
import { Contacts } from '../pages/Contacts/Contacts';

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
