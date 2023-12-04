import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./views/Login.jsx";
import Cadastro from "./views/Cadastro.jsx";
import AdminHome from "./views/Admin/AdminHome.jsx";
import AlunoHome from "./views/Aluno/AlunoHome.jsx";
import AdminLivros from "./views/Admin/AdminLivros.jsx";

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
