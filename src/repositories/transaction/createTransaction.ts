import { Transaction } from "@prisma/client";
import dayjs from "dayjs";
import { prismaClient } from "../../database/connection";
import { responseDefault } from "../../interfaces/responseDefault";

export async function createTransaction(
  transaction: Transaction
): Promise<responseDefault> {
  try {
    const { value, description, type, fixed_variable, date, reason } =
      transaction;
    await prismaClient.transaction.create({
      data: { value, description, type, fixed_variable, date: new Date(date), reason, authorId: 1 },
    });
    return { status: true };
  } catch (err) {
    console.log(err)
    return { status: false };
  }
}
