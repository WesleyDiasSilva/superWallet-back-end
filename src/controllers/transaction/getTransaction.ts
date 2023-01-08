import { Request, Response } from "express";
import { serviceFindTransaction } from "../../services/transactions/serviceFindTransaction";

export async function getTransactionController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const idNumber = Number(id);
    const { status, message } = await serviceFindTransaction(idNumber);
    return res.status(200).send(message);
  } catch (err) {
    return res.status(500).send(err);
  }
}
