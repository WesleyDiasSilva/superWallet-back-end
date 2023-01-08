import { Request, Response } from "express";
import { serviceGetTransactions } from "../../services/transactions/serviceGetTransactions";

export async function getAllTransactionController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.body.user;
    const responseService = await serviceGetTransactions(id);
    if (responseService.status) {
      return res.status(200).send(responseService.message);
    }
    return res.sendStatus(400);
  } catch {
    return res.sendStatus(400);
  }
}
