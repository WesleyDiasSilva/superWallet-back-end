import { respServiceQuery } from "../../interfaces/servicesInterfaces/responseServiceQueryInterface";
import { findCardSurname } from "../../repositories/cards/findCardSurname";

export async function serviceValidCard(
  surname: string,
  owner_id: number
): Promise<respServiceQuery> {
  try {
    const { query } = await findCardSurname(surname);
    if (!query) {
      return { status: true, message: [{}] };
    }
    if (query.owner_id === owner_id) {
      return { status: false, message: [{}] };
    }
    return { status: true, message: [query] };
  } catch {
    return { status: false, message: [{}] };
  }
}
