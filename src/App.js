import NavBar from './Hearder/NavBar'
import Home from './Content/Home'
import About from './Hearder/About';
import Galery from './Hearder/Galery';
import Contact from './Hearder/Contact';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <main className='py-5'>
     <Container>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/about' exact element={<About />}/>
          <Route path='/galery' exact element={<Galery />}/>
          <Route path='/contact' exact element={<Contact />}/>
        </Routes>
      </Container>
     </main>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
