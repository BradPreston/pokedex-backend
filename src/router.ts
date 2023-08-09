import { Express } from "express";
import { morganMiddleware } from "./logging/morgan";
import { getOneById } from "./handlers";

export function router(app: Express) {
	app.use(morganMiddleware);
	app.get("/api/pokemon/:id", getOneById);
}
