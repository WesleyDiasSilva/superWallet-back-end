import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { deleteTransaction } from "../../repositories/transaction/deleteTransaction";

export async function serviceDeleteTransaction(
  id: number
): Promise<respService> {
  try {
    const { status } = await deleteTransaction(id);
    if (status) return { status: true, message: "Transaction deletada!" };
    return { status: false, message: "Erro ao deletar a transaction!" };
  } catch {
    return { status: false, message: "Erro ao deletar a transaction!" };
  }
}
