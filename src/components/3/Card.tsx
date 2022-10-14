import { CardPrice } from './CardPrice';
import { Rating } from './Rating';

export function Card(props: { card: Card }) {
  return (
    <div className="card">
      <div>
        {props.card.openSpots && (
          <div className="badge">{props.card.openSpots > 0 ? 'Available' : 'Sold out'}</div>
        )}
        <img alt="Katy" className="thumb" src={props.card.img} />
      </div>
      
      <Rating country={props.card.country} reviews={props.card.reviews} value={props.card.rating} />
      {props.card.description && <span className="card-desc">{props.card.description}</span>}
      <CardPrice value={props.card.price} />
    </div>
  );
}

export type Card = {
  country?: string;
  description?: string;
  img: string;
  openSpots?: number;
  price?: number;
  rating?: number;
  reviews?: number;
}
