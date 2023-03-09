export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: ['uno.jpg']
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    images: ['dos.jpeg']
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A great phone with one of the best cameras',
    images: ['tres.jpeg']
  },
  {
    id: 4,
    name: 'Motorola',
    price: 900,
    description: 'Moto A 34fkfdklfjdkfkl',
    images: ['cuatro.jpeg']
  },
  {
    id: 4,
    name: 'Samsung Galaxy',
    price: 800,
    description: 'Galaxy A21 tercera generacion',
    images: ['cinco.jpeg']
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/