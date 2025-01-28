import clientPromise from "../../../lib/mongodb";

export async function GET(req) {
  try {
    const client = await clientPromise; // Attempt to connect
    const db = client.db("ksva"); 

    // Perform a test operation to verify the connection
    const collections = await db.listCollections().toArray();

    return new Response(
      JSON.stringify({ message: "Connected to MongoDB!", collections }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    return new Response(
      JSON.stringify({ message: "Failed to connect to MongoDB", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
