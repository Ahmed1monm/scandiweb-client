import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const InputField = ({ label, id, type ,setValue }) => {
    return (
    <>
      <div className="mb-3 row mt-2">
        <label htmlFor={id} className="col-sm-3 col-form-label">{label}</label>
        <div className="col-sm-4">
          <input type={type} className="form-control" id={id} onChange={(e)=>setValue(e.target.value)}/>
        </div>
      </div>
    </>
    );
  };

export default InputField;