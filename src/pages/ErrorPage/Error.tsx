import React from 'react';
import { useRouteError } from 'react-router-dom';

interface RouteError extends Error {
  statusText?: string;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (!error) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }

  const routeError = error as RouteError;
  console.error(routeError);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{routeError.statusText || routeError.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
