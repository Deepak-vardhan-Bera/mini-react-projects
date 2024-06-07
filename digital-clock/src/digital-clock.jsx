import { useState,useEffect } from "react";

function Clock(){

    const[hour,sethour]=useState(new Date().getHours())
    const[min,setmin]=useState(new Date().getMinutes());
    const[sec,setsec]=useState(new Date().getSeconds());
useEffect(()=>{
    const timer=setInterval(() => {
        sethour(new Date().getHours());
        setmin(new Date().getMinutes());
        setsec(new Date().getSeconds());
    }, 1000);

    
    return()=> clearInterval(timer);

},[]) 

function format(){
let hourss=hour%12||hour;
const hours=hourss<10?`0${hourss}`:hourss;
const mins=min<10?`0${min}`:min;
const secn=sec<10?`0${sec}`:sec;
   return `${hours}:${mins}:${secn}`;
}
function mer(){
const state=hour<12?"AM":"PM";
return `${state}`;
}
    return(
        <>
        <div id="clock">
            <h1 id="timer" >{format()} </h1>
            <p id="state" >{mer()}</p>
        </div>
        </>
    )
}

export default Clock