import mongoose from "mongoose";

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    const urlConnection =
      process.env.DATABASE_URL || "mongodb://localhost:27017/bonnavita";

    try {
      await mongoose.connect(urlConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected!");
    } catch (err) {
      console.log(`error to connect to the database: ${err} `);
    }
  }
}

export default new Database();
