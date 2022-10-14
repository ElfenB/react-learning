import { Card, card } from './Card';

export function Cards(props: { data: card[] }) {
  return (
    <section className="cards">
      {props.data.map((c) => (
        <Card key={c.img} card={c} />
      ))}
    </section>
  );
}
