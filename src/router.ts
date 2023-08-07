import { Express } from "express";
import { getOneById } from "./crud/get/getOne";
import { morganMiddleware } from "./logging/morgan";

export function router(app: Express) {
	app.use(morganMiddleware);
	app.get("/api/pokemon/:id", getOneById);
}
