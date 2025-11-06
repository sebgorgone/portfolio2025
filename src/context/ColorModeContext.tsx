import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface colorModeContextType {
   colorMode: boolean
   toggleCM: () => void
   palDark: string[],
   palLight: string[],
   bs: string,
   sideBar: boolean,
   toggleSB: () => void,
   falseSB: () => void,
};

const ColorModeContext = createContext<colorModeContextType | undefined>(undefined);

const palDark = [
   '#ffffff',
   '#3f3f3f',
   '#5ff5f5',
   '#384677',
   '#62127D',
   '#131110',
];

const palLight = [
   '#FFFFFF',
   '#B8B8B8',
   '#EE964B',
   '#F95738',
   '#5FF5F5',
   '#085578',
]

const bs = `0 1px 2px rgba(0, 0, 0, 0.4),0 2px 4px rgba(0, 0, 0, 0.3),0 4px 8px rgba(0, 0, 0, 0.2),0 8px 16px rgba(0, 0, 0, 0.15),0 16px 32px rgba(0, 0, 0, 0.01)`

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
   const [colorMode, setColorMode] = useState(false);
   const toggleCM = () => setColorMode(prev => !prev);

   const [sideBar, setSideBar] = useState(false);
   const toggleSB = () => setSideBar(prev => !prev);
   const falseSB = () => setSideBar(false);

   return (
      <ColorModeContext.Provider value={{ palDark, palLight, bs, colorMode, toggleCM, sideBar, toggleSB, falseSB }}>
         {children}
      </ColorModeContext.Provider>
   )
}

export const useColorMode = () => {
   const context = useContext(ColorModeContext);
   if (!context) {
      throw new Error("useColorMode must be used within a ColorModeProvider");
   }
   return context;
};

export let colorMode: boolean;
