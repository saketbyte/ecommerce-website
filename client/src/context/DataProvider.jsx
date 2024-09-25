import { createContext, useState } from "react";

export const DataContext = createContext(null);

// because we are passing children components in the DataProvider Component in App.js I need to pass them as props and render as it is.
const DataProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
