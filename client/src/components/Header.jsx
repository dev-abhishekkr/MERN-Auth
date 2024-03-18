import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-gray-400">
        <div className="flex flex-row mx-auto justify-between text-center max-w-6xl p-3">
          <Link to={"/"}>
            <h1 className="font-bold">AUTH App</h1>
          </Link>
          <ul className="flex felx-row gap-4">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
            <Link to={"/sign-in"}>
              <li>Sign In</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
