import { useState,useEffect } from "react";

function CurDate(){
    let  months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [currentDate, setCurrentDate] = useState(formatdate());
 
    function formatdate()
{
      return `${months[new Date().getMonth()]} ${new Date().getDate()} ${new Date().getFullYear()}`
}
    <>
   <h3>{currentDate}</h3>
</>

}
export default CurDate