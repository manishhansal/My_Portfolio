import React from 'react';
import "./Footer.css";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = () => {
  return (
    <div className='footer'>
      <div className='myLogo'>
        <a href='#'><img src="Manish Kumar1.gif" alt="my_logo" /></a>
      </div>
      <div className='rights'>
          <h2>© 2022. All Rights Reserved</h2>
      </div>
      <div className='github'>
          <div className='githubChild'>
            <a href='https://github.com/manishhansal'><img src="github.png" alt='Github_icon'></img></a>
          </div>
          <div className='githubChild'>
            <a href='https://www.linkedin.com/in/manish-kumar-939467210/'><img src="linkedin.png" alt='Linkedin_icon'></img></a>
          </div>
          <div className='githubChild'>
            <a href='https://twitter.com/ManishK62653031'><img src="twitter.png" alt='Twitter_icon'></img></a>
          </div>
      </div>
    </div>
  )
}

export {Footer};
