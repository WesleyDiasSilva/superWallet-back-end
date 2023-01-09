import { Request, Response } from "express";
import { serviceDeleteCard } from "../../services/cards/serviceDeleteCard";

export async function deleteCardController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const user_id = req.body.user.id;
    const card_id = req.params.id;
    const { status, message } = await serviceDeleteCard(
      user_id,
      Number(card_id)
    );
    if(status) return res.status(200).send(message);
    return res.status(422).send(message);
  } catch {
    return res.status(500).send("Error");
  }
}
