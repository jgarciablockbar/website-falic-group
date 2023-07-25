import 'tailwindcss/tailwind.css';
import './globals.css'
import { Nunito as Inter } from 'next/font/google'

import Navbar from "../components/navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Falic Group',
  description: 'Falic Group',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin: 0}}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
