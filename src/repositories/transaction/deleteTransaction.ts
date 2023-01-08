import { prismaClient } from "../../database/connection";
import { respRepoNull } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function deleteTransaction(id: number): Promise<respRepoNull> {
  try {
    await prismaClient.transaction.delete({ where: { id } });
    return { status: true, query: null };
  } catch {
    return { status: false, query: null };
  }
}
