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
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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
            <img src="KFC2.png" alt="kfc_png"/>
            <h3>KFC Clone</h3>
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
          

          
        </Slider>
      </div>
    );
  }
}
