import { MongoClient } from "mongodb";
import { logger } from "../../logging";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.MONGODB_URI || "";
const client = new MongoClient(connectionString);
let conn: MongoClient;

try {
	conn = await client.connect();
	logger.info("Connected to MongoDB");
} catch (e: any) {
	logger.error(e.message);
}

const db = conn.db("pokedex");
const collection = db.collection("pokemon");

export default collection;
