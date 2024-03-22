import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Упс!</h1>
      <p>Кажется, такой страницы не существует.</p>
    </div>
  );
};
