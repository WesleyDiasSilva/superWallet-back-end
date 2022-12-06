import { findUser } from "../../repositories/user/repositoryFindUser";

export async function serviceFindUser(email: string) {
  try {
    const user = await findUser(email);
    return { status: true, message: user.message };
  } catch {
    return { status: false, message: null };
  }
}
