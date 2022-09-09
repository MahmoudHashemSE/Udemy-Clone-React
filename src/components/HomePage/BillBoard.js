import React from 'react'
import clock from "../../images/clock.jpg"
import "../../css/styles/HomePage/BillBoard.css"
const BillBoard = () => {
  return (
    <header className="billboard">
      <div className="billboard">
        <div className="billboard-banner-image-container">
          <img
            src={clock}
            alt="Clock"
            width="100%"
            height="100%"
          />
        </div>
        <div className="billboard-content-box">
          <div>
            <article>
              <h2>New to Udemy? Lucky you.</h2>
              <p>
                Courses start at E£169.99. Get your new-student offer before
                it expires.
              </p>
            </article>
          </div>
        </div>
      </div>
    </header>
  )
}

export default BillBoard