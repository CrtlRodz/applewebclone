import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MacPage from './pages/Mac/Mac';
import StorePage from './pages/Store/Store';
import IPadPage from './pages/IPad/IPad';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/store" element={<StorePage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/ipad" element={<IPadPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
