import React from "react";

import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input";

import useStyles from "./style";

const SecondPage = () => {
  const classes = useStyles();

  const history = useNavigate();

  return (
    <div className={classes.root}>
      <div className="mainBlock">
        <div className="wrapper">
          <div className="verticalLine">

          </div>
          <div className="wrapperBlock">
            <div className="firstBlock">
              <div className="wrapperNavigation">
                <h1 className="firstWord" onClick={() => history('/')}>Home</h1>
                <h1 className="secondWord">About</h1>
              </div>
              <h1 className="topText">Portfolio</h1>
              <div className="verticalLineinBlock"></div>
              <div className="wrapperImg">
                <img src="./assets/img/girl.png" alt="girl" />
                <img src="./assets/img/bag.png" alt="bag " />
              </div>
              <div className="wrapperText">
                <h1 className="bigSizeText">
                  <span className="smallSizeText">01</span>Fashion
                </h1>
                <h1 className="bigSizeText">
                  <span className="smallSizeText">02</span>Art
                </h1>
                <h1 className="bigSizeText">
                  <span className="smallSizeText">03</span>Design
                </h1>
                <h1 className="bigSizeText">
                  <span className="smallSizeText">04</span>Styling
                </h1>
              </div>
            </div>
            <div className="secondBlock">
              <h1 className="topText customColorText">Education</h1>
              <div className="verticalLineinBlock customColor"></div>
              <h1 className="h2Text">
                Dolor sit amet, consectetur adipiscing elit viverra tristique<br />
                placerat in massa consectetur quisque
              </h1>
              <p className="bottomText">
                Faucibus sed tristique fames sed aliquet ultricies eget viverra
                arcu. Vitae faucibus <br />diam consequat maecenas. Turpis metus
                sit diam purus leo in varius ac quam.<br />
                Nunc amet tristique volutpat adipiscing vulputate phasellus.
                Volutpat faucibus<br />
                praesent ac lobortis aliquam dolor.
              </p>
              <div className="wrapperBlockStep">
                <div className="step">
                  <div className="blockYear">
                    <p className="yearText">2022</p>
                    <p className="yearText">2024</p>
                    <p className="yearText">2026</p>
                    <p className="yearText">2028</p>
                  </div>
                  <div className="wrapperBall">
                    <div className="ball"></div>
                    <div className="lineBall"></div>
                    <div className="ball"></div>
                    <div className="lineBall"></div>
                    <div className="ball"></div>
                    <div className="lineBall"></div>
                    <div className="ball">
                      <div className="ballInBall"></div>
                    </div>
                  </div>
                </div>
                <div className="wrapperTextStep">
                  <p className="blockText">
                    Placerat in massa consectetur quisque. Nunc ac<br />
                    fames lectus in libero aliquet est setera nunc<br />
                    setera.
                  </p>
                  <p className="blockText">
                    Turpis metus sit diam purus leo in varius ac quam.<br />
                    Nunc amet tristique volutpat adipiscing vulputate<br />
                    phaselluse enim aliquam euismod mauris in vitae.
                  </p>
                  <p className="blockText">
                    Nunc amet tristique volutpat adipiscing vulputate<br />
                    phasellus. Eget enim aliquam euismod lorem ispum.
                  </p>
                  <p className="blockText">
                    Eget enim aliquam euismod mauris in vitae viverra<br />
                    blandit lectus faucibus diam consequat maecenas<br />
                    turpis metus sit.
                  </p>
                </div>
              </div>
            </div>
            <div className="thirdBlock">
              <h1 className="topText marginB">Skills</h1>
              <div className="verticalLineinBlock mgBtm"></div>
              <div className="wrapperLoading">
                <div className="blocks">
                  <div className="textWithLine">
                    <div className="wrapperTextOneBlock">
                      <h1 className="textOneBlock">PHOTOSHOP</h1>
                    </div>
                    <div className="line"></div>
                  </div>
                  <p className="percent">62%</p>
                </div>
                <div className="blocks">
                  <div className="textWithLine">
                    <div className="wrapperTextOneBlock widthForTwoBlock">
                      <h1 className="textOneBlock">ILLUSTRATOR</h1>
                    </div>
                    <div className="line"></div>
                  </div>
                  <p className="percent">84%</p>
                </div>
                <div className="blocks">
                  <div className="textWithLine">
                    <div className="wrapperTextOneBlock widthForThreeBlock">
                      <h1 className="textOneBlock">MARKETING</h1>
                    </div>
                    <div className="line"></div>
                  </div>
                  <p className="percent">78%</p>
                </div>
                <div className="blocks">
                  <div className="textWithLine">
                    <div className="wrapperTextOneBlock widthForFourBlock">
                      <h1 className="textOneBlock">SUPER MARIO</h1>
                    </div>
                    <div className="line"></div>
                  </div>
                  <p className="percent">92%</p>
                </div>
                <div className="blocks">
                  <div className="textWithLine">
                    <div className="wrapperTextOneBlock widthForFiveBlock">
                      <h1 className="textOneBlock">DIGITAL PAINTING</h1>
                    </div>
                    <div className="line"></div>
                  </div>
                  <p className="percent">58%</p>
                </div>
              </div>
            </div>
            <div className="fourthBlock">
              <h1 className="topText customColorText">Cover Letter</h1>
              <div className="verticalLineinBlock customColor"></div>
              <h1 className="h2Text">
                Dolor sit amet, consectetur adipiscing elit viverra tristique<br />
                placerat in massa consectetur quisque
              </h1>
              <p className="bottomText">
                Faucibus sed tristique fames sed aliquet ultricies eget viverra
                arcu. Vitae faucibus<br />
                diam consequat maecenas. Turpis metus sit diam purus leo in varius
                ac quam.<br />
                Nunc amet tristique volutpat adipiscing vulputate est phasellus.
                Volutpat faucibus<br />
                praesent ac lobortis aliquam dolor. Eget enim aliquam euismod
                mauris in vitae<br />
                viverra blandit lectus. Diam feugiat are mattis metus, parturient
                ipsum id nibh<br />
                tortor tincidunt. Quam facilisi nunc faucibus diam consequat
                maecenas<br />
                lorem ipsum donec.
              </p>
              <p className="bottomText mgTop">
                Vitae faucibus diam consequat maecenas. Turpis metus sit diam
                purus leo in varius<br />
                ac quam. Nunc amet tristique volutpat adipiscing vulputate
                phasellus diam<br />
                consequat lorem ipsum estera maecenas.
              </p>
            </div>
            <div className="fifthBlock">
              <h1 className="topText marginB marginT">Contact</h1>
              <div className="verticalLineinBlock mgBtm"></div>
              <div className="contactBlockText">
                <h1 className="h2Text colorW">
                  Consectetur adipiscing elit viverra tristique<br />
                  placerat in massa consectetur
                </h1>
                <p className="bottomText colorW">
                  Vitae faucibus diam consequat maecenas. Turpis metus sit diam<br />
                  purus leo in varius ac quam lorem est persetera
                </p>
                <p className="textEmail">
                  <span className="emailWebsite">EMAIL:</span>
                  <a
                    className="bottomText colorW"
                    href="mailto: company@youremail.com"
                  >company@youremail.com
                  </a>
                </p>
                <p className="textWebsite">
                  <span className="emailWebsite">WEBSITE:</span>
                  <a className="bottomText colorW" href="www.yourwebsite.com"
                  >www.yourwebsite.com</a>
                </p>
              </div>
              <div className="inputBtnWrapper">
                {/* <input className="inputName" type="text" placeholder="name" />
                <input
                  className="inputEmail inputName"
                  type="text"
                  placeholder="email"
                />
                <input
                  className="inputMessage inputName"
                  type="text"
                  placeholder="message"
                /> */}
                {/* часто я не бачив щоб інпут записували в масив і мапали його, зачасту просто на різних пейдхаж визветься цей компонент і прокинеться пропс, зараз може виглядати як дублювання коду так як юзається тричі */}
                <Input styles={"inputName"} type={"text"} placeholder={"name"} />
                <Input styles={"inputEmail inputName"} type={"text"} placeholder={"email"} />
                <Input styles={"inputMessage inputName"} type={"text"} placeholder={"message"} />
                <button className="sendMes">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="wrapperFooter">
          <div className="marginForFooter"></div>

          <div className="sixthBlock">
            <div className="wrapperIcons">
              <a href=""><img className="footerImg" src="./assets/img/be.png" alt="be" /></a>
              <a href=""
              ><img className="footerImg" src="./assets/img/twitter.png" alt="twitter"
                /></a>
              <a href=""
              ><img className="footerImg" src="./assets/img/facebook.png" alt="facebook"
                /></a>
              <a href=""
              ><img className="footerImg" src="./assets/img/youTube.png" alt="youTube"
                /></a>
            </div>
            <h1 className="footerText">© Carlo CIccarelli 2022.</h1>
          </div>
        </div>
      </footer>

    </div>
  );
};
export { SecondPage };
