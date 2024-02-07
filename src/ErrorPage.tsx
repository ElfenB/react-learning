import { useMemo } from 'react';
import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const statusCode = useMemo(() => {
    if (error instanceof Response) {
      return error.status;
    }
    return 'unknown status code';
  }, [error]);

  const statusText = useMemo(() => {
    if (error instanceof Response) {
      return error.statusText;
    }
    return 'Internal Error - does this route exist?';
  }, [error]);

  const errorMessage = useMemo(() => {
    if (error instanceof Error) {
      return error.message;
    }
    return 'An unknown error occurred';
  }, [error]);

  return (
    <div>
      <h1>ErrorPage works!</h1>
      <p>You are seeing this because some error ocurred.</p>
      <p>
        <i>
          {statusCode} - {statusText || errorMessage}
        </i>
      </p>
    </div>
  );
}
