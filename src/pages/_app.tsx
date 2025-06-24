import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '../../styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={`${inter.className} flex flex-col min-h-screen`}>
      <Head>
        <title>LifeCare Hospital - Multi-Specialty Healthcare in Hyderabad</title>
        <meta name="description" content="LifeCare Hospital provides comprehensive healthcare services in Hyderabad with expert doctors and state-of-the-art facilities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <style jsx global>{`
        :root {
          --primary-color: #2563eb;
          --secondary-color: #1e40af;
          --accent-color: #3b82f6;
          --text-color: #1f2937;
          --light-bg: #f9fafb;
        }
        
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          color: var(--text-color);
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        section {
          padding: 5rem 0;
        }
        
        @media (max-width: 768px) {
          section {
            padding: 3rem 0;
          }
        }
      `}</style>
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <div className="fixed top-4 right-4 z-50 w-[280px] font-sans">
          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            closeButton={false}
            toastClassName="!bg-blue-600 !text-white !rounded-lg !shadow-lg !mb-2 !p-3 !min-h-0"
            className="!p-0 !m-0"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
