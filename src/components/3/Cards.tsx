import { Card, Card } from './Card';

export function Cards(props: { data: Card[] }) {
  return (
    <section className="cards">
      {props.data.map((c) => (
        <Card key={c.img} card={c} />
      ))}
    </section>
  );
}
