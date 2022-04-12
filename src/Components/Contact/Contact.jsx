import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div id='contact'>
      <h1>Contact</h1>
      <p>Let bring new change together. Contact me on any of the platform</p>
      <div className='github2'>
          <div>
            <a href='https://github.com/manishhansal'><img src="github.png" alt='Github_icon'></img></a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/manish-kumar-939467210/'><img src="linkedin.png" alt='Linkedin_icon'></img></a>
          </div>
          <div>
            <a href='https://twitter.com/ManishK62653031'><img src="twitter.png" alt='Twitter_icon'></img></a>
          </div>
          <div>
            <a href='https://wa.me/8581935284'><img src="whatsapp.png" alt='whatsapp_icon'></img></a>
          </div>
      </div>
    </div>
  )
}

export {Contact}
