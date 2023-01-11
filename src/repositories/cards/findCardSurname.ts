import { prismaClient } from "../../database/connection";
import { respRepoCards } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function findCardSurname(surname: string): Promise<respRepoCards> {
  try {
    const card = await prismaClient.cards.findMany({ where: { surname } });
    return {status: true, query: card}
  } catch {
    return {status: false, query: null}
  }
}
