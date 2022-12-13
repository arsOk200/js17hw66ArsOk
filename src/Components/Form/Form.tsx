import React, {useState} from 'react';
import {ApiMeal, MealMutation} from "../../type";
import ButtonSpinner from "../Spinner/ButtonSpinner";

interface Props {
  onSubmit: (meal: ApiMeal) => void;
  existingMeal?: MealMutation;
  isEdit?: boolean;
  isUpdating?: boolean;
}

const initialState: MealMutation = {
  TimeOfReceipt: '', description: '', kcal: '',
}


const Form: React.FC<Props> = (
  {onSubmit,
    existingMeal = initialState,
    isEdit = false,
    isUpdating = false}) => {

  const [meal, setMeal] = useState<MealMutation>(existingMeal);

  const onMealChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = e.target;
    setMeal(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...meal,
    })
  };


  return (<form onSubmit={onFormSubmit}>
    <h4>{isEdit ? 'Edit meal' : 'Add new meal'}</h4>
    <div className="form-group mb-2">
      <select required name="TimeOfReceipt" id="TimeOfReceipt"
              value={meal.TimeOfReceipt} onChange={onMealChange}>
        <option disabled value=''>Time of receipt</option>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Snack</option>
        <option>Dinner</option>
      </select>
    </div>
    <div className="form-group mb-2">
      <textarea id="description" placeholder='description'
                name="description" className="form-control"
                value={meal.description} onChange={onMealChange}
                style={{resize: 'none', height: '150px'}}
      />
    </div>
    <div className="form-group mb-2 w-25">
      <label htmlFor="kcal">kcal</label>
      <input required placeholder='Kcal'
             id="kcal" name="kcal" type="number"
             className="form-control"
             value={meal.kcal}
             onChange={onMealChange}
      />
    </div>
    <button type="submit" disabled={isUpdating} className="btn btn-primary">
      {isUpdating && <ButtonSpinner/>} {isEdit ? 'Update' : 'Create'}
    </button>
  </form>);
};

export default Form;