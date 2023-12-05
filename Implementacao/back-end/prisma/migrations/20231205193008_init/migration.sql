/*
  Warnings:

  - Added the required column `dataDevolucao` to the `Emprestimo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Emprestimo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idAluno" INTEGER NOT NULL,
    "idLivro" INTEGER NOT NULL,
    "dataEmprestimo" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataDevolucao" DATETIME NOT NULL,
    CONSTRAINT "Emprestimo_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Emprestimo_idLivro_fkey" FOREIGN KEY ("idLivro") REFERENCES "Livro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Emprestimo" ("id", "idAluno", "idLivro") SELECT "id", "idAluno", "idLivro" FROM "Emprestimo";
DROP TABLE "Emprestimo";
ALTER TABLE "new_Emprestimo" RENAME TO "Emprestimo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
