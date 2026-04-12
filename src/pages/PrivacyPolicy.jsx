import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const lastUpdated = "April 12, 2026";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Meridian Homestay</title>
        <meta name="description" content="Privacy Policy for Meridian Homestay. Learn how we handle your information with transparency and care." />
      </Helmet>

      <PageHeader 
        title="Privacy Policy" 
        subtitle="We value your privacy. This policy explains how we handle your information when you interact with our website or services."
      />

      <section className="py-20 px-4 md:px-6 bg-white min-h-[50vh]">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-blue max-w-none text-gray-600 space-y-12"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to <strong>Meridian Homestay</strong>. We provide premium PG accommodation in Newtown, Kolkata. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Data:</strong> Name and phone number (collected via our website contact form or when you reach out to us on WhatsApp).</li>
                <li><strong>Inquiry Data:</strong> Any specific details about your stay or preferences you share with us during your inquiry.</li>
              </ul>
              <p className="mt-4 leading-relaxed italic">
                Note: We do not collect any sensitive personal data, nor do we process online payments through this website.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect solely for the purpose of helping you find the right accommodation. Specifically, we use it to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your booking inquiries and questions.</li>
                <li>Communicate with you regarding our PG services, availability, and pricing.</li>
                <li>Provide you with updates or information you have requested.</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">4. Data Protection</h2>
              <p className="leading-relaxed font-body">
                We take reasonable steps to protect the information you share with us. Access to your contact information is limited to our management team for the sole purpose of assisting you. While no internal or external transmission of data can be guaranteed as 100% secure, we do our best to ensure your details are handled with care.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
              <p className="leading-relaxed">
                Our website uses <strong>Google Maps</strong> to help you visualize our location in Newtown. Google may collect certain data when you interact with the map as per their own privacy policies. We also use <strong>WhatsApp</strong> as a primary communication channel; your interaction on WhatsApp is subject to WhatsApp's own terms and privacy policy.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">6. Cookies</h2>
              <p className="leading-relaxed">
                We may use basic cookies to enhance your experience on our website (such as remembering your preferences or analyzing site traffic). You can choose to set your web browser to refuse cookies, although some parts of the site may not function properly as a result.
              </p>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to ask us what information we hold about you and to ask for it to be corrected or deleted. If you would like to exercise these rights, please contact us using the details below.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-zinc-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="leading-relaxed mb-6">
                For any questions regarding this Privacy Policy, you can reach the <strong>Meridian Homestay</strong> management team:
              </p>
              <div className="space-y-3 font-semibold text-gray-900">
                <p>Location: Dharmatala Panchuria, Newtown, Kolkata</p>
                <p>WhatsApp: +91 6290381799</p>
                <p>Call: +91 8282895500 / +91 9051741292</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-10 border-t border-gray-100 text-sm text-gray-400">
              <p>Last Updated: {lastUpdated}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
