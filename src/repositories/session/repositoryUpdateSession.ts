import { prismaClient } from "../../database/connection";
import { respRepoNull } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

interface sessionForUpdate {
  email: string;
  token: string;
}

export async function updateSession(user: sessionForUpdate): Promise<respRepoNull> {
  try {
    await prismaClient.session.update({
      data: { token: user.token },
      where: { email: user.email },
    });
    return { status: true, query: null };
  } catch {
    return { status: false, query: null };
  }
}
