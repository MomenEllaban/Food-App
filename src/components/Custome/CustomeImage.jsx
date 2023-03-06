import React from 'react'

export const CustomeImage = ({ imgSrc, pt }) => {
  return (
    <>

      <div className='custome-image' style={{paddingTop : pt}}>
      <img src={imgSrc} alt="" />
      </div>


    </>
  );
};

export default CustomeImage
