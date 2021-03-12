import React from 'react';
import Block from './Block';
import { create } from '../utils';

interface Towns {
  name: string
}

const Town: React.FC<Towns> = ({name}: Towns) => {
  const rows = 5;
  const columns = 5;
  const blockSize = 70;
  const city = create(rows, columns);

  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, ${blockSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${blockSize}px)`,
    textAlign: "center"
  } as const;

  return(
    <div>
      <p className= "townName">
      {name}
      </p>
      <div style= {style}>
         {city.map( (row: Array<number>, y: number) =>
           row.map( (_block, x: number) =>
             <Block
               key= {x + y}
               x = {x}
               y = {y}/>
            )
         )}
      </div>
    </div>
  );
};

export default Town;
