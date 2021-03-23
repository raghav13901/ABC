import React,{useState} from 'react';
import {Carousel} from 'react-bootstrap';
import NavB from '../Navbar'
import './styles.css';
import img from './Crystal_Court_jaipur_pinkcityroyals02_20190704124403.jpg';
import img2 from './Saraogi_Mansion_jaipur_pinkcityroyals01_20190704124535.jpg';
import img3 from './151022818220171109_20191210100247.jpg';


function Slideshow() {
  const [currentInterval,setInt] = useState(1000);
  const [currentImageId,setId] = useState(1);
  const play = ()=>{
      setInt(1000);
  }
  const pause = ()=>{
    setInt(null);
  }
  const fast = ()=>{
    if(currentInterval > 250){
        if(currentInterval === 0){
            setInt(1000);
        }
        setInt(currentInterval/2);
    }
  }
  const slow = ()=>{
    if(currentInterval  < 4000){
        if(currentInterval === 0){
            setInt(1000);
        }
        setInt(currentInterval*2);
    }
  }

  return (
      <div className="slideshow">
        <NavB/>
        <Carousel  interval={currentInterval} onSlide={(e)=>{
            console.log(e)
            setId(e)
        }}>
        <Carousel.Item >
            <img
            id="0"
            className="ssImg"
            src={img}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            id="1"
            className="ssImg"
            src={img2}
            alt="Second slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            id="2"
            className="ssImg"
            src={img3}
            alt="Third slide"
            />

        </Carousel.Item>
        </Carousel>
        <button onClick={play}>
            Play
        </button>
        <button onClick={pause}>
            Pause
        </button>
        <button  onClick={fast}>
            Fast
        </button>
        <button  onClick={slow}>
            Slow
        </button>
      </div>
  );
}

export default Slideshow;
