import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

const Theme= createContext()

export default function ThemeProvider({children}) {
    const [dark , setDark] = useState(null)
  return (
    <Theme.Provider value={{dark , setDark}}>
        {children}
    </Theme.Provider>
  )
}

export const useTheme = ()=>useContext(Theme)
