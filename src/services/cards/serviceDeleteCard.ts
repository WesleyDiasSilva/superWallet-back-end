import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { deleteCard } from "../../repositories/cards/deleteCard";
import { findCardById } from "../../repositories/cards/findCardById";

export async function serviceDeleteCard(
  user_id: number,
  card_id: number
): Promise<respService> {
  try {
    const card = await findCardById(card_id);
    if (!card.status) return { status: false, message: "Try again later!" };
    if(!card.query) return {status: false, message: "Card not found!"}
    if(card.query.owner_id !== user_id) return {status: false, message: "Not authorized"}
    const {status} = await deleteCard(card_id)
    if(status) return {status: true, message: "Your card has been deleted!"}
    return { status: false, message: "Try again later!" };
  } catch {
    return { status: false, message: "error" };
  }
}
