import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import { findUserByEmail } from "../../repositories/user/repositoryFindUserByEmail";

export async function serviceFindUserByEmail(email: string): Promise<respService>{
  try{
    const {status, query} = await findUserByEmail(email);
    if(status) return {status: false, message: 'Error'}
    if(query !== null) return {status: false, message: 'Email already registered'}
    return {status: true, message: 'Ok'}
  }catch{
    return {status: false, message: 'Error'}
  }
}