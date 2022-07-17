import { useEffect, useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import "./darkModeButton.scss";
interface darkmodeProps {
  darkmodeON: Function
}
const DarkMode: React.FC<darkmodeProps> = ({ darkmodeON }) => {
  const t = useSelector((state: any) => state.i18n.translations[state.i18n.lang]);
  const [ switchON, setSwitchON] = useState(false)
  let clickedClass = "clicked";
  const body = document.body;
  enum themeMode {
    DEFAULT = "light",
    LIGHT = "light",
    DARK = "dark",
  }
  let theme: any = themeMode.DEFAULT;
  if (window.matchMedia('(prefers-color-scheme: dark)')) {
    theme = themeMode.DARK
  }
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  };
  const switchCheked = () => {
    switch (theme) {
      case themeMode.DARK:
        setSwitchON(true)
        darkmodeON(switchON)
        break;
      case themeMode.LIGHT:
        setSwitchON(false)
        darkmodeON(switchON)
        break;
    }
  }
  theme ? body.classList.add(theme) : body.classList.add(themeMode.DEFAULT)
  const switchTheme = (e: any) => {
    switch (theme) {
      case themeMode.DARK:
        body.classList.replace(themeMode.DARK, themeMode.LIGHT);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", themeMode.LIGHT);
        theme = themeMode.LIGHT;
        setSwitchON(false)
        break;
      case themeMode.LIGHT:
        body.classList.replace(themeMode.LIGHT, themeMode.DARK);
        e.target.classList.add(clickedClass);
        localStorage.setItem("theme", themeMode.DARK);
        theme = themeMode.DARK;
        setSwitchON(true)
        break;
    }
  };
  useEffect(() => {
    switchCheked();
  }, );
  return (
      <div title={t.navbar.subTitle.darkmode} className={theme === themeMode.DARK ? clickedClass : ""}
      id="darkMode"  >
        <label className="theme-switch" >
          <input type="checkbox" id="checkbox" onChange={(e) => switchTheme(e)} checked={switchON}/>
          <div className="slider round">
          {switchON ? 
             <RiSunFill size={18} />:
             <RiMoonClearFill size={18} />
          }
          </div>
        </label> 
      </div>
  );
};
export default DarkMode;