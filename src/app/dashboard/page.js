"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to access the dashboard.");
      router.push("/login");
      return;
    }

    // Validate the token with the backend
    axios
      .get("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token
        },
      })
      .then((response) => {
        setUser(response.data.user); // Set user data from the backend
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error validating token:", error);
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token"); // Clear invalid token
        router.push("/login");
      });
  }, [router]);

  const handleLogout = () => {
    // Clear the token and redirect to login
    localStorage.removeItem("token");
    alert("You will be redirected to login page.");
    router.push("/login");
  };

  if (loading) {
    return <div>Loading...</div>; // Display a loading state while validating
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to the Dashboard!</h1>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}