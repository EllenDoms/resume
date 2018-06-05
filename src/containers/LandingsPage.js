import React, { Component } from "react";
import { Link } from 'react-router-dom'; //navigate in app

import "../style/landingspage.css";

import logo from '../img/logo.png';
import topImg from '../img/topImg.png';
import step1 from '../img/icon/info.png';
import step2 from '../img/icon/template.png';
import step3 from '../img/icon/send.png';

import design1 from '../img/cv/demo1.png';


export default class LandingPage extends Component {
  render(){
    return(
      <div id="LandingsPage" className="builderCss">
        <div id="topBlock" className="gradient">
          <div className="container">
            <div id="header">
              <img src={logo} />
              <ul className="rightNav">
                <li><Link to={`/login`}>Login/Signup</Link></li>
              </ul>
            </div>
            <div id="tagline">
              <h1>Build Your resume. <br/>Get the job.</h1>
              <p>(Yes, it's that simple)</p>
              <Link to={`/login`} className="btn btn-primary">Create account</Link>
              <Link to={`/resume/resume`} className="btn btn-secondary">See demo</Link>
            </div>
          </div>
          <img id="topImg" src={topImg} />
        </div>
        <div id="stepsBlock" className="block white center">
          <div className="container">
            <h2 className="center">15 minutes. 3 easy steps.</h2>
            <ul>
              <li><img src={step1} /><p>Add your info.</p></li>
              <li><img src={step2} /><p>Choose a design.</p></li>
              <li><img src={step3} /><p>Send your resume.</p></li>
            </ul>
          </div>
        </div>
        <div id="designsBlock" className="block grey">
          <div className="container">
            <img src={design1} className="designImg" />
            <div className="right">
              <h3>Ellen Doms</h3>
              <h4>Salmon design</h4>
              <div className="quote">“I've build this tool because I needed it myself. I didn't find another resume builder with designs that stood out.”</div>
            </div>
          </div>
        </div>
        <div id="footer" className="block dark">

        </div>
      </div>
    )
  }
}
