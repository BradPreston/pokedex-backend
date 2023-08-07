/*
 * Pokemon Repository Interface
 * ---------------------------------------
 * Create an interface that all repositories must implement
 */

export default interface IPokemonRepository<T> {
	all(): Promise<T[]>;
	oneById(id: number): Promise<T>;
	oneByName(name: string): Promise<T>;
}
