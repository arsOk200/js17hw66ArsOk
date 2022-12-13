import React from 'react';
import {Link} from "react-router-dom";
import {Meal} from "../../type";
import ButtonSpinner from "../Spinner/ButtonSpinner";

interface Props {
  meal: Meal;
  onDelete: React.MouseEventHandler;
  deleting: boolean;
}

const Item: React.FC<Props> = ({meal, onDelete, deleting = false}) => {
  return (<div className="card mb-2">
      <h5 className="card-header">{meal.TimeOfReceipt}</h5>
      <div className="card-body">
        <p className="card-text">{meal.description}</p>
        <p className="card-text"><strong>{meal.kcal}</strong> Kcal</p>
        <p className='d-flex gap-2 mt-2'>
          <button className='btn btn-danger' disabled={deleting} onClick={onDelete}>{deleting && <ButtonSpinner/>}Delete
          </button>
          <Link className='btn btn-primary' to={'/edit-meal/' + meal.id}>Edit</Link>
        </p>
      </div>
    </div>);
};

export default Item;