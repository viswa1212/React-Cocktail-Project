import React, { useState } from "react";
import { Params, useParams } from "react-router-dom";

const Receipeinfo=()=>{
    const {DrinkId}=useParams();
    const[item,setItem]=useState();
   
    if(DrinkId!="")
    {
        fetch(`https:/www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${DrinkId}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.drinks[0].strIngredient2)
            setItem(data.drinks[0]);
        })
    }
    
     return(
        <>
        
         {
            (!item)?"":(<>
            <div className="content" data-aos="zoom-out-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                 <img src={item.strDrinkThumb}alt=""/> 
              <div className="vii">   
                 <div className="jj"> 
            <div className="innercontent"data-aos="fade-up"  data-aos-duration="1000">
                 <h1>Drinkname:&nbsp;&nbsp;{item.strDrink}</h1> 
                 <h2>Category:&nbsp;&nbsp;{item.strCategory}</h2>
            </div>
             </div> 
            <div className="receipe-details"data-aos="fade-up"  data-aos-duration="80">
                <div className="ingredients"data-aos="fade-right"  data-aos-duration="1000">
                    <h2>Ingredients</h2>
                    <h3>{item.strIngredient1}:{item.strMeasure1}</h3>
                    <h3>{item.strIngredient2}:{item.strMeasure2}</h3>
                    <h3>{item.strIngredient3}:{item.strMeasure3}</h3>
                    <h3>{item.strIngredient4}:{item.strMeasure4}</h3>
                   
                </div>
                </div>
                <div className="instructions">
                    <h2>Instructions</h2>
                     <h3>{item.strInstructions}</h3> 
                </div>
    
            
            </div> 
             </div>  
             </>)
         }
        </>
    )
}
export default Receipeinfo;