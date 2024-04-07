import React from 'react'
import './ACCA.css'

const ACCA = () => {
  return (
    <div className="acca container">
        <div className='heading-text'>
            <h1>What will you learn in ACCA?</h1>
            <hr />
            <div className='card'>
              <div className='card3'>
                <h2>Knowledge Level</h2>
                <ul>
                  Busniess & Technology(BT) <br/>
                  Management Team(MT) <br />
                  Finacinal Accounting(FA)
                </ul>
                <p>3 Papers</p>
              </div>
              <div className='card3'>
                <h2>Skill Level</h2>
                <ul>
                  Busniess & Technology(BT) <br/>
                  Management Team(MT) <br />
                  Finacinal Accounting(FA)
                </ul>
                <p>6 Papers</p>
              </div>
              <div className='card3'>
                <h2>Professional Level</h2>
                <ul>
                  Busniess & Technology(BT) <br/>
                  Management Team(MT) <br />
                  Finacinal Accounting(FA)
                </ul>
                <p>4 Papers</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ACCA