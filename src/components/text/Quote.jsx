import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

export const Quote = () => {


  return (

    <div className="section quote">
      <p className='quote-text'>
        <FontAwesomeIcon icon={faQuoteLeft} />
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatem eligendi
        praesentium architecto cumque minima
        dicta asperiores esse excepturi neque
        amet eaque culpa recusandae dolor
        explicabo vitae incidunt magnam,
        necessitatibus voluptate, est nemo
        aliquid sapiente. Ab corporis.
      </p>
      <p className='qoute-auther'>
        - Momen Ellaban
      </p>
    </div>
  );
};



export default Quote
