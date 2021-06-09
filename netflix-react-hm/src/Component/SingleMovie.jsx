import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { useState } from 'react';

const SingleMovie = ({ img, title, id }) => {
  return (
    <>
      <Link to={'/detail/' + id}>
        <img src={img} className='thumbnail' alt='' />
      </Link>
    </>
  );
};

export default SingleMovie;
