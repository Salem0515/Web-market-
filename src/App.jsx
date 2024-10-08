import React from 'react';
import "./App.css";

import Ellipse1 from "./assets/Ellipse1.png";
import Ellipse2 from "./assets/Ellipse2.png";
import Ellipse3 from "./assets/Ellipse3.png";
import Ellipse4 from "./assets/Ellipse4.png";
import Ellipse5 from "./assets/Ellipse5.png";
import Ellipse6 from "./assets/Ellipse6.png";
import Ellipse7 from "./assets/Ellipse7.png";
import Ellipse8 from "./assets/Ellipse8.png";
import Ellipse9 from "./assets/Ellipse9.png";
import Ellipse10 from "./assets/Ellipse10.png";
import Ellipse11 from "./assets/Ellipse11.png";
import Ellipse12 from "./assets/Ellipse12.png";
import Ellipse13 from "./assets/Ellipse13.png";
import Ellipse14 from "./assets/Ellipse14.png";

import Vector1 from "./assets/Vector1.png";
import Vector2 from "./assets/Vector2.png";
import Vector3 from "./assets/Vector3.png";
import Vector4 from "./assets/Vector4.png";
import Vector5 from "./assets/Vector5.png";
import Vector6 from "./assets/Vector6.png";
import Vector7 from "./assets/Vector7.png";
import Vector8 from "./assets/Vector8.png";
import Vector9 from "./assets/Vector9.png";
import Vector10 from "./assets/Vector10.png";

import Header from './Components/Header/Header';
import Title from './Components/Title/Title';
import Form from './Components/FormConsultent/Form';
import Service from './Components/WebService/Service';
import Deliver from './Components/Deliver/Deliver';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="wrapper"> {/* Main container */}
      
      {/* Ellipses as Background */}
      <div className="ellipse_container">
        <img className='Ellipase1' src={Ellipse1} alt="ellipse" />
        <img className='Ellipase2' src={Ellipse2} alt="ellipse" />
        <img className='Ellipase3' src={Ellipse3} alt="ellipse" />
        <img className='Ellipase3_2' src={Ellipse3} alt="ellipse" />
        <img className='Ellipase4' src={Ellipse4} alt="ellipse" />
        <img className='Ellipase5' src={Ellipse5} alt="ellipse" />
        <img className='Ellipase5_2' src={Ellipse5} alt="ellipse" />
        <img className='Ellipase5_3' src={Ellipse5} alt="ellipse" />
        <img className='Ellipase5_4' src={Ellipse5} alt="ellipse" />
        <img className='Ellipase5_5' src={Ellipse5} alt="ellipse" />
        <img className='Ellipase6' src={Ellipse6} alt="ellipse" />
        <img className='Ellipase7' src={Ellipse7} alt="ellipse" />
        <img className='Ellipase8' src={Ellipse8} alt="ellipse" />
        <img className='Ellipase9' src={Ellipse9} alt="ellipse" />
        <img className='Ellipase10' src={Ellipse10} alt="ellipse" />
        <img className='Ellipase10_2' src={Ellipse10} alt="ellipse" />
        <img className='Ellipase10_3' src={Ellipse10} alt="ellipse" />
        <img className='Ellipase11' src={Ellipse11} alt="ellipse" />
        <img className='Ellipase12' src={Ellipse12} alt="ellipse" />
        <img className='Ellipase13' src={Ellipse13} alt="ellipse" />
        <img className='Ellipase14' src={Ellipse14} alt="ellipse" />
      </div>

      {/* Vectors as Background */}
      <div className="Vector_cntainer">
        <img className='Vector1' src={Vector1} alt="vector" />
        <img className='Vector2' src={Vector2} alt="vector" />
        <img className='Vector3' src={Vector3} alt="vector" />
        <img className='Vector4' src={Vector4} alt="vector" />
        <img className='Vector5' src={Vector5} alt="vector" />
        <img className='Vector5_2' src={Vector5} alt="vector" />
        <img className='Vector6' src={Vector6} alt="vector" />
        <img className='Vector7' src={Vector7} alt="vector" />
        <img className='Vector8' src={Vector8} alt="vector" />
        <img className='Vector8_2' src={Vector8} alt="vector" />
        <img className='Vector9' src={Vector9} alt="vector" />
        <img className='Vector10' src={Vector10} alt="vector" />
      </div>
      <Header />
      <div id="Home">
        <Title />
      </div>
      <div id="Services">
        <Form />
      </div>
      <div id="Projects">
        <Service />
      </div>
      <div id="Portfolio">
        <Deliver />
      </div>
      <div id="Support">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
