import React, { useState } from 'react';


function Button(){



const[color,setcolour]=useState("black")

    return(
      <>
       <style>{`
        body {
          background-color: ${color};
        }
      `}</style>
      
      <div id="buttons">
      <div id="button1" className="samebutton">
        <button id="red" onClick={()=>{setcolour("red")}}>Red</button>
      </div>
      <div id="button2"  className="samebutton">
        <button onClick={()=>{setcolour("green")}} id="green">Green</button>
      </div>
      <div id="button3"  className="samebutton">
        <button id="blue" onClick={()=>{setcolour("blue")}}>Blue</button>
     </div>   
      </div>
      </>
    )
}
export default Button