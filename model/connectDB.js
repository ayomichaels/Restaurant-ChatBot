const mongoose = require("mongoose");
const { config } = require("../config/config");
require('dotenv').config()

function connectMongo(server) {
	mongoose.set("strictQuery", false);
	mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() =>
			server.listen(config.PORT, () => {
				console.log(`App running at PORT: ${config.PORT} and MongoDB Server started`);
			})
		)
		.catch((err) => console.log(err));
}

module.exports = connectMongo;
