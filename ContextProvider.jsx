import React, { createContext, useContext, useState } from "react";

const data = createContext();
export const useData = () => {
  return useContext(data);
};
const ContextProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  return <data.Provider value={[value, setValue]}>{children}</data.Provider>;
};

export default ContextProvider;
