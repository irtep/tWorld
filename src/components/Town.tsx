import React from 'react';
import Block from './Block';
import { create } from '../utils';
import { users } from '../data/temporalDb';

interface Towns {
  name: string
}

const Town: React.FC<Towns> = ({name}: Towns) => {
  // these indicators would come from db from town infos
  const rows = 5;
  const columns = 5;
  const blockSize = 70;
  const city = create(rows, columns);
  const ownersInTown = users.filter( user => user.home.block === name);

  const mStyle = {
    top: 0,
    left: 0,
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, ${blockSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${blockSize}px)`,
    textAlign: "center"
  } as const;

  return(
    <>
    <div>
      <div style= {mStyle}>
         {city.map( (row: Array<number>, y: number) =>
           row.map( (_block, x: number) =>
             <Block
               key= {x + y}
               x = {x}
               y = {y}
               owners = {ownersInTown}/>
            )
         )}
      </div>
    </div>
    </>
  );
};

export default Town;
