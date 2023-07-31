import React from "react";
const ReceipeIndex=({alphaIndex})=>{
    const alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    return(
        <>
         {  

           alpha.map(item=>{
            return(
                <div className="numBox" data-aos="zoom-out-up"  data-aos-duration="1000"onClick={()=>alphaIndex(item)}>
                    <h3>{item}</h3>
                </div>
            )
        })
        } 
         </>
    )
}
export default ReceipeIndex;