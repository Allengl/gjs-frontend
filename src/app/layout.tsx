import '../styles/globals.css'
import Provider from '@/components/Provider'
import { cn } from '@/lib/utils'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>

      <body  className={cn(
          "min-h-screen bg-main-bg font-sans antialiased",
        )}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
