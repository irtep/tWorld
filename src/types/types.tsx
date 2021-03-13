export interface User {
  name: string,
  home: {
    block: string,
    coords: {x: number, y: number},
    img: string
  },
  credits: number,
  email: string,
  favorites: Array<string>,
  externalMsg: string,
  business: boolean
};

export interface CoordProps {
  x: number,
  y: number,
  owners: Array<User>
};
