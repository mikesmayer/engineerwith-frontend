import dynamic from "next/dynamic"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const DynamicComponentWithNoSSR = dynamic(() => import("recharts"), { ssr: false })
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'