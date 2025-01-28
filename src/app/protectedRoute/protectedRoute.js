"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for app directory
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const ProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");

      if (!token) {
        alert("You must be logged in to access this page.");
        router.push("/login"); // Redirect to login if no token
        return;
      }

      // Validate token with backend
      axios.get("https://localhost:3001/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setUser(response.data.user);
        setLoading(false);
      }).catch((error) => {
        console.error("Error validating token:", error);
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        router.push("/login");
      });
    }, [router]);

    // Render the wrapped component if the token exists
    return <WrappedComponent {...props} />;
  };
};

export default ProtectedRoute;
