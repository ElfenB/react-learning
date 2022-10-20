import { CardPrice } from './CardPrice';
import { CardType } from './Card.types';
import { Rating } from './Rating';

type Props = {
  card: CardType;
};

export function Card(props: Props) {
  return (
    <div className="card">
      <div>
        {props.card.openSpots !== undefined && (
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
