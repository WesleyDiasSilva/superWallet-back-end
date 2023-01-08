import { Request, Response } from "express";
import { serviceDeleteTransaction } from "../../services/transactions/serviceDeleteTransaction";

export async function deleteTransactionController(req: Request, res: Response): Promise<Response>{
  try{
    const {id} = req.params;
    const idNumber = Number(id);
    const {status, message} = await serviceDeleteTransaction(idNumber)
    console.log(message)
    if(status){
      return res.status(204).send(message)
    }
    return res.status(400).send(message)
  }catch{
    return res.status(500).send("Erro ao deletar transaction!")
  }
}