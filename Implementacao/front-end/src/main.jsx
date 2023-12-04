import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./views/Login.jsx";
import Cadastro from "./views/Cadastro.jsx";
import AdminHome from "./views/Admin/AdminHome.jsx";
import AlunoHome from "./views/Aluno/AlunoHome.jsx";
import AdminLivros from "./views/Admin/AdminLivros.jsx";
import AlunoLivros from "./views/Aluno/AlunoLivros.jsx";
import AlunoEmprestimos from "./views/Aluno/AlunoEmprestimos.jsx";

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
    path: "/admin/livros",
    element: <AdminLivros />,
  },
  {
    path: "/home",
    element: <AlunoHome />,
  },
  {
    path: "/livros",
    element: <AlunoLivros />,
  },
  {
    path: "/emprestimos",
    element: <AlunoEmprestimos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
