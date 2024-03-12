import { createContext, use, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeCard = () => {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <div
      className={`max-w-md mx-auto shadow-md  mt-4 rounded-lg p-6 ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } ${theme === "light" ? "text-gray-800" : "text-white"}`}
    >
      <h1 className='font-bold text-2xl'>
        ThemeCard
      </h1>
      <p>
        {" "}
        According to the latest announcement on the official React blog on
        February 15, 2024, React 19 is expected to be released later in 2024.
        The announcement highlights a number of exciting new features and
        improvements that developers can look forward to in this major version
        update.
      </p>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <ThemeCard />
    </ThemeProvider>
  );
};

export default Theme;
