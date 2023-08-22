import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as { message: string; status: string; statusText: string };
  console.error(error);

  return (
    <div>
      <h1>ErrorPage works!</h1>
      <p>You are seeing this because some error ocurred.</p>
      <p>
        <i>
          {error.status} - {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
