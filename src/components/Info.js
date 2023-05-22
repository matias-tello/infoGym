import React from "react";
import './hero.css'
import Hero from "./Hero";

import StackedExample from "./Hero";
import OffcanvasExample from "./Hero";




function Info(){
    return(
                <div className="cont">

                    <Hero/>

                    <section id="info">

                    <h1> INFORMATION ABOUT THIS PAGE</h1>

                    <p> This page is made to show you the basic information about the two types of diets (volume and definition),
                         in addition to showing you the best exercises for each muscle group and what you can see depending on the exercise which part is being worked on. </p>
  
                     
                    </section>

                </div>
    )
}


export default Info;