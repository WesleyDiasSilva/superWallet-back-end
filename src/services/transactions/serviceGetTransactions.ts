import { respServiceQuery } from "../../interfaces/servicesInterfaces/responseServiceQueryInterface";
import { getTransaction } from "../../repositories/transaction/getTransaction";

export async function serviceGetTransactions(
  id: number
): Promise<respServiceQuery> {
  try {
    const { status, query } = await getTransaction(id);
    if (status) {
      return { status: true, message: query as object[] };
    }
    return { status: false, message: [{}] };
  } catch {
    return { status: false, message: [{}] };
  }
}
