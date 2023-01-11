import { Cards, Transaction, User } from "@prisma/client";
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

export interface respRepoUser extends responseDefault {
  query: User | null;
}

export interface respRepoCard extends responseDefault {
  query: Cards | null;
}

export interface respRepoCards extends responseDefault {
  query: Cards[] | null;
}