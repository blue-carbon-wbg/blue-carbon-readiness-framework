import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/ibm-plex-sans";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Intro } from "./routes/Intro";
import App from "./routes/App";

import { NoActions } from "./routes/NoActions";
import { BCStep } from "./components/BCStep";
import { Pillar } from "./routes/Pillar";
import { Completed } from "./routes/Completed";
import { Fin } from "./routes/Fin";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/PdfVersion";

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
        path: "pdf",
        element: (
          <div style={{ height: "100vh", width: "100%", display: "flex" }}>
            <PDFViewer width="100%">
              <MyDocument />
            </PDFViewer>
          </div>
        ),
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
