import Head from 'next/head';
import { Specialities } from '@/components/Specialities';
import { Banner } from '@/components/ui/Banner';
import HealthcareServices from '@/components/HealthcareServices';
import { ConsultationBanner } from '@/components/ConsultationBanner';
import { EmergencyContactSection } from '@/components/EmergencyContactSection';

export default function OurSpecialities() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Our Specialities - LifeCare Hospital</title>
        <meta name="description" content="Explore our comprehensive range of medical specialities and expert healthcare services at LifeCare Hospital." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-grow">
        <main>
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
          
          {/* Emergency Contact Section */}
          <div className="pt-16 md:pt-20">
            <EmergencyContactSection noBottomPadding={true} />
          </div>
        </main>

        {/* Consultation Banner - Above Footer */}
        <div className="mt-auto">
          <ConsultationBanner />
        </div>
      </div>
    </div>
  );
}
