import React from 'react'

export const Improve = () => {

  const list = [
    "learn new recepies",
    "learn new recepies",
    "write your new recepies",
    "learn new recepies",
    "learn new recepies",
    "get ranked",
  ]


  return (
    <div className="section improve">

      <div className="col img">

        <img src="/img/gallery/img_10.jpg" alt="" />

      </div>

      <div className="col typography">
        <h1 className="title">
          improve your culinary skills
        </h1>

        {list.map((item, index) => (<p className='improveItem' key={index} > {item}</p>))}

        <button className='btn'> SIGNUP NOW </button>
      </div>


    </div>
  );
};



export default Improve
