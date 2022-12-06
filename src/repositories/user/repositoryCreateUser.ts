import { prismaClient } from "../../database/connection";
import { newUser } from "../../interfaces/servicesInterfaces/createUserInterface";
import { responseDefault } from "../../interfaces/responseDefault";

interface responseCreateUser extends responseDefault {
  message: null;
}

export async function createUser(user: newUser): Promise<responseCreateUser> {
  try {
    const { email, name, password, image } = user;
    await prismaClient.user.create({ data: { email, password, name, image } });
    return { status: true, message: null };
  } catch (err) {
    console.log(err);
    return { status: false, message: null };
  }
}
