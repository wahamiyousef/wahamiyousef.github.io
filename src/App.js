import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js'
import About from './components/About.js'
import NavBar from './components/NavBar.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
