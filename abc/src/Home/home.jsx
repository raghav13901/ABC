import React from 'react';
import img from "./WhatsApp Image 2021-03-23 at 13.44.36.jpeg";
import './styles.css';
import NavB from '../Navbar'

function Home() {
  return (
      <div className="home">
        <NavB/>
        <img src={img} alt=""/>
      </div>
  );
}

export default Home;
