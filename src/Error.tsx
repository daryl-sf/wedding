import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error instanceof Error && (
        <p>
          <i>{error.message}</i>
        </p>
      )}
      {error instanceof Response && (
        <p>
          <i>{error.statusText}</i>
        </p>
      )}
    </div>
  );
}
