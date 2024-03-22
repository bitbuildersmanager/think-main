import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main";
import { ErrorPage } from "../pages/error";
import { SelectGoalPage } from "../pages/select-goal";
import { TaskPage } from "src/pages/task";
import { store } from "./store";
import { Provider } from "react-redux";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/think-main",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/think-main/select-goal",
    element: <SelectGoalPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/think-main/task",
    element: <TaskPage />,
    errorElement: <ErrorPage />,
  },
]);

const appendTelegramScript = () => {
  const script = document.createElement("script");
  script.src = "https://telegram.org/js/telegram-web-app.js";
  script.async = true;
  document.body.appendChild(script);
};

const checkTelegramUser = () => {
  const tg = window.Telegram?.WebApp;
  if (!tg) {
    window.location.href = "https://t.me/ThinkAppBot";
  }
};

export const App = () => {
  // useEffect(() => {
  //   if (process.env.NODE_ENV === "production") {
  //     appendTelegramScript();
  //     checkTelegramUser();
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
