import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';
import Home from './pages/Home';
// import Work from './pages/Work';
import Exhibition from './pages/Exhibition';
// import CV from './pages/CV';
// import Information from './pages/Information';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/work" element={<Work />} /> */}
        <Route path="/Exhibitions" element={<Exhibition />} />
        {/* <Route path="/cv" element={<CV />} />
        <Route path="/information" element={<Information />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

