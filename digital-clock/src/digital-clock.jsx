import { useState,useEffect } from "react";

function Clock(){

    console.log(new Date().getFullYear());
    return(
        <>
        <div id="clock">
            <h1>00:00:00</h1>
        </div>
        </>
    )
}

export default Clock