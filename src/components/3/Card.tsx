import CardPrice from './CardPrice'
import Rating from './Rating'

export default function Card(props: { card: card }) {
  return (
    <div className="card">
      <div>
        {props.card.openSpots !== undefined && (
          <div className="badge">
            {props.card.openSpots > 0 ? 'Available' : 'Sold out'}
          </div>
        )}
        <img src={props.card.img} alt="Katy" className="thumb" />
      </div>
      <Rating
        value={props.card.rating}
        reviews={props.card.reviews}
        country={props.card.country}
      />
      {props.card.description && (
        <span className="card-desc">{props.card.description}</span>
      )}
      <CardPrice value={props.card.price} />
    </div>
  )
}

export interface card {
  openSpots?: number | undefined
  img: string
  rating?: number | undefined
  reviews?: number | undefined
  country?: string | undefined
  description?: string | undefined
  price?: number | undefined
}
