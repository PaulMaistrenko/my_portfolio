import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { MainProvider } from './context/MainContext';
import { Home } from './pages/Home/Home';

export const Root = () => (
  <Router>
    <MainProvider>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </MainProvider>
  </Router>
);

