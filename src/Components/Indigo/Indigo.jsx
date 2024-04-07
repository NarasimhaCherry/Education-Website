import React from 'react'
import './Indigo.css'

const Indigo = () => {
  return (
    <div className="indigo container">
        <div className="heading">
            <h1 className='learn'>Kick off your Prep journey with IndigoLearn</h1>
            <p>Sign-up ad get instant access to our free Course</p>
            <button className='red'>Instant Access</button>
        </div>
        <div className='form'>
                <h1>Aspiring to be an ACCA? Get in touch with us.</h1>
                <input type="text" placeholder='Name' /><br/>
                <input type="text" placeholder='Email' /><br />
                <input type="text" placeholder='Phone number' /><br />
                <input type="text" placeholder='Anything u would like to ask?' /><br />
                <button className='purple call'>Request Call Back</button>
        </div>
    </div>
  )
}

export default Indigo