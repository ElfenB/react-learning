export function CardPrice(props: { value?: number }) {
  return (
    <div className="cardprice">
      <span className="pricetag">From ${props.value ? props.value.toFixed(0) : 0}</span>
      <span className="pricedesc"> / person</span>
    </div>
  );
}
