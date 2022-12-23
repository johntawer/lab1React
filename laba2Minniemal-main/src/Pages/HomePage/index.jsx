import React from "react";

import { useNavigate } from "react-router-dom";
import ImgComponents from "../../Components/Imagess"

import useStyles from "./style";

const HomePage = () => {
  const classes = useStyles();

  const history = useNavigate();

  const compImages = [
    { path: "./assets/img/1.png", text: 'Service name' },
    { path: "./assets/img/2.png", text: 'Service name' },
    { path: "./assets/img/3.png", text: 'Service name' },
    { path: "./assets/img/4.png", text: 'Service name' }
  ]

  return (
    <div className={classes.root}>
      <div className="mainBlock">
        <div className="wrapper">
          <div className="verticalLine">
            <div className="oneBlock">
              <img className="threeRow" src="./assets/img/threeRow.png" alt="threeRow" />
              <p className="textInOneBlock">JOHN DOE</p>
            </div>
            <div className="twoBlock">
              <p className="textInTwoBlock">FACEBOOK</p>
              <p className="textInTwoBlock">INSTAGRAM</p>
              <p className="textInTwoBlock">TWITTER</p>
              <p className="textInTwoBlock">LINKEDIN</p>
            </div>
          </div>
          <div className="wrapperBlock">
            <div className="firstBlock">
              <div className="wrapperNavigation">
                <h1 className="firstWord">Home</h1>
                <h1 className="secondWord" onClick={() => history('/secondPage')}>About</h1>
              </div>
              <div className="leftBlock">
                <h1 className="h1FirstBlock">
                  Hello<br />
                  I’m John<br />
                  Doe
                </h1>
                <p className="pFirstBlock">
                  A full stack allaround designer that tristique est placerat in
                  massa <span>consectetur quisque</span> lobortis Vitae faucibus diam
                  consequat maecenas turpis.
                </p>
                <button className="downloadCv">DOWNLOAD CV</button>
              </div>
              <img
                className="manWithSunglasses"
                src="./assets/img/photoFristBlock.png"
                alt="manWithSunglasses"
              />
            </div>
            <div className="secondBlock">
              <h1 className="topText">About</h1>
              <div className="verticalLineinBlock"></div>
              <h2 className="h2Text">
                Dolor sit amet, consectetur adipiscing elit viverra tristique<br />
                placerat in massa consectetur quisque
              </h2>
              <p className="bottomText">
                Faucibus sed tristique fames sed aliquet ultricies eget viverra
                arcu. Vitae faucibus <br />diam consequat maecenas. Turpis metus
                sit diam purus leo in varius ac quam.<br />
                Nunc amet tristique volutpat adipiscing vulputate phasellus.
                Volutpat faucibus<br />
                praesent ac lobortis aliquam dolor.
              </p>
            </div>
            <div className="thirdBlock">
              {compImages.map((item, index) =>
                <ImgComponents path={item.path}
                  text={item.text} alt={index} />)}
              {/* <div>
                <img src="./assets/img/1.png" alt="1" />
                <p className="textForAllBlock">Service name</p>
              </div>
              <div>
                <img src="./assets/img/2.png" alt="2" />
                <p className="textForAllBlock">Service name</p>
              </div>
              <div>
                <img src="./assets/img/3.png" alt="3" />
                <p className="textForAllBlock">Service name</p>
              </div>
              <div>
                <img src="./assets/img/4.png" alt="4" />
                <p className="textForAllBlock">Service name</p>
              </div> */}
            </div>
            <div className="fourthBlock">
              <h1 className="topText">Experience</h1>
              <div className="verticalLineinBlock"></div>
              <div className="wrapperFourthBlock">
                <div className="textWithMinus">
                  <p className="textTeam">Team Leader</p>
                  <div className="minus"></div>
                </div>
                <p className="onlyText">
                  <span className="textInOnlyText"> 2019 - present</span><br />
                  Faucibus sed tristique fames sed aliquet ultricies eget viverra
                  arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit
                  diam purus leo in varius ac quam. Nunc amet tristique volutpat
                  adipiscing vulputate phasellus. Volutpat faucibus praesent ac
                  lobortis aliquam dolor.
                </p>
                <div className="horizontalLine"></div>
                <div className="wrapperTagDetails">
                  <details>
                    <summary>Product Designer</summary>
                    <p>Product Product Designer</p>
                  </details>
                  <details>
                    <summary>Senior UX Designer</summary>
                    <p>Product Product Designer</p>
                  </details>
                  <details>
                    <summary>UX Designer</summary>
                    <p>Product Product Designer</p>
                  </details>
                  <details>
                    <summary>Junior Designer</summary>
                    <p>Product Product Designer</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export { HomePage };
