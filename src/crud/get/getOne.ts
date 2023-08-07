import { Request, Response } from "express";
import { Repo } from "../../repositories";
const repo = new Repo();

export async function getOneById(req: Request, res: Response): Promise<void> {
	try {
		const id: number = Number(req.params.id);
		const pokemon = await repo.oneById(id);

		if (pokemon === null)
			throw new ReferenceError(
				`A pokemon with ID "${id}" was not found.`
			);

		res.status(200);
		res.json(pokemon);
	} catch (err: any) {
		res.status(404);
		res.json({ error: err.message });
	}
}
