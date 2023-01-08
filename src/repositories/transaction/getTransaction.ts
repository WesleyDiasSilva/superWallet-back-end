import { prismaClient } from "../../database/connection";

export async function getTransaction(id: number) {
  try {
    const transactions = await prismaClient.transaction.findMany({
      where: { authorId: id },
    });
    return { status: true, query: transactions };
  } catch {
    return { status: false, query: null };
  }
}
