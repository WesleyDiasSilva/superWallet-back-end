import express from "express";
import chalk from "chalk";
import cors from "cors"
import routeAuth from "./routes/authRoutes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routeAuth)

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(chalk.bgBlack.cyan(`Server runnig in port: ${port}`))
);
