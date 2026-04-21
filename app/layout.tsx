import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IVIG Infusion Rate Calculator',
  description: 'A tool to calculate the infusion dose and rate protocol for Gammagard Liquid 10%',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.className} min-h-screen text-slate-200 antialiased overflow-x-hidden`} style={{ background: 'radial-gradient(circle at top left, #1e293b, #0f172a), radial-gradient(circle at bottom right, #1e1b4b, #0f172a)', backgroundAttachment: 'fixed' }}>
        {children}
      </body>
    </html>
  );
}
