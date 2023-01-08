import { respServiceQuery } from "../../interfaces/servicesInterfaces/responseServiceQueryInterface";
import { findSession } from "../../repositories/session/repositoryFindSession";

export async function serviceFindSession(email: string): Promise<respServiceQuery> {
  try {
    const session = await findSession(email);
    if (!session.query) {
      return { status: false, message: [{}] };
    }
    return { status: true, message: [session] };
  } catch {
    return { status: false, message: [{}] };
  }
}
