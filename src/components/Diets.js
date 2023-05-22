import React from "react";
import Info from "./Info";
import './diets.css'
import volumen from './img-volumen.jpg'
import definicion from './img-definicion.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


function Diets(){

 


    return(
<div className="cont-todos">

<Info/>

<h1 className="title-diets">  TYPES OF DIETS </h1> 
<section id="diets">
  
 

            <div className="diets-volumen ">

                 <h1 className="title-type-diets"> Volume</h1>

            <img src={volumen} alt="Volumen" className="img-vol" />

            <p className="parrafo-diets">
            Volume refers to a training phase in which the main goal is to increase muscle mass. During this phase, strength training focuses on lifting heavier weights and doing more repetitions, in order to
                increase the volume of work done and stimulate muscle growth. In addition, cardiovascular work can be included to improve cardiovascular health and help burn fat.

                As for the bulking diet, it is important to consume enough calories to support muscle growth. This means that you must consume more calories than you burn each day (being in a calorie surplus). Although the exact number
                The amount of calories you need will depend on your age, gender, height, weight and level of physical activity, as a general rule of thumb, a surplus of around 10-20% of your daily caloric needs is recommended.

                Furthermore, it is also important to ensure that your diet is rich in protein, as protein is essential for building and repairing muscle tissue. It is recommended to consume around 1.6-2.2 grams of protein per kilogram of weight
                body per day Recommended protein sources include lean meat, fish, eggs, low-fat dairy products, legumes, and protein powder supplements.
            </p>


            </div>




            <div className="diets-definicion ">
 
               <h1 className="title-type-diets">  Definition </h1>
        <img src={definicion} alt="definicion" className="img-definition" />

        <p className="parrafo-diets">

        Definition refers to a training phase in which the main objective is to reduce body fat to improve muscle definition. During this phase, strength training focuses 
        on maintaining muscle mass while burning fat, and cardio work can be included to increase caloric expenditure and improve cardiovascular fitness.

        As for the definition diet, it is important to consume fewer calories than you burn each day (to be in a caloric deficit) to allow the body to burn stored body fat for fuel. 
        Although the exact number of calories to consume will depend on age, gender, height, weight, and level of physical activity, as a general rule of thumb, a deficit of around 15-25% of your daily caloric needs is recommended. .

        It is important to maintain adequate protein intake during the cutting phase to preserve muscle mass while losing body fat. Protein intake typically ranges from 1.6-2.2 grams of protein per kilogram of body weight per day. It is also 
        important to consume complex and fibrous carbohydrates instead of simple carbohydrates to avoid insulin spikes and keep energy levels stable. Healthy fats are also important in the definition diet to provide energy and support hormone function.

        </p>


            </div>

</section>

</div>

    )
}


export default Diets;