import { prismaClient } from "../../database/connection";

interface sessionForCreate {
  email: string;
  token: string;
}

export async function createSession(user: sessionForCreate) {
  try {
    await prismaClient.session.create({
      data: { email: user.email, token: user.token },
    });
    return { status: true, message: null };
  } catch {
    return { status: false, message: null };
  }
}
