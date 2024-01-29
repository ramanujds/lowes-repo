import React, { useEffect } from 'react'
import { useState } from 'react'
import MealsContainer from './MealsContainer'
import { meals } from '../utils/Meals'
import Shimmer from './Shimmer'



const Body = () => {
  
   const [data,setData] = useState([]);
   console.log("Body Rendered")
   const [refresh,setRefresh] = useState(false);
  

   // https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert

   const fetchMeals = async () => {
    console.log("Fetching Meals from API")
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
    .then(res=>res.json()).then(data=>setData(data.meals))
   }

   useEffect(()=>{
      fetchMeals();
    },[refresh])
    
  return (
    <div>
    {data.length===0 && <Shimmer/>}
    <MealsContainer meals={data} updateMeals={setData}/>
    </div>
  )
}


export default Body
