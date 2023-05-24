import React from "react";
import { useLocalStorage } from "usehooks-ts";
import classNames from "classnames";

function WithTheme({ children }) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkTheme, setDarkTheme] = useLocalStorage(
    "darkTheme",
    prefersDark || false
  );

  React.useEffect(() => {
    if (!JSON.parse(window.localStorage.getItem("darkTheme"))) {
      window.localStorage.setItem("darkTheme", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme((theme) => !theme);
  };

  const component = React.cloneElement(children, {
    toggleTheme,
  });

  return (
    <div
      className={classNames({
        dark: darkTheme,
      })}
    >
      {component}
    </div>
  );
}

export default WithTheme;
