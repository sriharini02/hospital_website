import { Testimonials } from '@/components/Testimonials';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Patient Testimonials - LifeCare Hospital</title>
        <meta name="description" content="Read what our patients have to say about their experiences at LifeCare Hospital. Real stories from people who have received care from our expert medical team." />
      </Head>
      {/* Hero Banner */}
<div className="relative bg-blue-700 text-white py-20">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="container mx-auto px-4 relative z-10 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4"> Patient Testimonials</h1>
    <div className="text-lg">
      <Link href="/" className="hover:underline">Home</Link> &gt; <span>Testimonials</span>
    </div>
  </div>
</div>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Share Your Experience</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We value your feedback. Share your experience with us and help us improve our services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Share Your Story
          </a>
        </div>
      </section>
    </>
  );
}
