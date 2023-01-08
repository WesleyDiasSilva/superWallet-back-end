import { Request, Response } from "express";
import { serviceUpdateTransaction } from "../../services/transactions/serviceUpdateTransaction";

export async function updateTransactionController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const user_id = req.body.user.id;
    const { value, description, type, fixed_variable, date, reason } = req.body;
    const idNumber = Number(id);
    const { status, message } = await serviceUpdateTransaction(
      idNumber,
      user_id,
      { value, description, type, fixed_variable, date, reason }
    );
    if(status) return res.status(200).send(message)
    return res.status(400).send(message)
  } catch {
    return res
      .status(500)
      .send("Não foi possível atualizar essa transação, tente mais tarde!");
  }
}
