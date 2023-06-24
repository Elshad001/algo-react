import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import About from './pages/About';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Design from './pages/Design';
import Career from './pages/Career';
import Request from './pages/Request';
import Technoblog from './pages/Technoblog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useState } from 'react';
import Sidebar from './pages/Sidebar';
function App() {

  const [sidebar,setSidebar] = useState(false)

  return (
    <div className='w-full overflow-hidden'>
      <Router>
        <ScrollToTop/>
        {sidebar ? <Sidebar sidebar={sidebar} setSidebar={setSidebar} /> : <Header sidebar={sidebar} setSidebar={setSidebar}/>}
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} setSidebar={setSidebar}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/courses/frontend" element={<Frontend/>} />
          <Route path="/courses/backend" element={<Backend/>} />
          <Route path="/courses/design" element={<Design/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/technoblog" element={<Technoblog />} />
          <Route path="/request" element={<Request/>} />
          <Route path="/sidebar" element={<Sidebar/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
