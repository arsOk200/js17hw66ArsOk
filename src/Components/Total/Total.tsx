import React, {} from 'react';
import {Meal} from "../../type";
interface Props{
 meals:Meal[]
}

const Total:React.FC<Props> = ({meals}) => {
  const TotalKcal = meals.reduce((acc, meal)=> {
    return  acc + parseFloat(meal.kcal);
  }, 0);
  return (
    <div>
      <h3>Total Kcal:{TotalKcal}</h3>
    </div>
  );
};

export default Total;