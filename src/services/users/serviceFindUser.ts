import { respServiceQuery } from "../../interfaces/servicesInterfaces/responseServiceQueryInterface";
import { findUser } from "../../repositories/user/repositoryFindUser";

export async function serviceFindUser(email: string): Promise<respServiceQuery> {
  try {
    const {status, query} = await findUser(email);
    return { status: true, message: query as any };
  } catch {
    return { status: false, message: [{}] };
  }
}
