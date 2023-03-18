

const config = {
	botName: process.env.botName,
	PORT: process.env.PORT,
	mongoURI: process.env.MONGO_URI,
	sessionSecret: process.env.SESSION_SECRET,
	local_db: process.env.MONGO_URI,
	db_name: process.env.DB_NAME,
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
