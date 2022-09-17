import './App.css';

import NavigationBar from './Components/NavigationBar.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Education from './Components/Education.js';
import Projects from './Components/Projects.js';
import Contacts from './Components/Contacts.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
