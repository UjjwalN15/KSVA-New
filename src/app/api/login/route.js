import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import clientPromise from "@/lib/mongodb";

const SECRET_KEY = process.env.JWT_SECRET; // Secure key from .env.local

export async function POST(request) {
  try {
    // Parse the request body
    const { email, password, rememberMe } = await request.json();

    // Validate inputs
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("ksva"); // Replace "ksva" with your database name
    const usersCollection = db.collection("users");

    // Check if the user exists
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Verify the password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Set token expiration based on "Remember Me"
    const expiresIn = rememberMe ? "7d" : "1h"; // 7 days for "Remember Me," 1 hour otherwise

    // Generate a JWT token
    const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY, {
      expiresIn,
    });

    // Return success response with the token
    return NextResponse.json(
      {
        message: "Logged in successfully!",
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in login route:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
