import './App.css';
import Navbar from './Components/Navbar/Navbar';
import BelowNavbar from './Components/BelowNavbar/BelowNavbar';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Skills } from './Components/Skills/Skills';
import SimpleSlider from './Components/Projects/Project';
function App() {
  return (
    <div>
      <Navbar />
      <BelowNavbar />
      <About />
      <Skills />
      {/* <Project /> */}
      <SimpleSlider/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
