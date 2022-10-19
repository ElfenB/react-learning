type Props = { children: string; title: string };

export function TextBlock(props: Props) {
  return (
    <div className="text-block">
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
}
