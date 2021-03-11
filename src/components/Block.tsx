import React from 'react';
import shop from '../img/shop1.png';

const style = {
  backgroundColor: 'gray'
} as const;

interface CoordProps {
  x: number,
  y: number
}

const Block: React.FC<CoordProps> = ({x, y}: CoordProps) => {
  const hovering = () => {
    console.log('hovering ', x, y);
  };

  return(
    <>
      <div style= {style}>
        x{x} y{y}
        <img
           width= "50"
           height= "50"
           src= {shop}
           onMouseEnter= {hovering}
           alt= "shop"/>
       </div>
    </>
  );
};

export default Block;
