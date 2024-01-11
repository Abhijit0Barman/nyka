import { NavLink } from "react-router-dom";

const AllLinks = [
  { text: "Home", path: "/" },
  { text: "Analytics", path: "/analytics" },
  { text: "Dashboard", path: "/dashboard" },
  { text: "Login", path: "/login" },
  { text: "Register", path: "/register" },
];

export const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center h-12 bg-slate-300">
      {AllLinks.map(({ path, text }, index) => {
        return (
          <NavLink key={index} to={path}>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
