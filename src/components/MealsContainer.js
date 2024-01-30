import React, { useContext } from 'react'
import MealsCard from './MealsCard'
import { MealsContext } from '../utils/MealsContext';

const MealsContainer = () => {
  const {meals} = useContext(MealsContext);
  return (
    <div className='row'>
      {meals.map(meal => <MealsCard meal={meal}/>
      )}
    </div>

  )

}

export default MealsContainer
