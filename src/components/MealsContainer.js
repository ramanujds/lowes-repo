import React from 'react'
import MealsCard from './MealsCard'

const MealsContainer = ({meals,updateMeals}) => {
  return (
    <>
     <div className='row'>
      <div className='col-12'>
        <button className='btn btn-primary' onClick={()=>updateMeals([])}>Clear Data</button>
        </div>
        </div>
      <div className='row'>
      {meals.map(meal=> 
       <MealsCard meal={meal}/>
      
       )}
    </div>

  </>

  )
  
}

export default MealsContainer
