import express from "express";
import { router } from "./router";
import { logger } from "./logging";
const app = express();

router(app);

logger.info("Starting server");
export const server = app;
