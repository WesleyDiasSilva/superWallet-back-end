import { prismaClient } from "../../database/connection";

interface sessionForUpdate {
  email: string;
  token: string;
}

export async function updateSession(user: sessionForUpdate) {
  try {
    await prismaClient.session.update({
      data: { token: user.token },
      where: { email: user.email },
    });
    return { status: true, message: null };
  } catch {
    return { status: false, message: null };
  }
}
