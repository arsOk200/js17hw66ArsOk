import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {ApiMeal} from "../../type";
import Form from "../../Components/Form/Form";

const NewMeal: React.FC = () => {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const createMeal = async (meal: ApiMeal) => {
    try {
      setCreating(true);
      await axiosApi.post('/meal.json', meal);
      navigate('/');
    } finally {
      setCreating(false);
    }
  };
  return (<div className='col'>
      <Form onSubmit={createMeal} isUpdating={creating}/>
    </div>);
};

export default NewMeal;