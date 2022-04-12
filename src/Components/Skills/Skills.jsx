import React from 'react';
import "./Skills.css"

const Skills = () => {
  return (
        <div id='mainDiv'>
            <h1>Skills</h1>
            <div className='skills'>

                <div className='skillDiv'>
                    <i className="devicon-html5-plain colored"></i>
                    <h3>HTML5</h3>
                </div>

                <div className='skillDiv'>
                    <i class="devicon-css3-plain colored"></i>
                    <h3>CSS3</h3>
                </div>

                <div className='skillDiv'>
                    <i class="devicon-javascript-plain colored"></i>
                    <h3>JavaScript</h3>
                </div>

                <div className='skillDiv'>
                    <i class="devicon-react-original colored"></i>
                    <h3>React.js</h3>
                </div>

                <div className='skillDiv'>
                    <i class="devicon-redux-original colored"></i>
                    <h3>Redux</h3>
                </div>

                <div className='skillDiv'>
                    <i class="devicon-materialui-plain colored"></i>
                    <h3>Material-UI</h3>
                </div>

            </div>

            <div className='skills'>

                <div className='skillDiv'>
                    <i class="devicon-express-original colored"></i>
                    <h3>Express.js</h3>
                </div>

                <div className='skillDiv'>
                    <i class="devicon-nodejs-plain colored"></i>
                    <h3>Node.js</h3>
                </div>

                <div className='skillDiv'>
                    <i class="devicon-mysql-plain colored"></i>
                    <h3>mySQL</h3>
                </div>

                <div className='skillDiv'>
                    <i class="devicon-mongodb-plain colored"></i>
                    <h3>mongoDB</h3>
                </div>

            </div>
        </div>
    
  )
}

export {Skills}
