import { Nunito } from "next/font/google";

import './globals.css'
import Navbar from "./component/navbar/Navbar";
import ClientOnly from "./component/ClientOnly";
import RegisterModal from "./component/modals/RegisterModal";

export const Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
