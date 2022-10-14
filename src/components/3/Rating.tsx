import star from './assets/star.svg';

export function Rating(props: {
  country?: string | undefined;
  reviews?: number | undefined;
  value?: number | undefined;
}) {
  return (
    <div className="rating">
      <img alt="Star" src={star} />
      {props.value && <span className="stars">{props.value?.toFixed(1)}</span>}
      <span className="reviews">{props.reviews ? ' (' + props.reviews + ')' : 0}</span>
      {props.country && <span className="country">{' • ' + props.country}</span>}
    </div>
  );
}
