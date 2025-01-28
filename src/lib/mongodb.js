import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Read the MongoDB URI from .env.local
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Reuse existing client in development to prevent exhausting connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().catch((error) => {
      console.error("MongoDB connection failed:", error.message);
      throw error;
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Create a new client for production
  client = new MongoClient(uri, options);
  clientPromise = client.connect().catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  });
}

export default clientPromise;
