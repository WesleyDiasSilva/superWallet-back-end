import { prismaClient } from "../../database/connection";
import { respRepoNull } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface";
import { newCard } from "../../interfaces/servicesInterfaces/createCardInterface";

export async function createCard(card: newCard): Promise<respRepoNull> {
  try {
    const { type, surname, payment_day, last_four_digits, owner_id } = card;
    await prismaClient.cards.create({
      data: { type, surname, payment_day, last_four_digits, owner_id },
    });
    return { status: true, query: null };
  } catch {
    return { status: false, query: null };
  }
}
