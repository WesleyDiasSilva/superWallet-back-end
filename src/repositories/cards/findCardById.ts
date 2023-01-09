import { prismaClient } from "../../database/connection";
import { respRepoCard } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function findCardById(id: number): Promise<respRepoCard> {
  try {
    const card = await prismaClient.cards.findFirst({ where: { id } });
    return { status: true, query: card };
  } catch {
    return { status: false, query: null };
  }
}
