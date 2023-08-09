import { Request, Response } from "express";
import { Repo } from "./repositories";
const repo = new Repo();

export async function getOneById(req: Request, res: Response) {}

export function getOneByName(req: Request, res: Response) {}

export function getAll(req: Request, res: Response) {}
