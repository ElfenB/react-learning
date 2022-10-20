import { Card } from './Card';
import { CardType } from './Card.types';

export function Cards(props: { data: CardType[] }) {
  return (
    <section className="cards">
      {props.data.map((c) => (
        <Card key={c.img} card={c} />
      ))}
    </section>
  );
}
