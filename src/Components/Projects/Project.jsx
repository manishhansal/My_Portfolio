import React, { Component } from "react";
import "./Project.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Projects extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{width: "98%"}} id="projects">
        <h1>Projects</h1>
        <Slider {...settings}>

          <div className="carousel">
            <img src="KFC1.png" alt="kfc_png"/>
            <h3>KFC Clone</h3>
            <div className="contentDiv">
              <p>KFC clone where users can see different food items, can add items to cart and also can order. This is my first collaborative project, built in 5 days by a team of 3 developers. </p>
            </div>

            <div className="contentDiv1">
              <p><strong>Tech Stack: </strong>HTML | CSS | JavaScript</p>
            </div>
            
            <div className="view">
              <a href="https://github.com/Vishalrj750/Final_Kfc_Repo" target="_blank" rel="noreferrer">
                <div className="pDiv">
                  <img src="output-onlinegiftools (1).gif" alt="view_gif"/>
                  <div><h3>View Code</h3></div>
                </div>
              </a>
              <a href="https://jolly-hawking-c11904.netlify.app/" target="_blank" rel="noreferrer">
                <div className="pDiv">
                  <img src="output-onlinegiftools.gif" alt="live_gif"/>
                  <div><h3>Live Preview</h3></div>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel">
            <img src="Bookmyshow1.png" alt="bookmyshow_png"/>
            <h3>Bookmyshow Clone</h3>
            <div className="contentDiv">
              <p>BookMyShow clone where users can see movies, events, trailers etc. And also able to select cities, can login and also can book movies or events. A collaborative project, built in 5 days by a team of 3 developers and also won third prize.</p>
            </div>

            <div className="contentDiv1">
              <p><strong>Tech Stack: </strong>React.js | Redux.js | Styled Components | Material UI | JSON Server</p>
            </div>
            
            <div className="view">
              <a href="https://github.com/vikalpvarshney1/team8" target="_blank" rel="noreferrer">
                <div className="pDiv">
                  <img src="output-onlinegiftools (1).gif" alt="view_gif"/>
                  <div><h3>View Code</h3></div>
                </div>
              </a>
              <a href="https://vikalpbookmyshow.netlify.app" target="_blank" rel="noreferrer">
                <div className="pDiv">
                  <img src="output-onlinegiftools.gif" alt="live_gif"/>
                  <div><h3>Live Preview</h3></div>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel">
            <img src="Tourmyindia.png" alt="tourmyindia_png"/>
            <h3>Tourmyindia Clone</h3>
            <div className="contentDiv">
              <p>Clone of tourmyindia website, user can get detailed information on India tourism & travel guide. This is my first solo project after learning the basics of web development.</p>
            </div>

            <div className="contentDiv1">
              <p><strong>Tech Stack: </strong>HTML | CSS | JavaScript</p>
            </div>

            <div className="view">
              <a href="https://github.com/manishhansal/Tour_my_india_clone" target="_blank" rel="noreferrer">
                <div className="pDiv">
                  <img src="output-onlinegiftools (1).gif" alt="view_gif"/>
                  <div><h3>View Code</h3></div>
                </div>
              </a>
              <a href="https://tourmyindiaclone.netlify.app" target="_blank" rel="noreferrer">
                <div className="pDiv">
                  <img src="output-onlinegiftools.gif" alt="live_gif"/>
                  <div><h3>Live Preview</h3></div>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel">
            <img src="Tictactoe.png" alt="tictactoe_png"/>
            <h3>Tictactoe mini game</h3>
            <div className="contentDiv">
              <p>Simple tictactoe mini game where two players can play tictactoe. This is my solo project.</p>
            </div>

            <div className="contentDiv1">
              <p><strong>Tech Stack: </strong>HTML | CSS | JavaScript</p>
            </div>

            <div className="view">
              <a href="https://github.com/manishhansal/tictactoe" target="_blank" rel="noreferrer">
                <div className="pDiv">
                  <img src="output-onlinegiftools (1).gif" alt="view_gif"/>
                  <div><h3>View Code</h3></div>
                </div>
              </a>
              <a href="https://tictactoemadebyme.netlify.app/" target="_blank" rel="noreferrer">
                <div className="pDiv">
                  <img src="output-onlinegiftools.gif" alt="live_gif"/>
                  <div><h3>Live Preview</h3></div>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel">
            <img src="KFC1.png" alt="kfc_png"/>
            <h3>KFC Clone</h3>
            <div className="contentDiv">
              <p>KFC clone where users can see different food items, can add items to cart and also can order. This is my first collaborative project, built in 5 days by a team of 3 developers. </p>
            </div>

            <div className="contentDiv1">
              <p><strong>Tech Stack: </strong>HTML | CSS | JavaScript</p>
            </div>

            <div className="view">
              <a href="https://github.com/Vishalrj750/Final_Kfc_Repo" target="_blank" rel="noreferrer">
                <div className="pDiv">
                  <img src="output-onlinegiftools (1).gif" alt="view_gif"/>
                  <div><h3>View Code</h3></div>
                </div>
              </a>
              <a href="https://jolly-hawking-c11904.netlify.app/" target="_blank" rel="noreferrer">
                <div className="pDiv">
                  <img src="output-onlinegiftools.gif" alt="live_gif"/>
                  <div><h3>Live Preview</h3></div>
                </div>
              </a>
            </div>
          </div>


          <div className="carousel">
              <img src="Bookmyshow2.png" alt="bookmyshow_png"/>
              <h3>Bookmyshow Clone</h3>
              <div className="contentDiv">
                <p>BookMyShow clone where users can see movies, events, trailers etc. And also able to select cities, can login and also can book movies or events. A collaborative project, built in 5 days by a team of 3 developers and also won third prize.</p>
              </div>

              <div className="contentDiv1">
                <p><strong>Tech Stack: </strong>React.js | Redux.js | Styled Components | Material UI | JSON Server</p>
              </div>

              <div className="view">
                <a href="https://github.com/vikalpvarshney1/team8" target="_blank" rel="noreferrer">
                  <div className="pDiv">
                    <img src="output-onlinegiftools (1).gif" alt="view_gif"/>
                    <div><h3>View Code</h3></div>
                  </div>
                </a>
                <a href="https://vikalpbookmyshow.netlify.app" target="_blank" rel="noreferrer">
                  <div className="pDiv">
                    <img src="output-onlinegiftools.gif" alt="live_gif"/>
                    <div><h3>Live Preview</h3></div>
                  </div>
                </a>
              </div>
            </div>


            <div className="carousel">
              <img src="my_chat_app.png" alt="my_chat_app_png"/>
              <h3>Chat App</h3>
              <div className="contentDiv">
                <p>This is my solo project, where a user can create account and start chatting with his/her friend or family, built-in 5 days. Basically, this is my MERN-stack project or full-stack project.</p>
              </div>

              <div className="contentDiv1">
                <p><strong>Tech Stack: </strong>React.js | Redux.js | React Bootstrap | CDNjs | Node.js | Express.js | MongoDB | Socket.io</p>
              </div>

              <div className="view">
                <a href="https://github.com/manishhansal/My_chat_app" target="_blank" rel="noreferrer">
                  <div className="pDiv">
                    <img src="output-onlinegiftools (1).gif" alt="view_gif"/>
                    <div><h3>View Code</h3></div>
                  </div>
                </a>
                <a href="https://my-mern-chatapp.netlify.app" target="_blank" rel="noreferrer">
                  <div className="pDiv">
                    <img src="output-onlinegiftools.gif" alt="live_gif"/>
                    <div><h3>Live Preview</h3></div>
                  </div>
                </a>
              </div>
            </div>
          

          
        </Slider>
      </div>
    );
  }
}