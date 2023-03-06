

import Previous from "../components/Previous_searches/Previous";
import Recipes_card from "../components/Recipes_card/Recipes_card";

function Recipes() {

  const recipes = [
    {
        title: "Chicken Pan Pizza",
        image: "/img/gallery/img_1.jpg",
        authorImg: "/img/top-chiefs/img_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/img/gallery/img_4.jpg",
        authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/img/gallery/img_10.jpg",
        authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
        title: "Chicken Pan Pizza",
        image: "/img/gallery/img_1.jpg",
        authorImg: "/img/top-chiefs/img_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/img/gallery/img_4.jpg",
        authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/img/gallery/img_10.jpg",
        authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chiefs/img_5.jpg",
    }
].sort(() => Math.random() - 0.5)


  return (
    <>
      <Previous />

      <div className="recipes_container">

        {recipes.map((recipe , index)=>(

          <Recipes_card  key={index} recipe={recipe}/>

        ))}




      </div>
    </>


  );
}

export default Recipes;
