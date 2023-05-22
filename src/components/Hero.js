import React, {useState} from "react";
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import imggym from './img-gym.jpg'
import './hero.css'




function Hero(){


const [click, setClick]= useState(false);

function HandlleClick(){

  setClick(!click);
  console.log(click)

}



  return(
    <section id="hero">

<nav className="navbar">

<button className="cont-button"  onClick={HandlleClick} >
<svg  className="svg-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
</button>

<ul className={ `ul-links  ${click ? "nav-responsive" : ""}` }>
  
<a href="#diets" className="links">Types of diets</a>
<a href="#exercises" className="links">Exercises</a>
<a href="#contact" className="links">Contact</a>

</ul>



</nav>

    </section>
  )
}

export default  Hero;











