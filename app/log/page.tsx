"use client";

import { betterAuthClient } from "@/lib/integration/better-auth";
import React, { useState } from "react";// Update this path if needed
import LogNavBar from "../components/log-nav-bar/LogNavBar";

const LoginPage = () => {
  const { data } = betterAuthClient.useSession();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChangeSignUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignIn = async () => {
    await betterAuthClient.signIn.username({
      username: loginData.username,
      password: loginData.password,
    });
  };

  const handleSignUp = async () => {
    await betterAuthClient.signUp.email({
      email: formData.email,
      name: formData.name,
      username: formData.username,
      password: formData.password,
    });
  };

  const handleSignOut = async () => {
    await betterAuthClient.signOut();
  };

  return (
    <div className="p-4 font-sans text-sm mx-30">
      
      <div className="flex justify-between items-center border-b pb-2 mb-6">
        {data?.user && (
          <>
            <LogNavBar />
          
          </>
        )}
      </div>
      {!data?.user && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Login Form */}
          <div>
            <h3 className="font-bold mb-4">Login</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <label className="w-24" htmlFor="login-username">Username:</label>
                <input
                  id="login-username"
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleChangeLogin}
                  className="border border-gray-400 text-sm p-1 flex-1"
                />
              </div>
              <div className="flex items-center">
                <label className="w-24" htmlFor="login-password">Password:</label>
                <input
                  id="login-password"
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChangeLogin}
                  className="border border-gray-400 text-sm p-1 flex-1"
                />
              </div>
              <button
                onClick={handleSignIn}
                className="mt-2 border px-2 py-1 bg-gray-200 hover:bg-gray-300"
              >
                Login
              </button>
              <br />
              <a
                href="/forgot-password"
                className="text-blue-600 underline mt-2 inline-block"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Signup Form */}
          <div>
            <h3 className="font-bold mb-4">Create Account</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <label className="w-24" htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChangeSignUp}
                  className="border border-gray-400 text-sm p-1 flex-1"
                />
              </div>
              <div className="flex items-center">
                <label className="w-24" htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChangeSignUp}
                  className="border border-gray-400 text-sm p-1 flex-1"
                />
              </div>
              <div className="flex items-center">
                <label className="w-24" htmlFor="signup-username">Username:</label>
                <input
                  id="signup-username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChangeSignUp}
                  className="border border-gray-400 text-sm p-1 flex-1"
                />
              </div>
              <div className="flex items-center">
                <label className="w-24" htmlFor="signup-password">Password:</label>
                <input
                  id="signup-password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChangeSignUp}
                  className="border border-gray-400 text-sm p-1 flex-1"
                />
              </div>
              <button
                onClick={handleSignUp}
                className="mt-2 border px-2 py-1 bg-gray-200 hover:bg-gray-300"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
