type Props = { value?: number };

export function CardPrice({ value }: Props) {
  return (
    <div className="cardprice">
      <span className="pricetag">From ${value?.toFixed(0) ?? 0}</span>
      <span className="pricedesc"> / person</span>
    </div>
  );
}
