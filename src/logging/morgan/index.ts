import morgan, { StreamOptions } from "morgan";
import { logger } from "../index";

const stream: StreamOptions = {
	write: (message) =>
		logger.log({
			level: "http",
			message: message
		})
};

const skip = () => {
	const env = process.env.NODE_ENV || "development";
	return env !== "development";
};

export const morganMiddleware = morgan(
	":method :url :status :res[content-length] - :response-time ms",
	{ stream, skip }
);
