import React, {useCallback, useEffect, useState} from 'react';
import Layout from "./Components/Layout/Layout";
import {Route, Routes, useLocation} from "react-router-dom";
import All from "./Containers/All/All";

import {ApiMealsList, Meal} from "./type";
import axiosApi from "./axiosApi";
import EditMeal from "./Containers/Edit-Meal/EditMeal";
import NewMeal from "./Containers/New-Meal/New-Meal";

function App() {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState<Meal[]>([]);
  const location = useLocation();

  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true)
      const mealResponse = await axiosApi.get<ApiMealsList | null>('/meal.json');
      const meals = mealResponse.data;

      if (!meals) {
        return setMeals([]);
      }
      const newMeal = Object.keys(meals).map(id => {
        const meal = meals[id];
        return {
          ...meal, id,
        }
      });
      setMeals(newMeal);
    } finally {
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchMeals();
    }
  }, [location, fetchMeals]);


  return (<Layout>
    <Routes>
      <Route path='/' element={<All meals={meals} loading={loading} fetchMeals={fetchMeals}/>}/>
      <Route path='/new-meal' element={<NewMeal/>}/>
      <Route path={'/edit-meal/:id'} element={<EditMeal/>}/>
      <Route path="*" element={(<h1>Not found!</h1>)}/>
    </Routes>
  </Layout>);
}

export default App;
