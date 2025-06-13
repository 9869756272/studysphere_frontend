import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="w-2/3 max-w-md">
          <div className="flex flex-col items-center mb-8">
            <img src="/logo.png" alt="Study Sphere Logo" className="w-49 h-49 mb-2" />
            <h1 className="text-2xl font-bold text-gray-800">Study Sphere</h1>
          </div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Sign Up</h2>
          <input type="text" placeholder="Username" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md" />
          <input type="email" placeholder="Email" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md" />
          <input type="password" placeholder="Password" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md" />
          <button className="w-full bg-teal-400 text-white py-2 rounded-md mb-4 hover:bg-teal-500">Sign Up</button>
          <p className="text-sm text-center">
            Already have account? <Link to="/" className="text-red-500">Sign in</Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-gradient-to-br from-teal-600 to-teal-300 flex justify-center items-center">
        <img src="/study.png" alt="Sign Up Illustration" className="w-2/3 h-auto" />
      </div>
    </div>
  );
}
