import { respServiceQuery } from "../../interfaces/servicesInterfaces/responseServiceQueryInterface";
import { getGoals } from "../../repositories/goals/getGoals";

export async function serviceGetGoals(
  user_id: number
): Promise<respServiceQuery> {
  try {
    const { status, query } = await getGoals(user_id);
    if (!status) return { status: false, message: [{}] };
    return { status: false, message: query as object[] };
  } catch {
    return { status: false, message: [{}] };
  }
}
