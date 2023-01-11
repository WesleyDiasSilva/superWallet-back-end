import express from "express";
import chalk from "chalk";
import cors from "cors";
import routeAuth from "./routes/authRoutes";
import routeTransactions from "./routes/transactionRoutes";
import routeCards from './routes/cardRoutes'
import routeGoals from './routes/goalRoutes'

const app = express();
app.use(express.json());
app.use(cors());
app.use(routeAuth);
app.use(routeTransactions);
app.use(routeCards)
app.use(routeGoals)

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(chalk.bgBlack.cyan(`Server runnig in port: ${port}`))
);
