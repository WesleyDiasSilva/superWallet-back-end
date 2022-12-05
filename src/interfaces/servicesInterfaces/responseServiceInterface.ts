import { responseRepositoryAndService } from "../responseInterface";

export interface respService extends responseRepositoryAndService{
  message: string;
}