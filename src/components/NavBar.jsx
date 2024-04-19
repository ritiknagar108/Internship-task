import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/src/assets/whole.svg';

import basearrow from '/src/assets/baseline-arrow.svg';
import './NavBar.css';
import { useState } from 'react';
import Signup from './Signup';
import Picture from '/src/assets/picture1.png';
import Login from './Login';

export default function NavBar() {
    const [showlogin, setShowlogin] = useState(false);
    const [user, setUser] = useState(false);
    return (
        <>
            <nav className="navbar bg-body-white bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src={logo} alt='LOGO' ></img></a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 Search-Box" type="search" placeholder={'🔍 Search your favorite groups in ATG'} aria-label="Search" />
                    </form>
                    <p >create your accounts.<a className='A-tag' onClick={() => { return setShowlogin(true); }} >It's free </a> <img src={basearrow} alt="arrow down" /> </p>

                </div>
            </nav>
            {
                showlogin ? (

                    <div className=''>
                        <div className="modal-content">
                            <i onClick={() => setShowlogin(false)} className="bi bi-x-circle-fill close-modal"></i>
                            <div className='Main-modal'>
                                <div className='Main-modal-head '>
                                    <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                                </div>
                                <div className='Main-modal-content'>
                                    <div className='login-signup'>
                                        {user?(<Login/>):
                                         (<Signup/>)
                                        }
                                         </div>
                                    <div className='login-toggler'>
                                        <p className='h-text'>Already have an account?
                                        {user? <a className='a-tag' onClick={()=>setUser(false)} >SignUp</a>: <a className='a-tag' onClick={()=>setUser(true)}>Login</a>}</p>
                                        <img className='log-image' src='/src/assets/picture1.png' alt='image' />
                                        <p className='b-text'>{!user?<>By signing up, you agree to our Terms & conditions, Privacy policy</>:<></> }</p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : <></>}


        </>
    );
}