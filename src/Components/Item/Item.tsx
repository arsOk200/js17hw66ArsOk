import React from 'react';
import {Link} from "react-router-dom";

const Item = () => {
  return (
    <div className="card mb-2">
      <h5 className="card-header">Breakfast</h5>
      <div className="card-body">
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <strong className="card-text">600 Kcal</strong>
        <p className='d-flex gap-2'>
          <button className='btn btn-danger'>Delete</button>
          <Link className='btn btn-primary' to={'/edit-meal/:'}>Edit</Link>
        </p>
      </div>
    </div>
  );
};

export default Item;