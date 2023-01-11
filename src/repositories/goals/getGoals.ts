import { prismaClient } from "../../database/connection";
import { respRepoGoals } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function getGoals(owner_id: number): Promise<respRepoGoals> {
  try {
    const query = await prismaClient.goals.findMany({ where: { owner_id } });
    return { status: true, query };
  } catch {
    return { status: false, query: null };
  }
}
