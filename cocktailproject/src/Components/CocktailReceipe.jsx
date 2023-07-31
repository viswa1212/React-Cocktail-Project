import React from "react";
import { useNavigate } from "react-router-dom";
const CocktailReceipe=({data})=>{
    console.log(data)
    let navigate=useNavigate();
    return(
        <>
        {
            (!data)?"Not Found":data.map(item=>{
                return(
                      <div className="card"  data-aos="fade-up"  data-aos-duration="1000" key={item.idDrink} onClick={()=>{navigate(`/${item.idDrink}`)}}>
                    <img src={item.strDrinkThumb}/> 
                    <h3>{item.strDrink}</h3>
                    </div>
                )
            })
        }
       
        </>
    )
}
export default CocktailReceipe;