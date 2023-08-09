import { Request, Response } from "express";
import { Repo } from "./repositories";
const repo = new Repo();

export async function getOneById(req: Request, res: Response) {
	try {
		const id = parseInt(req.params.id);
		const pokemon = await repo.oneById(id);
		res.status(200);
		res.json(pokemon);
	} catch (err: any) {
		if (err instanceof ReferenceError) {
			res.status(404);
			res.json({ error: err.message });
		} else {
			res.status(400);
			res.json({ error: "something went wrong" });
		}
	}
}

export function getOneByName(req: Request, res: Response) {}

export function getAll(req: Request, res: Response) {}
