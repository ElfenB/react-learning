export function TextBlock(props: { children: string | undefined; title: string | undefined }) {
  return (
    <div className="text-block">
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
}
