import './Home.css';
import html from './html-5.png';
import css from './css-3.png';
import bootstrap from './bootstrap.png';
import java from './java.png';
import js from './js.png';
import react from './react.png';
import node from './nodejs.png';
import mongo from './mongodb.png';
import mysql from './mysql.png';

function Home() {
    return (
      <><div className="Home container" id="Homecomp">
          <div className="row">
                <div className="col-12 text-center">
                    <p className="h2">Few Words About Myself!</p>
                    <p className="about text-justify">I am a growing full stack web application developer and an adaptive learner seeking knowledge to build proficient websites.
                    I enjoy building and designing websites by applying my skills and knowledge which I have gained so far.
                    I am a collaborative team player and have gained industry experience in designing and building microservices in java using JBoss tools.</p>
                </div>
                <div className="col-12">
                    <h2 className="about">Skill Set</h2>
                    <div className='mt-4 d-flex justify-content-evenly'>
                        <div>
                            <img className="rounded-circle" src={html} width="75" height="75" alt="icon"></img>
                        </div>
                        <div>
                            <img className="rounded-circle" src={css} width="75" height="75" alt="icon"></img>
                        </div>   
                        <div>
                            <img className="rounded-circle" src={bootstrap} width="75" height="75" alt="icon"></img>
                        </div> 
                        <div>
                            <img className="rounded-circle" src={java} width="75" height="75" alt="icon"></img>
                        </div> 
                        <div>
                            <img className="rounded-circle" src={js} width="75" height="75" alt="icon"></img>
                        </div> 
                        <div>
                            <img className="rounded-circle" src={react} width="75" height="75" alt="icon"></img>
                        </div>
                        <div>
                            <img className="rounded-circle" src={node} width="75" height="75" alt="icon"></img>
                        </div>
                        <div>
                            <img className="rounded-circle" src={mongo} width="75" height="75" alt="icon"></img>
                        </div>
                        <div>
                            <img className="rounded-circle" src={mysql} width="75" height="75" alt="icon"></img>
                        </div>                    
                    </div>
                </div>
            </div>
        </div></>
    );
  }
  
  export default Home;