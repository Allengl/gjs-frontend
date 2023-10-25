'use client'
import '../styles/globals.css'
// import { Inter as FontSans } from "next/font/google"
import Provider from '@/components/Provider'
import { cn } from '@/lib/utils'
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';


// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 这里可以根据条件检查页面内容是否为空
    console.log('pathname', pathname);
    if(pathname === '/'){
      router.push('/sign-in')
    }
  }, []);


  return (
    <html lang="en" suppressHydrationWarning>

      <body className={cn(
        "min-h-screen bg-main-bg font-sans antialiased",
        // fontSans.variable
      )}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
