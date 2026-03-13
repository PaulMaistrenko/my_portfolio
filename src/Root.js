import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { MainProvider } from './context/MainContext';

export const Root = () => (
  <Router>
    <MainProvider>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
      </Routes>
    </MainProvider>
  </Router>
);
