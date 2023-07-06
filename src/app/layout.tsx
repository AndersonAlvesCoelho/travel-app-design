import { SliderContextProvider } from '@/context/SliderContext'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel App',
  description: 'Travel App design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SliderContextProvider>
          {children}
        </SliderContextProvider>
      </body>
    </html>
  )
}
