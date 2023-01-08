import { Router } from "express";
import { deleteTransactionController } from "../controllers/transaction/deleteTransactionController";
import { getAllTransactionController } from "../controllers/transaction/getAllTransactionController";
import { getTransactionController } from "../controllers/transaction/getTransaction";
import { newTransactionController } from "../controllers/transaction/newTransactionController";
import { updateTransactionController } from "../controllers/transaction/updateTransactionController";
import { middlewareAuth } from "../middlewares/authUserMiddleware";
import { middlewareNewTransaction } from "../middlewares/newTransaction";


const route = Router();

route.use(middlewareAuth)
route.post("/transaction", middlewareNewTransaction, newTransactionController)
route.get("/transaction", getAllTransactionController)
route.get("/transaction/:id", getTransactionController)
route.delete("/transaction/:id", deleteTransactionController)
route.put("/transaction/:id", middlewareNewTransaction, updateTransactionController)

export default route;