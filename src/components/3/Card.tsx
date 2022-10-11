import CardPrice from './CardPrice'
import Rating from './Rating'

export default function Card(props: {
  badge?: string | undefined
  img: string
  rating?: number | undefined
  reviews?: number | undefined
  country?: string | undefined
  description?: string | undefined
  price?: number | undefined
}) {
  return (
    <div className="card">
      <div>
        {props.badge && <div className="badge">{props.badge}</div>}
        <img src={props.img} alt="Katy" className="thumb" />
      </div>
      <Rating
        value={props.rating}
        reviews={props.reviews}
        country={props.country}
      />
      {props.description && (
        <span className="card-desc">{props.description}</span>
      )}
      <CardPrice value={props.price} />
    </div>
  )
}
