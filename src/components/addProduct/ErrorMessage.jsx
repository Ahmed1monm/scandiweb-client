import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlertError = ({ message }) => {
  return (
    <div className='col-sm-6 '>
      <div className='alert alert-danger' role='alert'>
        {message}
      </div>
    </div>
  );
};

export default AlertError;
