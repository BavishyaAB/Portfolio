import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Project from '../Projects/Project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <><div className="App" id="Appcomp">
        <Nav/>
        <div className='bg'> 
        </div>
        <p className="intro">
          Hi I am Bavishya, I build Full stack web apps.
        </p>
      </div>
      <Home />
      <Experience/>
      <Project/>
      <Contact/>
    </>
  );
}

export default App;