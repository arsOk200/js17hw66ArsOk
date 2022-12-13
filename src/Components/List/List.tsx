import React from 'react';
import Item from "../Item/Item";
import {Meal} from "../../type";

interface Props {
  meals: Meal[];
  deleteMeal: (id: string) => void;
  deleting: boolean
}

const List: React.FC<Props> = ({meals, deleteMeal, deleting}) => {
  return (<div className='d-flex flex-column-reverse'>
      {meals.map((meal) => (<Item key={meal.id}
                                  meal={meal}
                                  onDelete={() => deleteMeal(meal.id)}
                                  deleting={deleting}/>))}
    </div>);
};

export default List;