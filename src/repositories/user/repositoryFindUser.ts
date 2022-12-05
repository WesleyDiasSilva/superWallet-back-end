import { User } from "@prisma/client";
import { prismaClient } from "../../database/connection";
import { responseRepositoryAndService } from "../../interfaces/responseInterface";

interface findUser extends responseRepositoryAndService {
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
