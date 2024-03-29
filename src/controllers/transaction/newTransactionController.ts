import { Request, Response } from "express";
import { serviceCreateTransaction } from "../../services/transactions/serviceCreateTransaction";

export async function newTransactionController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const transaction = req.body.locals;
    const { user } = req.body;
    const responseService = await serviceCreateTransaction({...transaction, authorId: user.id});
    if (responseService.status) {
      return res.sendStatus(201);
    }
    return res.sendStatus(400);
  } catch {
    return res.sendStatus(400);
  }
}
