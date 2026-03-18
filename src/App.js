import { Outlet, useLocation } from 'react-router-dom';
import './App.scss';
import { useMainContext } from './context/MainContext';

import { FooterMobile } from './components/FooterMobile';

export const App = () => {
  const { currentPage } = useMainContext();
  const location = useLocation();
  //const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="app-container">
      <div className="content">
        <div key={location.pathname}>
          <Outlet />
        </div>
        {currentPage !== 'home' && <FooterMobile />}
      </div>
    </div>
  );
};
