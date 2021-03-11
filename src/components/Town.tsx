import React from 'react';
import Block from './Block';
import { create } from '../utils';


const Town: React.FC = () => {
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
  );
};

export default Town;
