import type React from "react"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <head>
        <title>Aman Saini - Graphic Designer & Video Editor</title>
        <meta
          name="description"
          content="Professional graphic designer and video editor transforming ideas into visuals that inspire."
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
