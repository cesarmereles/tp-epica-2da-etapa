import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { config } from "./src/settings/config.js";
import { startConect } from "./src/settings/database.js";

import { userRouter } from "./src/routes/user.route.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(morgan("dev"));

//routes
app.use("/user", userRouter);

app.listen(config.PORT, async () => {
  await startConect();
  console.log(`Server corriendo en http://localhost:${config.PORT}`);
});
