import star from './assets/star.svg';

type Props = {
  country?: string;
  reviews?: number;
  value?: number;
};

export function Rating({ country, reviews, value }: Props) {
  return (
    <div className="rating">
      <img alt="Star" src={star} />

      {value && <span className="stars">{value.toFixed(1)}</span>}

      <span className="reviews">{reviews ? ` (${reviews})` : 0}</span>

      {country && <span className="country">{` • ${country}`}</span>}
    </div>
  );
}
