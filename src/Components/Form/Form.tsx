import React from 'react';

const Form = () => {
  return (
    <form>
    <h4>Edit</h4>
    <div className="form-group">
      <label htmlFor="page">Page</label>
      <select name="page" id="page">
        <option disabled value=''>Select a meal</option>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Snack</option>
        <option>Dinner</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" className="form-control" style={{resize:'none',height:'150px'} }/>
    </div>
    <div className="form-group mb-2 w-25">
      <label htmlFor="kcal">kcal</label>
      <input id="kcal" name="kcal" type="number" className="form-control"/>
    </div>
    <button type="submit" className="btn btn-primary">Create</button>
  </form>);
};

export default Form;