import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./views/Login.jsx";
import Cadastro from "./views/Cadastro.jsx";
import AdminHome from "./views/Admin/Home.jsx";
import AdminLivros from "./views/Admin/Livros.jsx";
import AdminAlunos from "./views/Admin/Alunos.jsx";
import AdminEmprestimos from "./views/Admin/Emprestimos.jsx";
import MultasAtivas from "./views/Admin/MultasAtivas.jsx";
import AlunoHome from "./views/Aluno/Home.jsx";
import AlunoLivros from "./views/Aluno/Livros.jsx";
import AlunoEmprestimos from "./views/Aluno/Emprestimos.jsx";
import AdicionarLivro from "./views/Admin/AdicionarLivro.jsx";
import CadastrarEmprestimos from "./views/Admin/CadastrarEmprestimos.jsx";
import EditarLivro from "./views/Admin/EditarLivro.jsx";
import EditarEmprestimo from "./views/Admin/EditarEmprestimo.jsx";
import EditarMulta from "./views/Admin/EditarMulta.jsx";

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
    path: "/admin",
    element: <AdminHome />,
  },
  {
    path: "/admin/livros",
    element: <AdminLivros />,
  },
  {
    path: "/admin/alunos",
    element: <AdminAlunos />,
  },
  {
    path: "/admin/emprestimos",
    element: <AdminEmprestimos />,
  },
  {
    path: "/admin/multas",
    element: <MultasAtivas />,
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
  {
    path: "/admin/livros/add",
    element: <AdicionarLivro />,
  },
  {
    path: "/admin/livros/update/:id",
    element: <EditarLivro />,
  },
  {
    path: "/admin/emprestimos/cadastrar",
    element: <CadastrarEmprestimos />,
  },
  {
    path: "admin/emprestimos/update/:id",
    element: <EditarEmprestimo />,
  },
  {
    path: "admin/multas/update/:id",
    element: <EditarMulta />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
