import { pi } from 'prelude-ls';
import React from 'react';


function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src = {picture}></img>

  </div>
};

const foodILike = [
  {name: "Kimchi",
  image : "a.jpg"
},
  {name: "bulgogi",
  image : "b.jpg"
  },

];



function App() {
  return (
    <div className="App">
 
       <h1>Hello world!!</h1>
       {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} /> 
       ))}

    </div>
  );
}

export default App;
