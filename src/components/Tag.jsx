import React from "react";
import { useState } from "react";
import Spinner from "./Spinner.js";
import useGif from "../hooks/useGif.js";




function Tag(){
   
    
    
    const [tag,settag]=useState("")

     const {loading,fetchdata,gif}=useGif();
    
    function clickhandler(){
       fetchdata(tag);
    }
  
    return(
        <div className="w-1/2  bg-blue-300 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
             <h1 className=" mt-[15px] text-2xl underline uppercase font-bold ">Random {tag} Gif</h1>
              {
               loading ? (<Spinner/>):(<img src={gif} alt="noimg" width="450"/>)
              }
               
             <input type="text" 
                onChange={(event)=>{
                settag(event.target.value);
                }}
                value={tag}
                 className="w-10/12 bg-slate-50 rounded-lg py-2 text-center opacity-75 mb-[2px]"
             />

             <button className="w-10/12 bg-white rounded-lg py-2 opacity-75 mb-[20px] " onClick={clickhandler}>
                  Generate
             </button>
        </div>
    )
}

export default Tag;
