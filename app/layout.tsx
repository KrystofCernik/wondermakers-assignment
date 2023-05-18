import '@/styles/globals.scss'

export const metadata = {
  title: 'Krystof Cernik | WonderMakers',
  description: 'Created in Next using tailwindcss + gsap',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
