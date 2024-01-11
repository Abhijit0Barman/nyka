// import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../redux/AuthReducer/action";

export const Login = () => {
  const [data, setData] = useState({
    email: "aaa@gmail.com",
    password: "aA12345@",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, email: "", password: "" });
    dispatch(login(data));
  };
  return (
    <div className="w-[400px] p-5 my-10 mx-auto flex flex-col gap-4 border-[1px] border-gray-300 items-center rounded-xl h-[60vh] justify-evenly">
      <h2>LogIn Page</h2>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        className="w-[80%] h-7 text-xl"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={data.password}
        onChange={handleChange}
        className="w-[80%] h-7 text-xl"
      />
      <button
        onClick={handleSubmit}
        className="w-[150px] h-8 text-xl bg-slate-300 rounded-lg pb-1">
        Log In
      </button>
    </div>
  );
};
