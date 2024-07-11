import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextComp({ children }) {
  const [fullscreen, setfullscreen] = useState(false);
  return (
    <Context.Provider value={{ fullscreen, setfullscreen }}>
      {children}
    </Context.Provider>
  );
}
