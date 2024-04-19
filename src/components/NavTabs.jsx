import 'bootstrap/dist/css/bootstrap.min.css';
import './NavTabs.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function NavTabs() {
    return (
        <>

            <div className='NavTabs'>
                <ul class="nav nav-underline">
                    <li className="nav-item">
                        <a className="nav-link active " aria-current="page" href="#">All posts(32)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Article</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Event</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Job</a>
                    </li>
                </ul>
                <ul className='NavTab'>
                    
                        <div class="dropdown">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Create a Post
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item active" href="#">Action</a></li>
                                
                            </ul>
                        </div>
                    
                    
                        <button className='btn btn-primary'><i class="bi bi-person-plus"></i>Join Group</button>
                        
                    
                </ul>
                <hr />

            </div>

        </>
    );

}