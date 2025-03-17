import Navbar from "@/components/Navbar";
import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
    <body className="bg-gray-100">
      <Navbar />
      <main>{children}</main>
    </body>
  </html>
  )
}
