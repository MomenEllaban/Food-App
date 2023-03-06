import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook  , faInstagram , faTwitter } from "@fortawesome/free-brands-svg-icons";

export const ChiefsCard = ({chief}) => {




  return (
    <div className=" Chief-card">

      <img src={chief.img} alt="" />
      <div className='chief-card-info'>

        <h3 className='chief-name'>{chief.name}</h3>
        <p className='chief-recipe'>Recipes : <b>{chief.recipesCount}</b> </p>
        <p className='chief-recipe'>Cuisine : <b>{chief.cuisine}</b> </p>
        <p className='chief-icon'>

    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faTwitter} />

        </p>

      </div>


    </div>
  );
};



export default ChiefsCard
