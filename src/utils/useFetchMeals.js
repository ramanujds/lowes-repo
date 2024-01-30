import { useEffect, useState } from "react";
import { mealsUrl } from "./AppConfig";

export const useFetchMeals = () => {

    const [meals, setMeals] = useState([]);

    const fetchMeals = async () => {
       const data = await fetch(mealsUrl)
         const response = await data.json();
            setMeals(response.meals);
       }
    useEffect(()=>{
         fetchMeals();
      },[])

    return meals;

}