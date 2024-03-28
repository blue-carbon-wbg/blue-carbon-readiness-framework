import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/inter";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Intro } from "./routes/Intro";
import App from "./routes/App";

import { Pillar1a } from "./routes/Pillar1a";
import { NoActions } from "./routes/NoActions";
import { BCStep } from "./components/BCStep";
import { P1Complete } from "./routes/Pillar1a/P1Complete";
import { Pillar1b } from "./routes/Pillar1b";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Intro />,
      },
      {
        path: "none",
        element: <NoActions />,
      },
      {
        path: "1a?",
        element: <Pillar1a />,
        children: [
          {
            path: "s/:step?",
            element: <BCStep pillar="1a/s" />,
          },
          { path: "done", element: <P1Complete /> },
        ],
      },
      {
        path: "1b?",
        element: <Pillar1b />,
        children: [
          {
            path: "s/:step?",
            element: <BCStep pillar="1b/s" />,
          },
          { path: "done", element: <P1Complete /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
