import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";
import { LangContext } from "@/contexts/LangContext";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {/* tip: Get information from "theme" variable to determine 
      which theme is currently selected */}
      {theme.name === "light"
        ? lang.detail.lightActivated
        : lang.detail.darkActivated}
    </p>
  );
};
