import { useState,useEffect } from "react";

function Day(){



 const[day,setday]=useState(new Date().getDay())


const Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 

useEffect(()=>{
const timer=setInterval(() => {
    setday(new Date().getDay())
}, 1000);

return ()=>clearInterval(timer);
},[]
)



    function formday(){
     return `${Days[day]}`
    }


return(
    <>
    <p id="day" >{formday()}</p>
    </>
)

}



export default Day