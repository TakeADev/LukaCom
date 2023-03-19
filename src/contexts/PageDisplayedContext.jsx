import { createContext, useState } from 'react'

import React from 'react'

export const PageDisplayedContext = createContext({
  pageDisplayed: 0,
  setpageDisplayed: () => null,
})

export const PageDisplayedProvider = ({ children }) => {
  const [pageDisplayed, setPageDisplayed] = useState(0)
  const value = { pageDisplayed, setPageDisplayed }

  return (
    <PageDisplayedContext.Provider value={value}>
      {children}
    </PageDisplayedContext.Provider>
  )
}
