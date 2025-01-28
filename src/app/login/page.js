"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Chrome } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean(),
});

export default function SignInForm() {
  const [initialValues, setInitialValues] = useState(null); // Use null initially

  // Load email from localStorage after component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const email = localStorage.getItem("email") || "";
      const rememberMe = !!email;
      setInitialValues({ email, password: "", rememberMe });
    }
  }, []);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        values
      );
      const { token } = response.data;

      // Save the token in localStorage
      localStorage.setItem("token", token);

      // Handle "Remember Me" for email
      if (values.rememberMe) {
        localStorage.setItem("email", values.email);
      } else {
        localStorage.removeItem("email");
      }

      // Display success toast
      toast.success("Login successful!");
      setTimeout(() => {
        window.location.href = "/dashboard"; // Redirect after a delay
      }, 2000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Error data:", error.response.data);
          setFieldError("email", error.response.data.message);
        } else if (error.request) {
          console.error("No response received:", error.request);
          setFieldError("email", "No response from server. Please try again.");
        } else {
          console.error("Unexpected error", error.message);
          setFieldError(
            "email",
            "An unexpected error occurred. Please try again."
          );
        }
      } else {
        console.error("Non-Axios error:", error);
        setFieldError(
          "email",
          "An unexpected error occurred. Please try again."
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google");
  };

  if (!initialValues) {
    return null; // Avoid rendering the form until initial values are loaded
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          KSVA Tech
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Sign in to access freelancing projects
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 text-center">
          <span className="text-gray-500">or</span>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full px-4 py-2 mt-4 font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-center"
        >
          <Chrome className="w-5 h-5 mr-2" />
          Continue with Google
        </button>
        <p className="mt-4 text-sm text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/signUp">
            <span className="text-blue-500 hover:underline">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
