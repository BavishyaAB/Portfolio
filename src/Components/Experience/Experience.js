import './Experience.css';
function Experience() {
    return (
      <><div className="Experience" id="Experiencecomp">
            <h2 className="title">My Experience</h2>
            <hr></hr>
            <div className="container">
                <div className="row">
                    <div className="col-5 card text-centre">
                        <h2 className="mt-3">Solartis Technology Services Pvt, Ltd.</h2>
                        <p>Trainee Intern, Associate Software Developer</p>
                        <p>Worked collaboratively to build Microservices for policy administration products.</p>
                        <p>From Jan 2020 To March 2022</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5 card text-centre">
                        <h2 className="mt-3">Mepco Schlenk Engineering College, Sivakasi</h2>
                        <p>Computer Science & Engineering Graduate</p>
                        <p>Got an introduction to full stack development by working on some full stack projects.</p>
                        <p>From July 2016 To 2020</p>
                    </div>
                </div>
            </div>
        </div></>
    );
  }
  
  export default Experience;