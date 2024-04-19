import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/src/assets/facebook.svg';
import logo1 from '/src/assets/search.svg';
export default function Login(){
  return (<>
    <h3>Sign In</h3>
            <form class="row g-3 ">
                <div class="row g-3">
                   

                    <div class="col-md-11">
                        <input type="text" class="form-control inp-ut" id="inputAddress" placeholder="Email" />
                    </div>
                    <div class="col-md-11">
                        <input type="password" class="form-control inp-ut" id="inputPassword4" placeholder='password'/>
                    </div>
                    
                    <button type="button" class="btn btn-primary btn4">Sign In</button>
                    <button type="button" class="btn btn-outline-secondary"><img src={logo}/>Sign up with Facebook</button>
                    <button type="button" class="btn btn-outline-secondary"><img src={logo1}/>Sign up with Google</button>
                    <a className='f-pass'>forgot password?</a>
                </div>
            </form>

            </>
  )
}

