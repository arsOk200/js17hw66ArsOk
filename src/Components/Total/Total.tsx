import React, {} from 'react';
import {Meal} from "../../type";
import ButtonSpinner from "../Spinner/ButtonSpinner";
interface Props{
 meals:Meal[];
 loading:boolean;
}

const Total:React.FC<Props> = ({meals,loading}) => {
  const TotalKcal = meals.reduce((acc, meal)=> {
    return  acc + parseFloat(meal.kcal);
  }, 0);
  return (
    <div>
      <h3>Total Kcal: {loading ?<ButtonSpinner/>:(TotalKcal)}</h3>
    </div>
  );
};

export default Total;