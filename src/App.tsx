import './App.css';
import Home from './Home/Home'
import NotFound from './404/NotFound';
import { Routes, Route } from 'react-router-dom';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
