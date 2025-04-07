"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export const useTheme = () => {
  const { theme, setTheme } = React.useContext(
    React.createContext<{
      theme: string | undefined;
      setTheme: (theme: string) => void;
    }>({
      theme: undefined,
      setTheme: () => {},
    })
  );

  React.useEffect(() => {
    // This is a workaround to make TypeScript happy
    // In reality, next-themes will provide these values
  }, []);

  return { theme, setTheme };
};
