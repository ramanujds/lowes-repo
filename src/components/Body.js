import React, { useContext, useEffect, useReducer } from 'react'
import { useState } from 'react'
import MealsContainer from './MealsContainer'
import { meals } from '../utils/Meals'
import Shimmer from './Shimmer'
import { MealsContext } from '../utils/MealsContext'
import { useFetchMeals } from '../utils/useFetchMeals'

const initialState = {
  meals: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return { ...state, meals: state.meals.filter(meal => meal.idMeal != action.payload) }
    case 'LOAD_ITEM':
      return { ...state, meals: action.payload }
    case 'RESET_ITEM':
      return { ...state, meals: [] }
  }
}

const Body = () => {


  const [state, dispatch] = useReducer(reducer, initialState);

  const meals = useFetchMeals();

  // const [data,setData] = useState([]);
  console.log("Body Rendered")
  const [refresh, setRefresh] = useState(false);
  const [searchItem, setSearchItem] = useState();

  // window.addEventListener('online', () => { logic to change state })
  // window.addEventListener('offline', () => { logic to change state })

  

  // https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert

  //  const fetchMeals = async () => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
  //   .then(res=>res.json()).then(data=>dispatch({type:'LOAD_ITEM',payload:data.meals}))
  //  }

   useEffect(()=>{
      dispatch({type:'LOAD_ITEM',payload:meals})
    },[])

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  return (
    <div>
    
      <button className='btn btn-danger' onClick={() => dispatch({ type: 'RESET_ITEM' })}>Reset Data</button>
      <button className='btn btn-primary' onClick={() => {}}>Reload Data</button>
      {/* <div><input type="text" onChange={(e) => setSearchItem(e.target.value)} />
        <button className='btn btn-dark' onClick={() => removeItem(searchItem)}>Remove Meal</button>
      </div> */}

      {state.meals.length === 0 && <Shimmer />}
      <MealsContext.Provider value={{meals:meals,removeItem}}>
        <MealsContainer/>
      </MealsContext.Provider>
    </div>
  )
}


export default Body
