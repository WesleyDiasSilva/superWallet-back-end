import { prismaClient } from "../../database/connection";
import { bodyTransaction } from "../../interfaces/bodyUpdateTransaction";
import { respRepoNull } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";

export async function updateTransaction(
  id: number,
  bodyTransaction: bodyTransaction
): Promise<respRepoNull> {
  const { date, description, fixed_variable, reason, type, value } =
    bodyTransaction;
  try {
    await prismaClient.transaction.update({
      where: { id },
      data: {
        date: new Date(date),
        description,
        fixed_variable,
        reason,
        type,
        value,
      },
    });
    return { status: true, query: null };
  } catch (err){
    console.log(err)
    return { status: false, query: null };
  }
}
