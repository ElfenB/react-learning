import Card, { card } from './Card'

export default function Cards(props: { data: card[] }) {
  return (
    <section className="cards">
      {props.data.map((c) => {
        return <Card card={c} />
      })}
    </section>
  )
}
