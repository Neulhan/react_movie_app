import React from 'react';

function Food({fav}) {
  console.log(fav);
  return <h1>{fav}</h1>
}


function App() {
  return (
    <div>
      <div>hello</div>
      <Food fav={"kimchi"}/>
      <Food fav={"라면"}/>
      <Food fav={"삼겹살"}/>
      <Food fav={"쭈꾸미"}/>
    </div>
  );
}

export default App;
