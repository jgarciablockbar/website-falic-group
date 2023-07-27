import 'tailwindcss/tailwind.css';
import './globals.css'
import { Montserrat as Inter } from 'next/font/google'

import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

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
      <body className={`${inter.className} m-0 bg-secondary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
