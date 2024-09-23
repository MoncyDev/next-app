"use client";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <>
      <Link href="/api/auth/signin">Login</Link>

      <button className="btn btn-sm" onClick={() => signIn("google")}>
        <FcGoogle /> Sign in with Google
      </button>
    </>
  );
};

export default Login;
