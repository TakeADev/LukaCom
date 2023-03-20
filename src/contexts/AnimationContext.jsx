import { createContext, useState } from 'react'

import React from 'react'

export const AnimationContext = createContext({
  animationIteration: 0,
  setpageAnimationIteration: () => null,
})

export const AnimationContextProvider = ({ children }) => {
  const [animationIteration, setAnimationIteration] = useState(0)
  const value = { animationIteration, setAnimationIteration }

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  )
}
