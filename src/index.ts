import { logger } from "./logging";
import { server } from "./server";

try {
	server.listen(3000);
	logger.info("Server running on port 3000");
} catch (err: any) {
	logger.error(err.message);
	process.exit(1);
}
