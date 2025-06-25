import Head from 'next/head';
import { Specialities } from '@/components/Specialities';
import { Banner } from '@/components/ui/Banner';
import HealthcareServices from '@/components/HealthcareServices';

export default function OurSpecialities() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Our Specialities - LifeCare Hospital</title>
        <meta name="description" content="Explore our comprehensive range of medical specialities and expert healthcare services at LifeCare Hospital." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        {/* Hero Banner 
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Our Specialities
              </h1>
              <nav className="mt-4" aria-label="Breadcrumb">
                <ol className="flex justify-center space-x-2 text-sm font-medium">
                  <li>
                    <a href="/" className="text-blue-100 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li className="text-blue-50">/</li>
                  <li className="text-blue-50">Our Specialities</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>*/}

        {/* Banner Section */}
        <Banner 
          title="Our Specialities"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Our Specialities' }
          ]}
        />
        

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Comprehensive Healthcare Services
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                At LifeCare Hospital, we bring together world-class medical expertise and cutting-edge technology to provide comprehensive healthcare across various specialities. Our team of highly skilled specialists is dedicated to delivering personalized care with compassion and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Specialities Grid */}
        <Specialities />
        
        {/* Healthcare Services Steps */}
        <HealthcareServices />

        {/* Emergency Care Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-12 sm:p-12">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    24/7 Emergency Care
                  </h2>
                  <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                    Our emergency department is staffed with experienced emergency physicians and equipped with advanced life support systems to provide immediate care for critical conditions.
                  </p>
                  <div className="mt-8">
                    <a
                      href="tel:+919876543210"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                    >
                      <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call Emergency: +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
