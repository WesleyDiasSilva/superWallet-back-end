import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { deleteGoal } from "../../repositories/goals/deleteGoal";
import { findGoal } from "../../repositories/goals/findGoal";

export async function serviceDeleteGoal(
  goal_id: number,
  user_id: number
): Promise<respService> {
  try {
    const foundGoal = await findGoal(goal_id);
    if (!foundGoal.status) return { status: false, message: "try again!" };
    if (foundGoal.query?.owner_id !== user_id) return { status: false, message: "not authorizated!" };
    const { status } = await deleteGoal(goal_id);
    if (status)
      return { status: true, message: "Your goal was deleted with success!" };
    return { status: false, message: "try again!" };
  } catch {
    return { status: false, message: "try again!" };
  }
}
