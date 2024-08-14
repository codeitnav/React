import {createContext, useContext} from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider

// Creating a Custom Hook for Theme Consumption
export default function useTheme(){
    return useContext(ThemeContext)
}

/*
1. Creates a custom hook named useTheme.
2. Uses the useContext hook to access the ThemeContext within any component that imports this hook.

# How it works:

1. Creating the Context: The createContext function creates a new context object with a default value.
2. Providing the Context: The ThemeProvider component is used to wrap components that need access to the theme context. It provides the actual theme values and functions to its children.
3. Consuming the Context: The useTheme hook simplifies accessing the theme context within components. It returns the current theme values and functions.

*/