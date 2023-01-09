import { newCard } from "../../interfaces/servicesInterfaces/createCardInterface";
import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { createCard } from "../../repositories/cards/createCard";
import { serviceValidCard } from "./serviceFindCardBySurname";

export async function serviceCreateCard(card: newCard): Promise<respService>{
  try{
    const cardFound = await serviceValidCard(card.surname, card.owner_id)
    if(!cardFound.status){
      return {status: false, message: "Card already registered!"}
    }
    const {status} = await createCard(card)
    if(status) return {status: true, message: "Your card is created!"}
    return {status: false, message: "Could not create card, please try again later!"}
  }catch{
    return {status: false, message: "Could not create card, please try again later!"}
}
}