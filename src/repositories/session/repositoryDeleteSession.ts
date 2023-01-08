import { prismaClient } from "../../database/connection";
import { respRepoNull } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function deleteSession(email: string): Promise<respRepoNull> {
  try {
    await prismaClient.session.delete({ where: { email } });
    return { status: true, query: null };
  } catch {
    return { status: false, query: null };
  }
}
