import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Become ACCA in 18 months</h1>
            <p>Insert linking narratives between sections of your answer, especially when writing a speech or statement. For example, "having covered some of the economic arguments, I will now move to the key social responsibility issues involved".</p>
            <button className='extra'>Register <br/>359,569</button>
            <button className='extra'>Foundation <br/>69,699</button>
            <button className='extra'>Windows <br/>2,388,501,689</button>
            <button className='extra'>Faculty <br/>Experts</button>
            <div className='two-button'>
                <button className='purple'>Download Broacher</button>
                <button className='red'>Get a Copy</button>
            </div>
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

export default Hero