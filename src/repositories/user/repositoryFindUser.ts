import { User } from "@prisma/client";
import { prismaClient } from "../../database/connection";
import { responseDefault } from "../../interfaces/responseDefault";

interface findUser extends responseDefault {
  message: User | null;
}

export async function findUser(email: string): Promise<findUser> {
  try {
    const user = await prismaClient.user.findFirst({ where: { email } });
    return { status: true, message: user };
  } catch {
    return { status: false, message: null };
  }
}
