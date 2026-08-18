
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "../../utils";
import { APP_DESCRIPTION, APP_NAME } from "@/components/constant";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
export const mtadata:Metadata={
  title:{
    absolute:APP_NAME,
    default:APP_NAME,
    template:`%s |${APP_NAME}`,
  },
  description:APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", fontSans.variable)}
    >
      <body className="dark:bg-black bg-white">
        <ThemeProvider
        attribute='class'
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        > {children}
        
        </ThemeProvider>
      </body>
    </html>
  );
}