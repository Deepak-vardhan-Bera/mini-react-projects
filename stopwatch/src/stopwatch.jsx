import { useState,useEffect,useRef,useContext } from "react"


function Stopwatch(){

var coi=1;
const[min,setmin]=useState(0)
const[sec,setsec] =useState(0)
const[msec,setmsec]=useState(0)
const ref= useRef(null)


useEffect(() => {
    return () => clearInterval(ref.current);
  }, []);

function start(){
    coi=0;
if(ref.current!==null) return;
ref.current=setInterval(() => {
   setmsec((prevmsec)=>{
    if(prevmsec==999){
        setsec((prevsec)=>{
           if(prevsec==59){
                setmin(min+1);
                return 0;
           }
           return prevsec+1;
        }
        )
        return 0;
    }
    return prevmsec+1; }
   )


}, 1);
}

function stop(){
    let but=document.getElementById("start");
     but.innerText='Resume'
    clearInterval(ref.current);
    ref.current=null;

}

function reset(){
    let but=document.getElementById("start");
     but.innerText='START'
    coi=1;
    clearInterval(ref.current);
    ref.current=null;
    setmin(0);
    setsec(0);
    setmsec(0);
}

function format(){
  let mins=String(min).padStart(2,'0')
  let secs=String(sec).padStart(2,'0')
  let msecs=String(msec).padStart(2,'0')


    return `${mins}:${secs}:${msecs}`
}

return(
<>

<div id="watch">

<h1 id="timer" >{format()}</h1>

<div id="buttons" >
    <button id="start" onClick={start} className="all" >START</button>
    <button id="stop" onClick={stop} className="all">STOP</button>
    <button id="reset" onClick={reset} className="all">RESET</button>
   
</div>

</div>

</>
)
}
export default Stopwatch