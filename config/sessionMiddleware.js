const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);

const { config } = require("./config");
require('dotenv').config()

const store = new MongoStore({
	uri: process.env.MONGO_URI,
	databaseName: process.env.DB_NAME,
	collection: "session",
});
store.on("error", function (error) {
	console.log(error);
});


const sessionMiddleware = session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	store,
	cookie: {		
		maxAge: +config.sessionMaxAge,
		domain:"chatbot-zznn.onrender.com",
		httpOnly: true,
		secure: false,
    path: '/',
    sameSite: 'strict',
    proxy: true // set proxy in cookies
	},
});


module.exports = sessionMiddleware;
