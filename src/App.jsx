import Navbar from './Components/Navbar'
import Qrcode from './Components/Qrcode';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Qrcode" element={<Qrcode />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;