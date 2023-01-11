import { prismaClient } from "../../database/connection";
import { respRepoNull } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function createGoal(
  type: string,
  name: string,
  value: number,
  owner_id: number
): Promise<respRepoNull> {
  try {
    await prismaClient.goals.create({ data: { type, name, value: value * 100, owner_id } });
    return { status: true, query: null };
  } catch (err){
    console.log(err)
    return { status: false, query: null };
  }
}
