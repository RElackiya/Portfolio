import './App.css';
import About from './components/About'
import Projects from './components/Projects';
import Header from './components/Header';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
