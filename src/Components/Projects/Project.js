import './project.css';
import todos from './todos.png';
import usermanagement from './usermanagement.png';
import swiggyclone from './swiggyclone.png';
import redbusclone from './redbusuiclone.png';
import trelloclone from './trellouiclone.png';
import fbloginpage from './fbloginui.png';

function Project () {
    return(
        <div className="project" id="Projectcomp">
            <h2 className="title">Hands-on Experience</h2>
            <hr></hr>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='card h-100'>
                            <a href='https://todos-mern-app.netlify.app'>
                                <img src={todos} height="180px" className='card-img-top' alt='todosimg'></img>
                            </a>
                            <div className='card-body'><p className='card-text'>Todos - MERN Application</p></div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card h-100'>
                            <a href='https://user-potfolio-management.netlify.app/'>
                                <img src={usermanagement}className='card-img-top' alt='usermanagement'></img>
                            </a>
                            <div className='card-body'><p className='card-text'>User Portfolios Management - MERN Application</p></div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card h-100'>
                            <a href='https://swiggyuiclone.netlify.app'>
                                <img src={swiggyclone}className='card-img-top' alt='swiggy'></img>
                            </a>
                            <div className='card-body'><p className='card-text'>Swiggy App UI Clone</p></div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-4'>
                        <div className='card h-100'>
                            <a href='https://redbusuiclone.netlify.app'>
                                <img src={redbusclone} height="180px" className='card-img-top' alt='redbus'></img>
                            </a>
                            <div className='card-body'><p className='card-text'>RedBus App UI Clone</p></div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card h-100'>
                            <a href='https://trellouiclone.netlify.app'>
                                <img src={trelloclone} height="180px" className='card-img-top' alt='trello'></img>
                            </a>
                            <div className='card-body'><p className='card-text'>Trello App UI Clone</p></div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card h-100'>
                            <a href='https://facebooksampleloginui.netlify.app'>
                                <img src={fbloginpage} height="180px" className='card-img-top' alt='fb'></img>
                            </a>
                            <div className='card-body'><p className='card-text'>Facebook Signup Page Clone</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;