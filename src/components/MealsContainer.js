import React from 'react'
import MealsCard from './MealsCard'

const MealsContainer = ({ meals, updateMeals }) => {
  return (
    <div className='row'>
      {meals.map(meal =>
        <>
          {meal.strMeal == 'Apam balik' ? <></> : <MealsCard meal={meal} />}
        </>
      )}
    </div>



  )

}

export default MealsContainer
