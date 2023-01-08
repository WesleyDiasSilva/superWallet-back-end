import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { deleteSession } from "../../repositories/session/repositoryDeleteSession";

export async function serviceDeleteSession(email: string): Promise<respService> {
  try {
    await deleteSession(email);
    return { status: true, message: '' };
  } catch {
    return { status: false, message: '' };
  }
}
