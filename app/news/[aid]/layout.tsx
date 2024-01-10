import 'tailwindcss/tailwind.css';
import '../../globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


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
      <body className={`m-0 bg-secondary`}>
        <Navbar news={true} />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
