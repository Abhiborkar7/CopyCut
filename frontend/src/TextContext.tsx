import { createContext, useContext, useState, ReactNode } from "react";

interface TextContextType {
  text: string;
  setText: (value: string) => void;
}

const TextContext = createContext<TextContextType | undefined>(undefined);

export const TextProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<string>("");

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};

export const useText = (): TextContextType => {
  const context = useContext(TextContext);
  if (context === undefined) {
    throw new Error("useText must be used within a TextProvider");
  }
  return context;
};
