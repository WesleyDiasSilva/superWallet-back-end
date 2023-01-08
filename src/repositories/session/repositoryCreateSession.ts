import { prismaClient } from "../../database/connection";
import { respRepoNull } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

interface sessionForCreate {
  email: string;
  token: string;
}

export async function createSession(user: sessionForCreate): Promise<respRepoNull> {
  try {
    await prismaClient.session.create({
      data: { email: user.email, token: user.token },
    });
    return { status: true, query: null };
  } catch {
    return { status: false, query: null };
  }
}
