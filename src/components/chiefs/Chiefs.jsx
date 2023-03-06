import React from 'react'
import ChiefsCard from './ChiefsCard';
export const Chiefs = () => {

  const chiefs = [
    {
        name: "Juan Carlos",
        img: "/img/top-chiefs/img_1.jpg",
        recipesCount: "10",
        cuisine: "Mexican",
    },
    {
        name: "John Doe",
        img: "/img/top-chiefs/img_2.jpg",
        recipesCount: "05",
        cuisine: "Japanese",
    },
    {
        name: "Erich Maria",
        img: "/img/top-chiefs/img_3.jpg",
        recipesCount: "13",
        cuisine: "Italian",
    },
    {
        name: "Chris Brown",
        img: "/img/top-chiefs/img_4.jpg",
        recipesCount: "08",
        cuisine: "American"
    },
    {
        name: "Blake Lively",
        img: "/img/top-chiefs/img_5.jpg",
        recipesCount: "09",
        cuisine: "French"
    },
    {
        name: "Ben Affleck",
        img: "/img/top-chiefs/img_6.jpg",
        recipesCount: "04",
        cuisine: "Indian"
    }
]


  return (
    <div className="section Chiefs">

      <h1 className='title'> Our Top Chiefs</h1>
      <div className='top-chiefs-container'>

 


        {chiefs.map(chief=>(<ChiefsCard key={chief.name} chief={chief} />))}
      </div>  
       </div>

  );
};



export default Chiefs
