import { Cards } from "@prisma/client";
import { prismaClient } from "../../database/connection";
import { respRepoCard } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function findCardSurname(surname: string): Promise<respRepoCard> {
  try {
    const card = await prismaClient.cards.findFirst({ where: { surname } });
    return {status: true, query: card}
  } catch {
    return {status: false, query: null}
  }
}
