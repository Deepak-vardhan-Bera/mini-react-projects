import React, { useState } from 'react';

function Interface(){
         const [color,setcolour]=useState("ffffff")

   const colorchanger=(e)=>{
    setcolour(e.target.value)
    console.log(typeof color);
   }

   const copy=()=>{
    navigator.clipboard.writeText(color)
        .then(() => {
          alert('Text copied to clipboard: ' + color);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
   }
   
         return(
        <>
        <style>{`
   #display{
       background-color: ${color}; }
   `}
   </style>
        <div id='color'>
           <h1 id='heading'>colour picker</h1>
           <div id="display">
            <p>selected colour:{color}</p>
           </div>
           <div>
                <p id='para'>select a colour from colour picker here:</p>
                <input type="color" name="picker" id="cp" onChange={colorchanger} value={color} />
                <button id='copy' onClick={copy}>Copy colour code to clipboard </button>
           </div>
        </div>
        </>
    )
}

export default Interface