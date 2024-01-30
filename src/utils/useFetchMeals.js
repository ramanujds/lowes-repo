import { useEffect, useState } from "react";

export const useFetchMeals = () => {

    const [meals, setMeals] = useState([]);

    const fetchMeals = async () => {
       const data = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
         const response = await data.json();
            setMeals(response.meals);
       }
    useEffect(()=>{
         fetchMeals();
      },[])

    return meals;

}