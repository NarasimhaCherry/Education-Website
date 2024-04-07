import React from 'react'
import './Why.css'
import expert from '../../assets/program-icon-1.png'
import pac from '../../assets/program-icon-2.png'
import placements from '../../assets/program-icon-3.png'

const Why = () => {
  return (
    <div className="why container">
        <div className="heading-text">
            <h1>Why Choose Us?</h1>
            <hr />
        <div className='card'>
            <div className="card1">
                <img className='choose' src={expert} alt="" />
                <h2 className='pup'>Expert Facuilty</h2>
                <p>Expert faculty members provide students with the latest knowledge, skills programs, growth programs, research, and industry insights. They also design and deliver innovative courses.</p>
            </div>
            <div className="card1">
                <img className='choose' src={pac} alt="" />
                <h2 className='pup'>Complete Succes Package</h2>
                <p>Considering the idea of a cooperative, once members start to identify their individual and collective efforts with the organization's improved performance, cooperative problem solving also starts to take place.</p>
            </div>
            <div className="card1">
                <img className='choose' src={placements} alt="" />
                <h2 className='pup'>Placements</h2>
                <p>A placement is a period of work experience which is an integrated and assessed part of a student's degree, so they're different to an internship, which is extra-curricular.</p>
            </div>
        </div>
        <div className='sub'>
            <div className="card2">
                <h2>Levels</h2>
                <p>13</p>
            </div>
            <div className="card2">
                <h2>Duration</h2>
                <p>10-18 Months</p>
            </div>
            <div className="card2">
                <h2>Exams</h2>
                <p>Quartly</p>
            </div>
            <div className="card2">
                <h2>Exemptions</h2>
                <p>upto (12 weeks)</p>
            </div>

        </div>
        </div>
    </div>
 )
}

export default Why