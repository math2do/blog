import { createContext } from "react";

type TopicContextProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export const TopicContext = createContext<TopicContextProps>({
  selected: "",
  setSelected: () => {},
});
