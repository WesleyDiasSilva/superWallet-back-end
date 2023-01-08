import { respServiceQuery } from "../../interfaces/servicesInterfaces/responseServiceQueryInterface";
import { findTransaction } from "../../repositories/transaction/findTransaction";

export async function serviceFindTransaction(
  id: number
): Promise<respServiceQuery> {
  try {
    const { status, query } = await findTransaction(id);
    if (status) return { status: true, message: [query] as object[] };
    return { status: false, message: [{}] };
  } catch {
    return { status: false, message: [{}] };
  }
}
