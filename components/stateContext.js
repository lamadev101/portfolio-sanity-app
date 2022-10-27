import React, { createContext, useContext, useState } from 'react'
const Context = createContext();

const ProvideContext = ({children}) => {
  const [dark, setDark] = useState(true);

  return (
    <Context.Provider value={{dark, setDark}}>
      {children}
    </Context.Provider>
  )
}

export default ProvideContext
export const useContextState = ()=> useContext(Context)