import { respServiceQuery } from "../../interfaces/servicesInterfaces/responseServiceQueryInterface";
import { findCardSurname } from "../../repositories/cards/findCardSurname";

export async function serviceValidCard(
  surname: string,
  owner_id: number
): Promise<respServiceQuery> {
  try {
    const { query } = await findCardSurname(surname);
    console.log("Query: ", query);
    const existCard = query?.filter((card) => card.owner_id === owner_id);
    console.log("existCard: ", Boolean(existCard?.length))
    if (existCard?.length) return { status: false, message: [{ ...existCard }] }; 
    return { status: true, message: [{}] };
  } catch {
    return { status: false, message: [{}] };
  }
}
