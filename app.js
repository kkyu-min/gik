import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";
import exhibitRouter from "./router/exhibition.js";
import goodsRouter from "./router/goods.js";
import { config } from "./config.js";
//import { db } from "./db/database.js";
import { sequelize } from "./db/database.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/exhibition", exhibitRouter);
app.use("/goods", goodsRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});
sequelize.sync().then((client) => {
  //console.log(client);
  app.listen(config.host.port);
});
//db.getConnection();
