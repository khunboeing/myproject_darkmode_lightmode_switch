import React, { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../pages/DarkLightMode";
import "./Title.css";

const Title = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleSwitch = (checked) => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header
      id={theme === "dark" ? "dark" : "light"}
      className="pt-12 w-full flex justify-between px-[80px]"
    >
      <span className="text-6xl font-semibold ">Mode [{theme}]</span>
      <Switch
        onChange={toggleSwitch}
        checked={theme === "dark"}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#ffa500"
        className="pr-[160px] "
      />
    </header>
  );
};

export default Title;
