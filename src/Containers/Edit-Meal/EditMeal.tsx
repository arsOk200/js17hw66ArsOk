import React, {useCallback, useEffect, useState} from 'react';

import {useNavigate, useParams} from "react-router-dom";
import {ApiMeal} from "../../type";
import axiosApi from "../../axiosApi";
import Form from "../../Components/Form/Form";

const EditMeal = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<ApiMeal | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchOneMeal = useCallback(async () => {

    const mealResponse = await axiosApi.get<ApiMeal>('/meal/' + id + '.json');
    setMeal(mealResponse.data);

  }, [id]);

  useEffect(() => {
    void fetchOneMeal();
  }, [fetchOneMeal]);

  const updateMeal = async (meal: ApiMeal) => {
    try {
      setUpdating(true);
      await axiosApi.put('/meal/' + id + '.json' + meal);
      navigate('/');
    } finally {
      setUpdating(false);
    }
  };

  const existingMeal = meal && {
    ...meal, kcal: meal.kcal.toString(),
  }

  return (<div className='col'>
      {existingMeal && (<Form onSubmit={updateMeal} existingMeal={existingMeal} isUpdating={updating} isEdit/>)}
    </div>);
};

export default EditMeal;