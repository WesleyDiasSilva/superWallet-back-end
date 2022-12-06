import { deleteSession } from "../../repositories/session/repositoryDeleteSession";

export async function serviceDeleteSession(email: string) {
  try {
    await deleteSession(email);
    return { status: true, message: null };
  } catch {
    return { status: false, message: null };
  }
}
