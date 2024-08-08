import React ,{useState} from 'react'

function Indexbox({
    onamountchange,
    oncurrencychange,
    options,
    amount,selectedcurrency="usd",
    label
    }) 
{
  
 
  return (
    <div className='grid h-20 grid-flow-row-dense grid-cols-2 md:my-3 my-7 bg-white rounded gap-14 w-72 md:w-[27rem] md:h-32' >
       <div  className='grid gap-1 md:ml-2 place-content-around'>  
        <label htmlFor="button" className='font-bold'>{label}</label>
        <input type="number" 
          id='button'
         placeholder='Amount'
         readOnly={label === "To"}
         className='w-20 pl-3 my-4 rounded md:w-1/2 bg-slate-300'
         value={amount}
         
          
         
         onChange={(e)=>{onamountchange(Number(e.target.value))}}
         />
       </div >
       <div className='grid gap-1 place-content-around'>
        <label htmlFor="input"  className='font-bold'>Currencytype</label>
        {/* <select
        value={selectedcurrency}
        className='my-4'
        onChange={(e)=>{oncurrencychange(e.target.value)
        }}
        >
            {
             options.map((type)=>(
              <option key={type}value={type}>{type}</option>
             ))
            }
            
        </select> */}
        <input list='data' id='input'
        placeholder='pick one'
        value={selectedcurrency}
         className='w-20 md:my-4 md:w-44'
         onChange={(e)=>{oncurrencychange(e.target.value)
         }}
         />
        {<datalist id="data"
        >
          {options.map((type) => (
            <option key={type} value={type} />
           ))}
            </datalist>
            }
       </div>
    </div>
  )
}

export default Indexbox