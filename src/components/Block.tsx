import React from 'react';
import { CoordProps } from '../types/types';
import shop1 from '../img/shop1.png';
import house1 from '../img/kamppa1.png';



const Block: React.FC<CoordProps> = ({x, y, owners}: CoordProps) => {
  let owner = 'city';
  let img = '';
  const ownerCheck = owners.filter( item => (
    x === item.home.coords.x && y === item.home.coords.y
  ));

  const hovering = () => {
    console.log('owner ', owner);
  };

  if (ownerCheck.length > 0) {
    owner = ownerCheck[0].name;
    // map proper image, gotta think better solution for this maybe
    switch (ownerCheck[0].home.img) {
      case 'shop1':
        img = shop1;
      break;
      case 'house1':
        img = house1;
      break;
      default: img = '';
    }
  }

  return(
    <>
      <div>
        {img === ''?
        <></>:
        <img
           width= "50"
           height= "50"
           src= {img}
           onMouseEnter= {hovering}
           alt= "shop"/>}
       </div>
    </>
  );
};

export default Block;

/*
users= users.filter(function(item) {
  for (var key in filter) {
    if (item[key] === undefined || item[key] != filter[key])
      return false;
  }
  return true;
});

console.log(users)
*/
