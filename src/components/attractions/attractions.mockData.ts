import shop from './assets/shop.jpg';
import tenzies from './assets/tenzies.jpg';
import dishes from './assets/dishes.jpg';
import learn from './assets/learn.jpg';

import { LinkItem } from './attractions.types';

export const links: LinkItem[] = [
  { description: 'Fun game to play with your colleagues.', image: tenzies, name: 'Tenzies Game', to: '/eight' },
  { description: 'Shop online for stunningly low prices.', image: shop, name: 'Redux Shop', to: '/ten' },
  { description: 'Explore lovely dishes grandma used to make.', image: dishes, name: 'Dishes Explorer', to: '/eleven' },
  { description: 'See navigation for complete learning path.', image: learn, name: 'Learning path', to: '/all' },
];
