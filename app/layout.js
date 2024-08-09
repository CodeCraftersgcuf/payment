'use client';

// import { usePathname } from 'next/navigation';
// import gsap from 'gsap';
// import { ScrollSmoother } from 'gsap-trial/dist/ScrollSmoother';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Inter } from 'next/font/google';
// import { useGSAP } from '@gsap/react';

// import Header from '@/components/Header';

// import './globals.css';
// import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
// }

export default function RootLayout({ children }) {
  // const pathname = usePathname();

  // useGSAP(
  //   () => {
  //     ScrollSmoother.create({
  //       smooth: 2,
  //       effects: true,
  //     });
  //   },
  //   {
  //     dependencies: [pathname],
  //     revertOnUpdate: true,
  //   }
  // );

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
    
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>

      </body>
    </html>
  );
}
