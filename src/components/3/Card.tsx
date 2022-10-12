import CardPrice from './CardPrice'
import Rating from './Rating'

export default function Card(props: { card: card }) {
  return (
    <div className="card">
      <div>
        {props.card.badge && <div className="badge">{props.card.badge}</div>}
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
  badge?: string | undefined
  img: string
  rating?: number | undefined
  reviews?: number | undefined
  country?: string | undefined
  description?: string | undefined
  price?: number | undefined
}
