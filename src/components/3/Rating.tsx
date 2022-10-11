import star from './assets/star.svg'

export default function Rating(props: {
  value?: number | undefined
  reviews?: number | undefined
  country?: string | undefined
}) {
  return (
    <div className="rating">
      <img src={star} alt="Star" />
      {props.value && <span className="stars">{props.value?.toFixed(1)}</span>}
      <span className="reviews">
        {props.reviews ? ' (' + props.reviews + ')' : 0}
      </span>
      {props.country && (
        <span className="country">{' • ' + props.country}</span>
      )}
    </div>
  )
}
