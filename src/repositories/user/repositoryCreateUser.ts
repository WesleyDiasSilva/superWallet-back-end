import { prismaClient } from "../../database/connection";
import { newUser } from "../../interfaces/servicesInterfaces/createUserInterface";
import { responseDefault } from "../../interfaces/responseDefault";

interface responseCreateUser extends responseDefault {
  query: null;
}

export async function createUser(user: newUser): Promise<responseCreateUser> {
  try {
    const { email, name, password, image } = user;
    await prismaClient.user.create({ data: { email, password, name, image } });
    return { status: true, query: null };
  } catch (err) {
    console.log(err);
    return { status: false, query: null };
  }
}
