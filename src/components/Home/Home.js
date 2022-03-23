import React from 'react';
import bg from '../images/Group.svg';
import background from "../images/logo.png";
import './Home.css';
export const Home = () => {
  return (
    <div className='container-fluid'>
        <div className='row '>
          <div className='col-md-8 hero'>
<img src={bg} className='io'/>
          </div>
          <div className='col-md-4 lo'>
<img src={background} className='i'/>
         <h3 className="t" >Explore The Best Tours... Hurry up!!</h3>
  <input type="email" class="form-control oo" id="exampleFormControlInput1" placeholder="name@example.com"/>
  <input type="email" class="form-control oo" id="exampleFormControlInput1" placeholder="name@example.com"/>

<p >Don't have an account?  Sign Up</p>
          </div>

        </div>
    </div>
  )
}