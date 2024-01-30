import React from 'react'
import MealsCard from './MealsCard'

const MealsContainer = ({ meals,removeItem }) => {
  return (
    <div className='row'>
      {meals.map(meal => <MealsCard meal={meal}/>
      )}
    </div>

  )

}

export default MealsContainer
