import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./views/Login.jsx";
import Cadastro from "./views/Cadastro.jsx";
import AdminHome from "./views/AdminHome.jsx";
import AlunoHome from "./views/AlunoHome.jsx";
import AdminLivros from "./views/AdminLivros.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/admin/home",
    element: <AdminHome />,
  },
  {
    path: "/home",
    element: <AlunoHome />,
  },
  {
    path: "/admin/livros",
    element: <AdminLivros />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
