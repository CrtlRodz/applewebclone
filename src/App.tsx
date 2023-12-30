import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MacPage from './pages/Mac/Mac';
import StorePage from './pages/Store/Store';
import IPadPage from './pages/IPad/IPad';
import Navigation from './navigation/Navigation';
import './styles/styles.css';
import ErrorPage from './pages/ErrorPage/Error';
import Footer from './shared/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/store" element={<StorePage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/ipad" element={<IPadPage />} />
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
