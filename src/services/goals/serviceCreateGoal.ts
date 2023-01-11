import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { createGoal } from "../../repositories/goals/createGoal";

export async function serviceCreateGoal(
  type: string,
  name: string,
  value: number,
  owner_id: number
): Promise<respService> {
  try {
    const {status} = await createGoal(type, name, value, owner_id)
    if(status) return { status: true, message: "Your goal was created with success!" };
    return { status: false, message: "Try again!" };
  } catch {
    return { status: false, message: "Try again!" };
  }
}
