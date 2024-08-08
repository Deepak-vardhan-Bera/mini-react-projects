import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bgi from './assets/pexels-pixabay-534216.jpg'
import Indexbox from './Components/indexbox'
import usecurrencyinfo from './hooks/usecurrencyinfo'

function App() {
  const [amount, setamount] = useState("")
const [convertedamount, setconvertedamount] = useState("")
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
    const options=usecurrencyinfo(from)
    let newoptions=[];
   console.log(options);
   if(options)
    {newoptions = Object.keys(options)      
    }
   else 
    newoptions=[];
 const convert=()=>{
  console.log(newoptions);
  
  setconvertedamount(amount*options[to])
  console.log(convertedamount);
  
 }
 const swap=()=>{
  setfrom(to)
  setto(from)
  setamount(convertedamount)
  setconvertedamount(amount)
  // convert()
 }

  return (
    <>
   <div  className='grid w-screen h-screen place-items-center'
   style={{ backgroundImage: `url(${bgi})`, backgroundSize:"cover" }}
   >
     <div className='grid shadow-2xl grid-flow-row border border-gray-60 backdrop-blur-sm rounded w-80 h-96 md:h-[23rem] md:w-[30rem] place-items-center gap-4'
    //  style={{backdropFilter:"blur(5px)" }}
     >
      <form onSubmit={
        (e)=>{
          e.preventDefault()
          convert()
        }
      }>
        <Indexbox 
        label={"From"}
        amount={amount}
        selectedcurrency={from}
        onamountchange={(amount)=> setamount(amount)}
        oncurrencychange={(currency)=> setfrom(currency)}
        options={newoptions}
        />
     <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"onClick={swap}>
      Swap  <i class="fa fa-refresh"></i>
     </button>

        <Indexbox 
        label={"To"}
        amount={convertedamount}
        selectedcurrency={to}
        onamountchange={(amount)=> setconvertedamount(amount)}
        oncurrencychange={(currency)=> setto(currency)}
        options={newoptions}
        />
        <button type="submit"
        className='w-72 md:w-[27rem] text-2xl md:h-10 h-20 font-bold py-1'
        >
          {`convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
        </button>
      {console.log(amount)}
      </form>
     </div>
   </div>
    </>
  )
}

export default App
