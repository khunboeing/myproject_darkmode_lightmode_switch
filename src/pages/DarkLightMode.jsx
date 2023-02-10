import React from "react";
import light from "../image/light.svg";
import Title from "../components/Title";
import { createContext, useState } from "react";
import Content from "../components/Content";

export const ThemeContext = createContext();

const DarkLightMode = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className=" flex flex-col">
        <header>
          <Title />
        </header>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
};

export default DarkLightMode;
