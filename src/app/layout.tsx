import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nano Store × InMemory DB',
  description: 'Nano Store × InMemory DB on Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <main className="flex items-center justify-center p-40">
          {children}
        </main>
      </body>
    </html>
  )
}
