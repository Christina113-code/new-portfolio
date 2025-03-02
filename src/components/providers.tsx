'iuse client'

import { ThemeProvider, useTheme } from "next-themes"

ThemeProvider
const Providers = ({children}:{children: React.ReactNode}) => {
  return (
<ThemeProvider
enableSystem
attribute="class"
defaultTheme="system"
disableTransitionOnChange
>
    {children}
</ThemeProvider>  )
}

export default Providers