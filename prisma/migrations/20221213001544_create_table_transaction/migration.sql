-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "fixed_variable" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "reason" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Transaction_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
