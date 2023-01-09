import { prismaClient } from "../../database/connection";
import { respRepoNull } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function deleteCard(id: number): Promise<respRepoNull> {
  try {
    await prismaClient.cards.delete({ where: { id } });
    return { status: true, query: null };
  } catch {
    return { status: false, query: null };
  }
}
