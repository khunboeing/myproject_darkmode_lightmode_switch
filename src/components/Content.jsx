import React from "react";
import light from "../image/light.svg";
import dark from "../image/dark.svg";
import { useContext } from "react";
import { ThemeContext } from "../pages/DarkLightMode";
import "./Content.css";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id={theme === "dark" ? "darkmode" : "lightmode"}
      className="flex pt-[150px] px-[80px] pb-[150px]"
    >
      <div className="flex flex-col font-semibold">
        <h1 className="text-[70px]">Napatpimon Pon</h1>
        <h1 className="text-[70px]">Official</h1>
        <p
          id={theme === "dark" ? "text-mode-dark" : ""}
          className="text-[40px]"
        >
          DarkMode Workshop
        </p>
      </div>
      <div>
        <img src={theme === "dark" ? dark : light} alt="Logo" />
      </div>
    </div>
  );
};

export default Content;
