import React from 'react';

function Food({name,image}) {
  console.log(name, image);
  return (
    <div>
      <h1>{name}</h1>
      <img src={image}/>
    </div>
  )
}

const foodILike = [
  {
    name: "김밥" ,
    image: "https://s.pstatic.net/static/www/mobile/edit/2017/0426/mobile_183053995499.png"
  },
  {
    name: "삼겹살",
    image: "https://s.pstatic.net/static/www/mobile/edit/2017/0310/mobile_173318132897.png"
  },
  {
    name: "치킨",
    image: "https://s.pstatic.net/static/www/mobile/edit/2017/0426/mobile_18432363571.png"
  }
];

function App() {
  return (
    <div>
      <div>hello</div>
      {foodILike.map(each => <Food name={each.name} image={each.image}/>)}
    </div>
  );
}

export default App;
