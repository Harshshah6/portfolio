import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../../components/theme-provider";
import Particles from "../../components/particles";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Harsh S Shah | Portfolio",
  description: "Personal Portfolio web created in nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden w-screen scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden max-w-screen`}
      >
        <ThemeProvider
          defaultTheme="dark"
          attribute="class"
          enableSystem
        >
          <Particles className="absolute inset-0 -z-10 animate-fade-in w-screen" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
