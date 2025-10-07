import React, { useState } from "react";
import axios from "axios";
import { p2Api, Products_api } from "../services/constrains";
import { useEffect } from "react";
//rt { geBase64 } from "../services/constrains";
import Cards from "./Cards";
const Home = () => {
  
  const [Products,setProducts] = useState([])
 const FetvhPoducts = async ()=>{
  const res = await axios.get(p2Api)
  console.log(res.data);
  
  setProducts(res.data)

 }

 useEffect(()=>{
  console.log("runng...");
  
  FetvhPoducts()
},[])


  
return (
    <div className=" my-2 flex flex-wrap flex-col justify-center items-center" >
      {Products.map((item , index)=>{
        return <Cards  ProductImage={item.image} title={item.title} key={index} dis={item.category} price={item.price} item = {item}/>
      })}
      
    </div>
  );
};

export default Home;
