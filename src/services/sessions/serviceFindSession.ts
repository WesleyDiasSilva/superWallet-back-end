import { findSession } from "../../repositories/session/repositoryFindSession";

export async function serviceFindSession(email: string) {
  try {
    const session = await findSession(email);
    if (!session.message) {
      return { status: false, message: null };
    }
    return { status: true, message: session };
  } catch {
    return { status: false, message: null };
  }
}
