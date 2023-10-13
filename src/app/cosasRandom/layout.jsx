import '../styles/globals.css'

export default function RootLayout ({ children }) { // creamos el element
  return (
    <html lang='en'>
      <head />
      <body>
        {children}
      </body>

    </html>
  )
}
