import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Doctors } from '@/components/Doctors';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { CTA } from '../components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>LifeCare Hospital - Multi-Specialty Healthcare in Hyderabad</title>
        <meta name="description" content="LifeCare Hospital provides comprehensive healthcare services in Hyderabad with expert doctors and state-of-the-art facilities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
