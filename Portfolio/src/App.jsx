import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {

  return (
    <>
    <Navbar />
    <Header />      
    <Project />
    <About />
    <Contact />
    <Footer />
    </>
    );
}
