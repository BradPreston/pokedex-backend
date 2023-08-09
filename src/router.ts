import { Express } from "express";
import { morganMiddleware } from "./logging/morgan";

export function router(app: Express) {
	app.use(morganMiddleware);
}
