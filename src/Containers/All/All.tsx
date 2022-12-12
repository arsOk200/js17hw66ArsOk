import React from 'react';
import List from "../../Components/List/List";
import {Meal} from "../../type";

interface Props{
  meals:Meal[];
}

const All:React.FC<Props> = ({meals}) => {
  return (
    <>
     <List meals={meals}/>
    </>
  );
};

export default All;