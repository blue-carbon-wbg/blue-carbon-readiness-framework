import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/inter";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Intro } from "./routes/Intro";
import App from "./routes/App";

import { NoActions } from "./routes/NoActions";
import { BCStep } from "./components/BCStep";
import { Pillar } from "./routes/Pillar";
import { Completed } from "./routes/Completed";
import { Fin } from "./routes/Fin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
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
        path: "fin",
        element: <Fin />,
      },
      {
        path: "p/:pillar",
        element: <Pillar />,
        children: [
          { path: "done", element: <Completed /> },
          { path: "s/:step", element: <BCStep /> },
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
