import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function Navbar() {
  let path = useLocation().pathname;
  return (
    <nav>
      <ul className="flex justify-between py-4">
        <li className="text-2xl font-semibold">NoteTakingApp</li>
        <li>
          {path !== "/add" ? (
            <Link to={"/add"}>Create Task</Link>
          ) : (
            <Link to={"/"}>View Tasks</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
