import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthContextProvider from "./providers/AuthContextProvider";
import PublicRouter from "./routes/PublicRouter";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={PublicRouter}></RouterProvider>
      <Toaster />
    </AuthContextProvider>
  </StrictMode>,
);
