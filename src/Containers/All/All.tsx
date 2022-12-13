import React, { useState} from 'react';
import List from "../../Components/List/List";
import { Meal} from "../../type";
import Spinner from "../../Components/Spinner/Spinner";
import axiosApi from "../../axiosApi";
import Total from "../../Components/Total/Total";


interface Props {
  loading: boolean
  meals: Meal[];
  fetchMeals: () => void;
}

const All: React.FC<Props> = ({meals, loading, fetchMeals}) => {

  const [deleting, setDeleting] = useState(false);
  const deleteMeal = async (id: string) => {
    try {
      setDeleting(true)
      await axiosApi.delete('/meal/' + id + '.json');
      await fetchMeals();
    } finally {
      setDeleting(false);
    }
  };

  return (<>
     <Total meals={meals} loading={deleting}/>
      {loading ? <Spinner/> : (<List meals={meals} deleteMeal={deleteMeal} deleting={deleting}/>)}
    </>);
};

export default All;