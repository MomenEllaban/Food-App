import React from 'react'
import CustomeImage from '../Custome/CustomeImage';

export const Recipes_card = ({recipe}) => {


  return (

    <div className='recipes_card'>

      <CustomeImage   imgSrc={recipe.image} pt="60%"/>

      <div className='recipes_card_info'>

      <img className='auther-img' src={recipe.authorImg} alt="" />
      <p className='recipe-title'>{recipe.title}</p>
      <p className='recipe-desc'>

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, quia.
      </p>

    <a href="#!" className='view_btn'> VIEW RECIPE</a>
      </div>
    </div>

  );
};

export default Recipes_card
