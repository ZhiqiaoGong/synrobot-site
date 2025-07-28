import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exbody - AI-Powered Biomechanical Analysis',
  description: 'Revolutionary AI technology for real-time posture detection and biomechanical analysis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}