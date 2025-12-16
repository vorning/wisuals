import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wisuals - Digitale oplevelser med kant',
  description: 'Jeg skaber websites der både ser godt ud og performer. Fra idé til lancering arbejder jeg med moderne teknologi og kreative løsninger.',
  keywords: ['webudvikling', 'Next.js', 'React', 'TypeScript', 'WordPress', 'WooCommerce', 'webdesign', 'Aarhus', 'Denmark', 'freelance developer'],
  authors: [{ name: 'Victor Vorning' }],
  creator: 'Victor Vorning',
  metadataBase: new URL('https://wisuals.dk'),
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://wisuals.dk',
    siteName: 'Wisuals',
    title: 'Wisuals - Digitale oplevelser med kant',
    description: 'Jeg skaber websites der både ser godt ud og performer. Fra WordPress til custom Next.js apps.',
    images: [
      {
        url: '/public/logo.png',
        width: 1200,
        height: 630,
        alt: 'Wisuals - Webudvikling',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisuals - Digitale oplevelser med kant',
    description: 'Moderne websites med fokus på performance og design',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  )
}