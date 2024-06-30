import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar/navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Lokesh Kanna",
  description: "Created by Lokesh Kanna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
