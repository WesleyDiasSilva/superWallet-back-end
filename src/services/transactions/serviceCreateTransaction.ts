import { Transaction } from "@prisma/client";
import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { createTransaction } from "../../repositories/transaction/createTransaction";

export async function serviceCreateTransaction(
  transaction: Transaction
): Promise<respService> {
  try {
    transaction.value = transaction.value * 100;
    const responseRepository = await createTransaction(transaction);
    return { status: true, message: "created" };
  } catch {
    return { status: false, message: "error" };
  }
}
