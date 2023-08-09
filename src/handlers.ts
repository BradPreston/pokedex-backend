import { Request, Response } from "express";
import { Repo } from "./repositories";
const repo = new Repo();

export async function getOne(req: Request, res: Response) {
	try {
		if (parseInt(req.params.id)) {
			const id = parseInt(req.params.id);
			const pokemon = await repo.oneById(id);
			res.status(200);
			res.json(pokemon);
			return;
		}
		const name = req.params.id;
		const pokemon = await repo.oneByName(name);
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

export function getAll(req: Request, res: Response) {}
