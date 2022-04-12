import React from 'react'
import "./BelowNavbar.css"

const BelowNavbar = () => {
  return (
    <div className="main">
        <div className='floaterDiv'>
            <h2 className="text">
                Hi,<br></br> I am <span className='highlight'>Manish Kumar</span>.
                <div className="mask">
                    <span data-show>a full-stack developer.</span>
                    <span>a MERN stack developer.</span>
                    <span>a front-end developer.</span>
                    <span>a back-end developer.</span>
                </div>
            </h2>

            <div className='forMobile'>
              <h2>Hi, I am <span className='highlight'>Manish Kumar</span>, <br/>a full-stack developer. </h2>
            </div>

            <div className='github5'>
                <h3>Connect me</h3>
                <div>
                  <a href='https://github.com/manishhansal' target='_blank' rel="noreferrer"><img src="github.png" alt='Github_icon'></img></a>
                </div>
                <div>
                  <a href='https://www.linkedin.com/in/manish-kumar-939467210/' target='_blank' rel="noreferrer"><img src="linkedin.png" alt='Linkedin_icon'></img></a>
                </div>
                <div>
                  <a href='https://twitter.com/ManishK62653031' target='_blank' rel="noreferrer"><img src="twitter.png" alt='Twitter_icon'></img></a>
                </div>
            </div>

            <div className='email'>
              <a href="mailto:manishhansalmeh@gmail.com" target='_blank' rel="noreferrer">
                <div className='emailDiv'><img src='Email.png' alt='email_logo'></img><div>Email me</div></div>
              </a>
              <a href='https://drive.google.com/file/d/1Ie5fqPHtxAJLyIi_gv96RNTrPOoPYGiK/view?usp=sharing' target='_blank' rel="noreferrer">
                <div className='downloadDiv'><img src='download_icon.png' alt='download_logo'></img><div>Download Resume</div></div>
              </a>
              
            </div>
        </div>
        <div className='myProfile'>
            <img src="Manish_Kumar_Profile.png" alt="my_profile" />
        </div>
    </div>
  )
}

setInterval(function () {
    const show = document.querySelector('span[data-show]')
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')
    
    if (up) {
      up.removeAttribute('data-up')
    }
    
    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')
    
    next.setAttribute('data-show', '')
  }, 3000)

export default BelowNavbar;
