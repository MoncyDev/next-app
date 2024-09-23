import Link from "next/link";
import React from "react";
import Login from "./components/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="font-bold text-sky-800">
        Next.js
      </Link>
      <Link href="/users">Users</Link>

      {(session && (
        <div>
          {session.user!.name}
          <Link
            href="/api/auth/signout"
            className="link-primary underline ml-1"
          >
            Logout
          </Link>
        </div>
      )) || <Login />}
    </div>
  );
};

export default NavBar;
