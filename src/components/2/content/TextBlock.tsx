export function TextBlock(props: { children: string; title: string }) {
  return (
    <div className="text-block">
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
}
