import React from 'react'
import CustomeImage from '../Custome/CustomeImage';

export const Hero = () => {


  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",

  ]


  return (
    <div className="section hero">

      <div className="col typography">
        <h1 className="title">
          what are we about
        </h1>
        <p className='info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deleniti sint, est enim illum laudantium a cum itaque minus iste?



        </p>

        <button className='btn'> explore now</button>
      </div>
      <div className="col gallery">
        {images.map((src,index) =>(

          <CustomeImage key={index} imgSrc={src} pt={"90%"} />

        ))}


      </div>

    </div>
  );
};

export default Hero
