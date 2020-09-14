import React, {createContext} from 'react'
import {gradients, uniqueTags} from './../gradients'


export const GradientsContext = createContext()

/* le component-provider qui embrassera la partie de notre app où on utilise ce context */

const GradientsContextProvider = ({ children }) => {
  
  return (
    <GradientsContext.Provider value={{ gradients, uniqueTags }}>
      {children}
    </GradientsContext.Provider>
  )
}

export default GradientsContextProvider