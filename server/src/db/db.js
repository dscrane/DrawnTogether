import mongoose from "mongoose";
import { log } from "../utils/logs.js";

const connectionURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
export default () => {
  log.cyan("Attempting database database connection");
  mongoose.connect(
    connectionURL,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err) => (err ? log.red(err) : log.green("Database connection successful"))
  );
};
