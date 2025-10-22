import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Suriyawan Saffari',
  description: 'eCommerce Ecosystem',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
