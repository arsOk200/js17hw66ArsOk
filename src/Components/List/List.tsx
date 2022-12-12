import React from 'react';
import Item from "../Item/Item";
import {Meal} from "../../type";

interface Props{
  meals:Meal[];
}

const List:React.FC<Props>= ({meals}) => {
  return (
    <>
      {meals.map((meal) => (
        <Item key={meal.id}
              meal={meal}/>
      ))}
    </>
  );
};

export default List;