import { Transaction } from "@prisma/client";
import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { createTransaction } from "../../repositories/transaction/createTransaction";

export async function serviceCreateTransaction(
  transaction: Transaction
): Promise<respService> {
  try {
    transaction.value = transaction.value * 100;
    const { status } = await createTransaction(transaction);
    if (status) return { status: true, message: "created" };
    return { status: false, message: "error" };
  } catch {
    return { status: false, message: "error" };
  }
}
