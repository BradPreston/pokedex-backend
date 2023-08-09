/*
 * DATA ACCESS LAYER
 * --------------------------------------------------
 * Can be switched with any ORM in the future. As long as it implements the
 * IPokemonRepository, it will plug and play with the application.
 *
 * To create a new data access layer, add a new file in the repositories
 * directory. For example, with Drizzle ORM, it could be:
 *      DrizzlePokemonRepository.ts
 */
import { Pokemon } from "../types";
import IPokemonRepository from "./IPokemonRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class PrismaPokemonRepository
	implements IPokemonRepository<Pokemon>
{
	async all(): Promise<Pokemon[]> {
		const pokemon: Pokemon[] = await prisma.pokemon.findMany();

		if (pokemon.length == 0) {
			throw new ReferenceError("No pokemon were found");
		}
		return pokemon;
	}

	async oneById(id: number): Promise<Pokemon> {
		const pokemon: Pokemon = await prisma.pokemon.findFirst({
			where: { pokedex_number: id }
		});

		if (!pokemon) {
			throw new ReferenceError(`Pokemon with id "${id}" was not found`);
		}

		return pokemon;
	}

	async oneByName(name: string): Promise<Pokemon> {
		const pokemon: Pokemon = await prisma.pokemon.findFirst({
			where: { name: name }
		});

		if (!pokemon) {
			throw new ReferenceError(
				`Pokemon with name "${name}" was not found`
			);
		}

		return pokemon;
	}
}
