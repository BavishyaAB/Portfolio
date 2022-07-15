import './Nav.css';
function Nav() {
    return (
        <><nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#Appcomp">BAVISHYA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Appcomp">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Homecomp">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Experiencecomp">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Projectcomp">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Contactcomp">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav></>
    );
  }
export default Nav;