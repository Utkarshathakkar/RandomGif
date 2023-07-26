import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";



function App(){
  return(
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
          <h1 className="bg-white rounded-lg w-11/12 text-center text-4xl font-bold  py-2 mt-[40px] ">RANDOM GIF</h1>
          <div className="flex flex-col w-full items-center mt-[40px] ">
         <Random/>
         <Tag/>
          </div>
          
    </div>
  )
}

export default App;
