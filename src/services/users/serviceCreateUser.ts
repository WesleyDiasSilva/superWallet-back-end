import { newUser } from "../../interfaces/servicesInterfaces/createUserInterface";
import { createUser } from "../../repositories/user/repositoryCreateUser";
import bcrypt from "bcrypt";
import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { findUser } from "../../repositories/user/repositoryFindUser";
import { serviceSendEmail } from "../email/serviceSendEmail";

export async function serviceCreateUser(user: newUser): Promise<respService> {
  try {
    const userFound = await findUser(user.email);
    if (userFound.message) {
      return { status: false, message: "E-mail already registred!" };
    }
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    const { status } = await createUser(user);
    if (status) {
      await serviceSendEmail(user.name, user.email)
      return { status: true, message: "a new user created!" };
    }
    return { status: false, message: "create user not authorizated!" };
  } catch {
    return { status: false, message: "error, try again later!" };
  }
}
