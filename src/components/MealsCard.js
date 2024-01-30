import React, { useContext } from 'react'
import { MealsContext } from '../utils/MealsContext';

const MealsCard = ({meal}) => {


  const {meals,removeItem} = useContext(MealsContext);

  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={meal.strMealThumb} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{meal.strMeal}</h5>
          <h5 className="card-text">{meal.idMeal}</h5>
          <p className="card-text">{meal.strInstructions}</p>
          <a href="#" className="btn btn-primary">See Recipe</a>
          <button className='btn btn-danger' onClick={()=>removeItem(meal.idMeal)}>Remove Meal</button>
        </div>
        </div>
  )
}

export default MealsCard
