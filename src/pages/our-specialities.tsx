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
        

{/* Specialities Grid */}
        <Specialities />
        
        {/* Healthcare Services Steps */}
        <HealthcareServices />
      </main>
    </div>
  );
}
