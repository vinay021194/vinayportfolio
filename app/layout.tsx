import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinay Saxena | Senior Software Engineer",
  description: "Portfolio of Vinay Saxena — Senior Software Engineer specializing in React.js, Next.js, React Native, TypeScript, JavaScript, Python, Generative AI and Agentic AI."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}