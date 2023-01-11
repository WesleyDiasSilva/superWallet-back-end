import { prismaClient } from "../../database/connection";
import { respRepoGoal } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function findGoal(id: number): Promise<respRepoGoal> {
  try {
    const query = await prismaClient.goals.findFirst({ where: { id } });
    return { status: true, query };
  } catch {
    return { status: false, query: null };
  }
}
