import React from "react";
import Spinner from "./Spinner.js";
import useGif from "../hooks/useGif.js";

function Random(){
   
     const {loading,fetchdata,gif}=useGif();

    return(
        <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
             <h1 className=" mt-[15px] text-2xl underline uppercase font-bold ">Random Gif</h1>
              {
               loading ? (<Spinner/>):(<img src={gif} alt="noimg" width="450"/>)
              }

             <button className="w-10/12 bg-white rounded-lg py-2 opacity-75 mb-[20px] " onClick={()=>{
               fetchdata();
             }}>
                  generate
             </button>
        </div>
    )
}

export default Random;
