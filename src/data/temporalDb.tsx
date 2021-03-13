import { User } from '../types/types';
/*
export const blocks = [

];
*/
export const users: User[] = [
  {name: 'Hulk Hogan',
  home: {
    block: 'Pupuhuhta',
    coords: {x: 0, y: 0},
    img: 'shop1'
  },
  credits: 5,
  email: 'hulk@gmail.com',
  favorites: [],
  externalMsg: 'hi all!',
  business: false
  },
    {name: 'Triple H',
    home: {
      block: 'Pupuhuhta',
      coords: {x: 0, y: 2},
      img: 'house1'
    },
    credits: 5,
    email: 'triple@gmail.com',
    favorites: [],
    externalMsg: 'i am the game!',
    business: false
  },
    {name: 'Trident Finland',
    home: {
      block: 'Keskusta',
      coords: {x: 1, y: 2},
      img: 'shop1'
    },
    credits: 5,
    email: 'trident-finland@gmail.com',
    favorites: ['www.trident-finland.fi'],
    externalMsg: 'we are open for business',
    business: true
  },
];

// what block needs?
/*
 or maybe there is a different that is user list and when these are run they check if something should be there
*/
/*
name
desc
rows
colums
price.... or how should the merchandise be?
owner
forSale
building
*/
