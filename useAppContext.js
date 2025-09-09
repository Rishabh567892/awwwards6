import { createContext, useContext } from "react";

const context = createContext();

export const Provider = context.Provider;

const useAppContext = () => useContext(context);

export default useAppContext;