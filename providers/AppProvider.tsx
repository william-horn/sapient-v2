
import { createContext, useContext } from "react";

const AppContext = createContext(undefined);
export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children, value }) => {
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider