import { Transaction } from "@prisma/client";
import { responseDefault } from "../responseDefault";

export interface respRepoNull extends responseDefault {
  query: null;
}

export interface respRepoTransaction extends responseDefault {
  query: Transaction | null;
}

export interface respRepoTransactions extends responseDefault {
  query: Transaction[] | null
}