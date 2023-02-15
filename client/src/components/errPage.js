import React from "react";
import {useRouteError} from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="err-page">
      <h1>404 We can't find the page!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
