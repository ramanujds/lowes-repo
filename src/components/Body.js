import React, { useEffect, useReducer } from 'react'
import { useState } from 'react'
import MealsContainer from './MealsContainer'
import { meals } from '../utils/Meals'
import Shimmer from './Shimmer'

const initialState = {
  meals:meals
}

const reducer = (state,action) => {
  switch(action.type){
    case 'REMOVE_ITEM':
      return {...state,meals:state.meals.filter(meal=>meal.idMeal!=action.payload)}
      case 'RELOAD_ITEM':
      return {...state,meals:meals}
    case 'RESET_ITEM':
      return {...state,meals:[]}
  }
}

const Body = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  // const [data,setData] = useState([]);
   console.log("Body Rendered")
   const [refresh,setRefresh] = useState(false);
  const [searchItem,setSearchItem] = useState();
  

   // https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert

  //  const fetchMeals = async () => {
  //   console.log("Fetching Meals from API")
  //   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
  //   .then(res=>res.json()).then(data=>setData(data.meals))
  //  }

  //  useEffect(()=>{
  //     fetchMeals();
  //   },[refresh])

  const removeItem = (id)=>{
    dispatch({type:'REMOVE_ITEM',payload:id})
  }
    
  return (
    <div>
    <button className='btn btn-danger' onClick={()=>dispatch({type:'RESET_ITEM'})}>Reset Data</button> 
    <button className='btn btn-primary' onClick={()=>dispatch({type:'RELOAD_ITEM'})}>Reload Data</button> 
    <div><input type="text" onChange={(e)=>setSearchItem(e.target.value)}/>
    <button className='btn btn-dark' onClick={()=>removeItem(searchItem)}>Remove Meal</button>
    </div>
   
    {state.meals.length===0 && <Shimmer/>}
    <MealsContainer meals={state.meals}/>
    </div>
  )
}


export default Body
