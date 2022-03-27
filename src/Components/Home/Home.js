import './Home.css';
function Home() {
    return (
      <><div className="Home container" id="Homecomp">
          <div className="row">
                <div className="col-6">
                    <p className="h2">Hello!</p>
                    <p className="about">I am an enthusiastic web developer and an adaptive learner seeking knowledge to build proficient websites.I have had experience in developing microservices too</p>
                </div>
                <div className="col-6 skill">
                    <p className="about">Skills</p>
                    <div>
                        <p>HTML,CSS,Bootstrap</p>
                        <p className="progress progress-bar sk1progress"></p>
                        <p>Java,Javascript</p>
                        <p className="progress progress-bar sk2progress"></p>
                        <p>MySQL,Mongo,Oracle</p>
                        <p className="progress progress-bar sk3progress"></p>
                        <p>ReactJS</p>
                        <p className="progress progress-bar sk4progress"></p>
                        <p>Python</p>
                        <p className="progress progress-bar sk5progress"></p>
                    </div>
                </div>
            </div>
        </div></>
    );
  }
  
  export default Home;