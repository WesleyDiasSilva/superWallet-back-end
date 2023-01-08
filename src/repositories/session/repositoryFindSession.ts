import { Session } from "@prisma/client";
import { prismaClient } from "../../database/connection";
import { responseDefault } from "../../interfaces/responseDefault";

interface respFindSession extends responseDefault {
  query: Session | null;
}

export async function findSession(email: string): Promise<respFindSession> {
  try {
    const session = await prismaClient.session.findFirst({ where: { email } });
    return { status: true, query: session };
  } catch {
    return {
      status: false,
      query: null,
    };
  }
}
