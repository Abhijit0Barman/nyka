import { useEffect, useState } from "react";
import axios from "axios";

export const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    

    setData({ ...data, email: "", password: "" });
  };

  let register=(data)=>{
    axios
      .post(`https://nyka-213k.onrender.com/api/register`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(()=>register(),[])

  return (
    <div className="w-[400px] p-5 my-10 mx-auto flex flex-col gap-4 border-[1px] border-gray-300 items-center rounded-xl h-[60vh] justify-evenly">
      <h1>Registration Page</h1>
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
