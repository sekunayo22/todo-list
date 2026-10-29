import { createContext } from "react";
import type { ThemeType } from "../types/component";

export const ThemeContext = createContext<ThemeType>("light");