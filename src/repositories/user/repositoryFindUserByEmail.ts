import { prismaClient } from "../../database/connection";
import { respRepoUser } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function findUserByEmail(email: string): Promise<respRepoUser> {
  try {
    const user = await prismaClient.user.findFirst({ where: { email } });
    return { status: true, query: user };
  } catch {
    return { status: false, query: null };
  }
}
