import { prismaClient } from "../../database/connection";

export async function deleteSession(email: string) {
  try {
    await prismaClient.session.delete({ where: { email } });
    return { status: true, message: null };
  } catch {
    return { status: false, message: null };
  }
}
