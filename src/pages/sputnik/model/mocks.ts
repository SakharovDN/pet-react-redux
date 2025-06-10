import { Product } from './types';

const IMAGE_URL_1 =
  'https://www.adobe.com/il_en/creativecloud/photography/discover/media_143a8f6f465ad139eaf4520156450f78cacd69123.png?width=750&format=png&optimize=medium';

const IMAGE_URL_2 =
  'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww';

export const products: Product[] = [
  {
    id: '1',
    title: 'Product 1 with a very very long title',
    price: 100,
    origin: 'Origin 1',
    imageUrl: IMAGE_URL_1,
    currency: 'RUB',
  },
  {
    id: '2',
    title: 'Product 2',
    price: 200,
    origin: 'Origin 2',
    imageUrl: IMAGE_URL_2,
    currency: 'USD',
  },
  {
    id: '3',
    title: 'Product 3',
    price: 300,
    origin: 'Origin 3',
    imageUrl: IMAGE_URL_1,
    currency: 'EUR',
  },
  {
    id: '4',
    title: 'Product 4',
    price: 400,
    origin: 'Origin 4',
    imageUrl: IMAGE_URL_2,
    currency: 'USD',
  },
];
