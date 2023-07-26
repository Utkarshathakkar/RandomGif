
import {useState} from "react";
import { useEffect } from "react";
import axios from "axios";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(){
   
    
    const [gif,setgif]=useState("");
    const [loading,setloading]=useState(false);

  async function fetchdata(tag){
      setloading(true);
       const {data}=await axios.get(tag? `${url}&tag=${tag} `: url);
      const imagesource=data.data.images.downsized_large.url;
      setgif(imagesource);
     setloading(false);
  }

  useEffect(()=>{
       fetchdata();
  },[]);

  return {loading,fetchdata,gif}
}
export default useGif;
