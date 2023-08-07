import express from "express";
import { router } from "./router";
import { logger } from "./logging";
const app = express();

router(app);

logger.info("Running on port 3000");
app.listen(3000);
