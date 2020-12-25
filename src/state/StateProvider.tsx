import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, State } from "./reducer";

const AppContext = createContext<any>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const StateProvider: React.FC<Props> = ({ children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

export const useStateValue = () => useContext(AppContext);
