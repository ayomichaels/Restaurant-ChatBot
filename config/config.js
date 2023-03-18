

const config = {
	botName: process.env.botName,
	PORT: process.env.PORT,
	mongoURI: process.env.MONGO_URI,
	sessionSecret: process.env.SESSION_SECRET,
	// local_db: process.env.local,
	// db_name: process.env.db_name,
	sessionMaxAge: process.env.sessionMaxAge,
	domain: process.env.DOMAIN,
	hostDomain: process.env.HOST_DOMAIN,
};

const cors = {
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

module.exports = { config, cors };
