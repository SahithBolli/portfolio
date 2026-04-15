import { Outfit, Inter } from 'next/font/google'
import './globals.css'

const syne = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Sahith Bolli — Senior Full Stack Engineer',
  description:
    'Portfolio of Sahith Bolli. Senior Full Stack Engineer specialising in Java, Spring Boot, AWS EKS, and Kafka. Currently at Honeywell, Charlotte NC.',
  keywords: ['Java Developer', 'Spring Boot', 'AWS', 'Kafka', 'Full Stack Engineer', 'Sahith Bolli'],
  openGraph: {
    title: 'Sahith Bolli — Senior Full Stack Engineer',
    description: 'Building distributed systems and cloud-native architectures that scale.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
