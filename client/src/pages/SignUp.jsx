import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      setError(false);
      console.log(data);
      {
        message: "User created succesfully";
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <>
      <div className="m-7">
        <div className="max-w-lg mx-auto text-center">
          <h1 className=" text-xl font-bold my-7">Sign Up</h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-4 justify-center"
          >
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="bg-gray-200 rounded-lg p-3 outline-none text-lg border-2 border-blue-400"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              id="email"
              className="bg-gray-200 rounded-lg p-3 outline-none text-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Password"
              id="password"
              className="bg-gray-200 rounded-lg p-3 outline-none text-lg"
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-500 disabled:bg-slate-400  "
            >
              {loading ? "Loading..." : "Sign-Up"}
            </button>
            <h1 className="p-1 text-lg flex flex-row gap-2">
              Have an account?
              <Link to={"/sign-in"}>
                <span className="text-blue-500 hover:underline">Sign In</span>
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </>
  );
}
