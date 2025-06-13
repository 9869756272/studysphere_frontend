import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="w-2/3 max-w-md">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/logo.png"
              alt="Study Sphere Logo"
              className="w-49 h-49 mb-6" // 👈 Bigger logo
            />
            <h1 className="text-2xl font-bold text-gray-800">Study Sphere</h1>
          </div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Sign in</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
          />
          <div className="text-right mb-3">
            <a href="#" className="text-sm text-red-500">Forgot Password?</a>
          </div>
          <button className="w-full bg-teal-400 text-white py-2 rounded-md mb-4 hover:bg-teal-500">
            Sign in
          </button>
          <p className="text-sm text-center">
            Not a member yet? <Link to="/register" className="text-red-500">Sign up</Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-gradient-to-br from-teal-600 to-teal-300 flex justify-center items-center">
        <img
          src="/study.png"
          alt="Login Illustration"
          className="w-2/3 h-auto"
        />
      </div>
    </div>
  );
}
