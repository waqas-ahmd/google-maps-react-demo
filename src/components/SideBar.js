import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const slugger = (text) => {
    return "/" + text.replace(" ", "-").toLowerCase();
  };

  return (
    <div className="bg-slate-700 w-[20vw]">
      {[
        "Simple",
        "Markers",
        "Clickable Markers",
        "Polygon",
        "Polyline",
        "Circle",
      ].map((text, index) => (
        <Button
          onClick={() => {
            navigate(slugger(text));
          }}
          key={index}
        >
          <span className="font-semibold text-red-200 font-mono">{">"}</span>{" "}
          <span
            className={
              slugger(text) === path
                ? "text-white font-semibold"
                : "text-slate-300"
            }
          >
            {text}
          </span>
        </Button>
      ))}
    </div>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-5 py-3  hover:bg-slate-600 transition-all duration-300 text-white cursor-pointer"
    >
      {children}
    </div>
  );
};

export default SideBar;
