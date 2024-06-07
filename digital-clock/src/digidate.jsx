import { useState,useEffect } from "react";

function CurDate(){
    let  months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [currentDate, setCurrentDate] = useState(formatdate());

 
function formatdate(){
if(new Date().getDate()>9)
   return `${months[new Date().getMonth()]} ${new Date().getDate()} ${new Date().getFullYear()}`;
   if(new Date().getDate()<10)
   return `${months[new Date().getMonth()]} 0${new Date().getDate()} ${new Date().getFullYear()}`;
}


useEffect(()=>{
   const tariq= setInterval(()=>{ 
      setCurrentDate(formatdate())},1000);
 
return ()=>clearInterval(tariq);

},[])



return(
    <>
   <h1 id="date" className="daaaa">{currentDate}</h1>
    </>
)
} 
export default CurDate