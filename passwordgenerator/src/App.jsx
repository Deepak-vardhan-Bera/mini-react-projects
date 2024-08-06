import { useState,useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setpassword] = useState("password")
  const [length, setlength] = useState(10)
  const [Numbers, setNumbers] = useState(false)
const [symbols, setsymbols] = useState(false)
const [button, setbutton] = useState("copy")
const passwordref = useRef(null)

const createpassword=useCallback((length)=>{
   let result="";
   let characters='abcdefghijklmnopqrstuvwxyz'
  let numbers="123467890";
  let symbolss="!@#$%^&*"
  if(Numbers){
    characters+=numbers
  }
  if(symbols){
    characters+=symbolss
  }
   for(let i=0;i<length-1;i++) {
    let index=Math.floor(Math.random()*characters.length)
    result += characters[index]    
   }  
   setpassword(result)
  },[length,Numbers,symbols])

  useEffect(()=>{
    setbutton("copy")
    createpassword(length)
  },[length,Numbers,symbols])


  const copypass = () => {
   navigator.clipboard.writeText(password)
  setbutton("copied")
   passwordref.current?.select();
  };



  return (
    <>
    <div className=' h-lvh mx-28 w-max' >
      <h1 className='pl-5 text-4xl mt-7 text-zinc-100'>Password Generator</h1>
     <div className='flex flex-row h-8 my-8 bg-white w-96'>
      <input type="text"
      className='w-full '
      value={password}
      readOnly
      
      />
      <button className='py-0.5 bg-blue-500 rounded-none outline-none'
      onClick={copypass} >
        {button}
      </button>
      </div>
    <div>
      <div className='flex-row' >
        <input type="range"
        max={30}
        min={8}
        onChange={(e)=> setlength(e.target.value)}
        />
        <label className="h-1 pt-0 ml-1 font-bold text-red-600" >Length:{length}</label>

        
        <input type="checkbox"
        className='ml-2 size-5'
      defaultChecked={Numbers}
        onChange={(e)=>{ console.log(Numbers); setNumbers((prev)=>!prev);}}
        />
         <label className="h-1 pt-0 ml-1 font-bold text-red-600" >Numbers</label>
        
        <input type="checkbox"
        className='ml-2 size-5'
      defaultChecked={symbols}
        onChange={(e)=>{setsymbols((prev)=>!prev);}}
        />
         <label className="h-1 pt-0 ml-1 font-bold text-red-600" >Symbols</label>
        
      </div>
    </div>
      
     
    </div>
    </>
  )
}

export default App
