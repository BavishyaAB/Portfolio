import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

function App() {
  return (
    <><div className="App" id="Appcomp">
        <Nav/>
        <div className='bg'> 
        </div>
        <p className="intro">
          I am known as Bavishya, a blooming Full Stack Developer.
        </p>
      </div>
      <Home />
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;
