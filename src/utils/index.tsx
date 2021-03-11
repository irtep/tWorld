export function create(rows: number, columns: number): Array<Array<number>> {
  const world = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(0)
    }
    world.push(row)
  }
  return world;
}
