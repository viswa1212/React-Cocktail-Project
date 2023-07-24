import React, { useEffect, useState } from "react";
 import vis from '../assets/cockk.jpeg';
 import CocktailReceipe from "./CocktailReceipe";
 import ReceipeIndex from "./ReceipeIndex";

const Cocktail=()=>{
  const[url,seturl]=useState("https:/www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
  
  const[item,setitem]=useState();
  const[show,setshow]=useState(false);
  const[search,setsearch]=useState("");

  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
     setitem(data.drinks);
      setshow(true);
    })
  },[url])
  
const setIndex=(alpha)=>{
  seturl(`https:/www.thecocktaildb.com/api/json/v1/1/search.php?f=${alpha}`)
}
const searchReceipe=()=>{
  
    seturl(`https:/www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    
}
  return(
        <>
        <div className="main">
        <div className='v'>
        <div className='i'>
        <img src={vis} alt='txt'></img>  
      
        </div>
        <h1>recipe<br></br>finder</h1>
        <form>
          <input type="search" placeholder='receipe' onChange={e=>setsearch(e.target.value)} onKeyDown={searchReceipe}/>
        </form>
       
      </div>

        <div className="container">
         
          {
            show ? <CocktailReceipe data={item}/>:"Not Found"
          }
        </div>
        <div className="indexContainer"  data-aos="fade-up"  data-aos-duration="1000">
          <ReceipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
        </div>
      </div>
        </>
    )
}
export default Cocktail;