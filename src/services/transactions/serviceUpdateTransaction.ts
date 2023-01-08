import { bodyTransaction } from "../../interfaces/bodyUpdateTransaction";
import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { findTransaction } from "../../repositories/transaction/findTransaction";
import { updateTransaction } from "../../repositories/transaction/updateTransaction";

export async function serviceUpdateTransaction(id: number, user_id: number, bodyTransaction: bodyTransaction): Promise<respService>{
  try{
    const {status, query} = await findTransaction(id)
    if(!status || query == null) return {status: false, message: "Transação não encontrada!"}
    if(query?.authorId !== user_id) return {status: false, message: "Não autorizado!"}
    bodyTransaction.value = bodyTransaction.value * 100
    const response = await updateTransaction(id, bodyTransaction);
    if(response.status){
      return {status: true, message: "Transaction foi atualizada!"}
    }
    return {status: false, message: "Não foi possível atualizar, tente novamente mais tarde!"}
  }catch{
    return {status: false, message: "Não foi possível atualizar, tente novamente mais tarde!"}
  }
}