import React from "react";
import Diets from "./Diets";
import './diets.css';
import Hero from "./Hero";
import Info from "./Info";
import './exercises.css';
import './hero.css'



function Exercises(){
    
const exercises = [
    {
    
    name:"Flat bench press",
    muscle:"Chest",
    
    imgurl:"https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/press-de-banca-con-barra-init-pos-3832.png"


},
{
    name:"Incline bench press",
    muscle:"Chest",
    imgurl:"https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/press-de-banca-inclinado-con-barra-init-pos-5432.png"
},
{
    name:"Dumbbell bicep curl",
    muscle:"Bicep",
    imgurl:"https://www.wikihow.com/images_en/thumb/0/00/Get-Bigger-Biceps-Step-1-Version-4.jpg/v4-460px-Get-Bigger-Biceps-Step-1-Version-4.jpg.webp"
},
{
    name:"Hammer curl",
    muscle:"Bicep",
    imgurl:"https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/curl-de-biceps-con-mancuernas-de-pie-agarre-tipo-martillo-init-pos-1570.png"
},
{
    name:"Triceps dips",
    muscle:"Triceps",
    imgurl:"https://i.blogs.es/ce191f/dippingbis/1366_2000.jpg"
},
{
    name:"Triceps extensions with dumbbells",
    muscle:"Triceps",
    imgurl:"https://i.blogs.es/aac9a0/triceps2/450_1000.webp"
},
{
    name:"Lateral raises",
    muscle:"shoulder",
    imgurl:"https://eresfitness.com/wp-content/uploads/2019/09/Elevaciones-laterales-con-mancuernas.jpg.webp"
},
{
    name:"front raises",
    muscle:"shoulder",
    imgurl:"https://eresfitness.com/wp-content/uploads/2019/09/Elevaci%C3%B3n-frontal-con-mancuernas.jpg.webp"
},
{
    name:"squat",
    muscle:"quadriceps",
    imgurl:"https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/media-sentadilla-con-barra-init-pos-8649.png"
},
{
    name:"deadlift",
    muscle:"hamstrings",
    imgurl:"https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/peso-muerto-rumano-o-con-piernas-estiradas-init-pos-6354.png"
},
{
    name:"pull-ups",
    muscle:"Back",
    imgurl:"https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/dominadas-init-pos-4753.png"
},
{
    name:"rowing",
    muscle:"Back",
    imgurl:"https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/remo-horizontal-sentado-con-polea-init-pos-6087.png"
},


]




    return(

<div>

<Diets/>



<section id="exercises">

<h1 className="title-exercises"> Best exercises </h1>

{
    exercises.map((item,index)=>{
        return (
             <div key={index} className="cont-father">

            <div className="card-exercises " >
                
           <h1 className="name-exercises" > {item.name} </h1>

           <h3 className="muscle"> {item.muscle} </h3>
           
           <img src={item.imgurl} className="img-exercises" />

            </div>
        </div>
        )
        
       
    })
}

</section>



<footer id="contact">

<ul className="links-contact">

<li className="li-footer"> <a href="https://instagram.com" className="link-footer">Instagram</a> </li>
<li className="li-footer"> <a href="https://facebook.com" className="link-footer">Facebook</a> </li>
<li className="li-footer"> <a href="https://twitter.com" className="link-footer">Twitter</a> </li>

</ul>

</footer>

</div>

    )
}


export default Exercises;