import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// local import
import './globals.css';
import '../assets/WEB/css/clash-display.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Get Linked',
  description: 'Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-dark text-white min-h-screen`}>
        <ToastContainer />
        <div id="portal"></div>
        <div id="modal"></div>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
