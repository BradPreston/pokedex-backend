import { Express } from "express";
import { morganMiddleware } from "./logging/morgan";
import { getAll, getOne } from "./handlers";

export function router(app: Express) {
	app.use(morganMiddleware);
	app.get("/api/pokemon/:id", getOne);
	app.get("/api/pokemon/", getAll);
}
