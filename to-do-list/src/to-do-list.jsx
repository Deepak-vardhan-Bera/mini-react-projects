import React, { useState } from "react"

function Todolist(){
const [task,settask]=useState("");
const[tasks,settasks]=useState(["Eat breakfast","Take shower"]);

function handle(e){
console.log(e.target.value)
  settask(e.target.value);
}

function addtask(){
  if(task!==""){
    settasks([...tasks,task]);
    settask(" ");}
    else{
      alert("No task Entered");
    }
}

function del(index){
        settasks(tasks.filter((_,i)=> i!==index))
        
}
function up(index){
  if(index!==0){
let tkks=[...tasks];
let temp=tkks[index]
tkks.splice(index,1);
tkks.splice(index-1,0,temp)
settasks(tkks);
console.log(tasks);}
else alert(`Already ${tasks[index]} is in first place`);
}
function down(index){
let tkks=[...tasks];
let temp=tkks[index]
tkks.splice(index,1);
tkks.splice(index+1,0,temp)
settasks(tkks);
}
function enter(e){
if(e.key==='Enter'){
  if(task==="")
  alert("No task Entered");
else 
addtask();
}
}


  return( 
  <>
  <div id="whole">
  <h1>To-Do-List</h1>
  <div id="add">
  <input id="area" onChange={handle}  onKeyDown={enter} type="text" value={task} placeholder="Enter a Task..."/>
  <button id="btn" onClick={addtask}>Add</button>
   </div>
  <div id="list" >
   { tasks.map((tk,index) =>(
     <div className="tasks" key={index}>
      {tk}
      <button className="del" onClick={()=>del(index)} >Delete</button>
      <button className="up" onClick={()=>up(index)}> &#128070;</button>
      <button className="down" onClick={()=>down(index)}> &#128071;</button>
      </div>
    ))}
  </div>

  </div>

  </>
)
}

export default Todolist