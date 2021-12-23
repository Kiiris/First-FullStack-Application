import React from 'react';

function Home(props) {
  return (
    <div className="home">
      <h1 id="niceheader">Resist-a-Piece of these Recipes!</h1>
      <img
        src="https://imengine.prod.srp.navigacloud.com/?uuid=16b4e297-51f2-57d9-bb26-4bb8e5dcaaa9&type=primary&q=72&width=1024"
        height="270"
        width="270"
      />{' '}
      <vl />
      <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Pineapple-Honey-Glazed-Ham_H_s4x3.jpg.rend.hgtvcom.441.331.suffix/1568735449497.jpeg" />
      <vl />
      <img src="https://purewows3.imgix.net/images/articles/2020_11/classic-christmas-foods_yule-log.jpg?auto=format,compress&cs=strip" />{' '}
      <vl />
      <img
        src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/healthy-spaghetti-spicy-tomato-sauce.jpg"
        height="270"
        width="270"
      />
      <hr />
      <br />
      <p className="psections">The best recipes of all time!</p>
    </div>
  );
}

export default Home;
