import React from 'react';
import '../styles/Recipe.css';

const Recipe = ({title,calories,image}) => {
  return(
      <div className={'container'}>
          <img src={image} alt=""/>
          <h3>{title}</h3>
          <p>{calories.toFixed(2)} KCal</p>
      </div>
  );
};

export default Recipe;
