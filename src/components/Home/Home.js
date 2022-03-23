import React from 'react'
import bg from '../images/Group.svg'
import './Home.css'
export const Home = () => {
  return (
    <div className=''>
        <div className='row hero-color'>
          <div className='col-md-8 hero me-5 mt-5'>
<img src={bg} className='w-50 me-5 mt-6'/>
          </div>
          <div className='col-md-4 hero'>
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

          </div>

        </div>
    </div>
  )
}
