
import React from 'react';
import PropTypes from 'prop-types';


function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0 </h4>
    <img src = {picture} alt={name} ></img>

  </div>
};

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number
}

const foodILike = [
  {id:1,
  name: "Kimchi",
  image : "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
  rating : 5

},
  {id:2,
    name: "bulgogi",
  image : "https://barefeetinthekitchen.com/wp-content/uploads/2014/11/bulgogi-4.jpg",
  

  },

];




function App() {
  return (
    <div className="App">
 
       <h1>Hello world!!</h1>
       {foodILike.map(dish => (
         <Food key={dish.id} 
         name={dish.name} 
         picture={dish.image}
         rating={dish.rating}
         />
       ))}

    </div>
  );
}

export default App;
