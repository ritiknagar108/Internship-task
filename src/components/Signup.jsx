import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import logo from '/src/assets/facebook.svg';
import logo1 from '/src/assets/search.svg';
export default function Signup() {

    return (
        <>
            <h3>create account</h3>
            <form class="row g-3 ">
                <div class="row g-3">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>

                    <div class="col-md-11">
                        <input type="text" class="form-control inp-ut" id="inputAddress" placeholder="Email" />
                    </div>
                    <div class="col-md-11">
                        <input type="password" class="form-control inp-ut" id="inputPassword4" placeholder='password'/>
                    </div>
                    <div class="col-md-11">

                        <input type="password" class="form-control inp-ut" id="inputPassword4" placeholder='confirm-password'/>
                    </div>
                    <button type="button" class="btn btn-primary btn4">create account</button>
                    <button type="button" class="btn btn-outline-secondary"><img src={logo}/>Sign up with Facebook</button>
                    <button type="button" class="btn btn-outline-secondary"><img src={logo1}/>Sign up with Google</button>
              
                </div>
            </form>
        </>
    )
}