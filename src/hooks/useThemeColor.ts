import { useContext } from "react";
import { ThemeColorContext } from "../context/ThemeColorProvider";

export const useThemeColor = () => {
  const context = useContext(ThemeColorContext);
  if (!context) {
    throw new Error("useThemeColor must be used within ThemeColorProvider");
  }
  return context;
};
