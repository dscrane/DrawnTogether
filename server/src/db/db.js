import mongoose from "mongoose";
import { log } from "../utils/logs.js";

const connectionURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
export default async () => {
  const reconnectTimeout = 10000;
  const connect = () => {
    mongoose.connect(
      connectionURL,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      null
    );
  };

  const db = mongoose.connection;

  db.on("connecting", () => {
    log.cyan("Attempting database database connection");
  });

  db.on("error", (error) => {
    log.blue(`MongoDB connection error: ${error}`);
    mongoose.disconnect();
  });
  db.on("connected", () => {
    log.green("Connected to MongoDB!");
  });

  db.once("open", () => {
    console.info("MongoDB connection opened!");
  });

  db.on("reconnected", () => {
    console.info("MongoDB reconnected!");
  });

  db.on("disconnected", () => {
    log.red(
      `MongoDB disconnected! Reconnecting in ${reconnectTimeout / 1000}s...`
    );
    setTimeout(() => connect(), reconnectTimeout);
  });

  connect();
};
