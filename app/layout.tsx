import '../styles/globals.css'
import Header from './(components)/Header'
import Head from "./head";
import Footer from "./(components)/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head/>
      <body className=' overflow-x-hidden w-[100%]'>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
