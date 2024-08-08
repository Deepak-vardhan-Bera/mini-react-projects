import React from 'react'
import PropTypes from 'prop-types'
import { useEffect,useState } from 'react'

function usecurrencyinfo(from) {
    const [data, setdata] = useState(null)
    
    
    useEffect(() => {
        console.log(from);
        async function getdata() {
            console.log("Getting data ....");
            
            
            let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`);
            let result = await response.json();
          setdata(result[from])
          
          
         }
         getdata();
    }, [from])
//    console.log(data);
   
    
       return data

    
}



export default usecurrencyinfo
