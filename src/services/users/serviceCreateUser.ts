import bcrypt from "bcrypt";
import { newUser } from "../../interfaces/servicesInterfaces/createUserInterface";
import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { createUser } from "../../repositories/user/repositoryCreateUser";
import { serviceSendEmail } from "../email/serviceSendEmail";
import { serviceFindUserByEmail } from "./serviceFindUserByEmail";

export async function serviceCreateUser(user: newUser): Promise<respService> {
  try {
    const { status, message } = await serviceFindUserByEmail(user.email);
    if (!status) return { status: false, message };
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    const createdUser = await createUser(user);
    if (createdUser.status) {
      await serviceSendEmail(user.name, user.email);
      return { status: true, message: "a new user created!" };
    }
    return { status: false, message: "create user not authorizated!" };
  } catch {
    return { status: false, message: "error, try again later!" };
  }
}
