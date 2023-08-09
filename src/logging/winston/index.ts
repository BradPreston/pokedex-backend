import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf } = format;
import dotenv from "dotenv";
import winston from "winston/lib/winston/config";
dotenv.config();

const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4
};

const colors = {
	error: "red",
	warn: "yellow",
	info: "green",
	http: "magenta",
	debug: "white"
};

winston.addColors(colors);

const enumerateErrorFormat = format((info) => {
	if (info instanceof Error) {
		Object.assign(info, { message: info.stack });
	}
	return info;
});

const myFormat = printf(({ level, message, label, timestamp }) => {
	return `[${label}] ${level}: ${message} - ${timestamp}`;
});

export default createLogger({
	level: process.env.NODE_ENV === "development" ? "debug" : "info",
	levels,
	format: combine(
		process.env.NODE_ENV === "development"
			? format.colorize({ all: true })
			: format.uncolorize(),
		label({ label: "pokemon api" }),
		enumerateErrorFormat(),
		format.splat(),
		timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
		myFormat
	),
	transports: [
		new transports.Console({
			stderrLevels: ["error"]
		}),
		new transports.File({
			filename: "logs/error.log",
			level: "error",
			format: format.uncolorize()
		}),
		new transports.File({
			filename: "logs/combined.log",
			format: format.uncolorize()
		})
	]
});
