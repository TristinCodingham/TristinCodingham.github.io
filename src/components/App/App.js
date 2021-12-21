import {Routes, Route} from 'react-router-dom';

import GlobalStyles from './App.style';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import Home from '../../routes/Home/Home';
import Error from '../../routes/Error/Error';
import Contact from '../../routes/Contact/Contact';
import About from '../../routes/About/About';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
