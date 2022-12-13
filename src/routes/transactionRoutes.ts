import { Router } from "express";
import { newTransactionController } from "../controllers/transaction/newTransactionController";
import { middlewareAuth } from "../middlewares/authUserMiddleware";
import { middlewareNewTransaction } from "../middlewares/newTransaction";

const route = Router();

route.use(middlewareAuth)
route.post("/transaction", middlewareNewTransaction, newTransactionController)
route.get("/transaction")
route.get("/transaction/:id")
route.delete("/transaction/:id")
route.put("/transaction/:id")

export default route;