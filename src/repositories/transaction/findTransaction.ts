import { prismaClient } from "../../database/connection"
import { respRepoTransaction } from "../../interfaces/repositoriesInterfaces/responseRepositoryInterface"

export async function findTransaction(id: number): Promise<respRepoTransaction>{
  try{
    const transaction = await prismaClient.transaction.findFirst({where: {id: id}})
    return {status: true, query: transaction}
  }catch{
    return {status: false, query: null}
  }
}