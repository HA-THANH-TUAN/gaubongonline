"use client"

import { NavBar } from '@/Components/NavBar/NavBar'

import './globals.css'
import { Inter,Nunito_Sans,Nunito } from 'next/font/google'
import Header from '@/Layouts/Header'
import Contact from '@/Components/Contact'
import GoToTop from '@/Components/GoToTop'
const inter = Inter({ subsets: ['latin'] , variable:"--font-inter" })
const nunitoSans = Nunito_Sans({ subsets: ['latin',"vietnamese"],variable:"--font-nunitoSans" })
const nunito = Nunito({ subsets: ['latin',"vietnamese"],variable:"--font-nunito" })

export const metadata = {
  title: 'Người dùng'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${nunito.className} ${nunito.variable} ${inter.variable}`}>
        <div className='app'>
          <Header/>
          <NavBar/>
          {/* <Contact/>
          <GoToTop/> */}
          
          <main className="">
            {children}
          </main>
          <footer className='mt-10'>

          </footer>

        </div>
      </body>
    </html>
  )
}
