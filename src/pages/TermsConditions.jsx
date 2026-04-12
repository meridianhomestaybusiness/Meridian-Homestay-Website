import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';

export default function TermsConditions() {
  const lastUpdated = "April 12, 2026";

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Meridian Homestay</title>
        <meta name="description" content="Terms and Conditions for staying at Meridian Homestay. Please read our guidelines for a comfortable and respectful stay." />
      </Helmet>

      <PageHeader 
        title="Terms & Conditions" 
        subtitle="Please read these terms and conditions carefully as they outline the rules and expectations for residents at Meridian Homestay."
      />

      <section className="py-20 px-4 md:px-6 bg-white min-h-[50vh]">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-blue max-w-none text-gray-600 space-y-12"
          >
            {/* 1. Admission and Registration */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">1. Admission and Registration</h2>
              <p className="leading-relaxed">
                Admission to Meridian Homestay is at the sole discretion of the management. All residents must provide valid government-issued ID proof (Aadhaar, Voter ID, Passport, etc.) and, if requested, proof of employment or student status during the registration process. 
              </p>
            </div>

            {/* 2. Rent and Payments */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">2. Rent and Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Payment Schedule:</strong> Rent must be paid in advance by the 5th of every month. Delayed payments may attract a late fee as decided by the management.</li>
                <li><strong>Rent Structure:</strong> The rent amount is fixed as per the plan selected (Single Bed/Double Sharing) and may be revised periodically with prior notice.</li>
              </ul>
            </div>

            {/* 3. Security Deposit and Notice Period */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">3. Security Deposit and Refund</h2>
              <p className="leading-relaxed mb-4">
                A refundable security deposit (equivalent to one month’s setup charge) must be paid at the time of admission. 
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Notice Period:</strong> Residents are required to give a minimum of <strong>30 days' notice</strong> before vacating the premises.</li>
                <li><strong>Refund:</strong> The deposit will be refunded after adjusting any pending dues or damages caused to the property. Failure to provide sufficient notice will lead to the forfeiture of the deposit.</li>
              </ul>
            </div>

            {/* 4. Amenities and Utilities */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">4. Amenities and Utilities</h2>
              <p className="leading-relaxed">
                Standard amenities like high-speed WiFi, 24/7 water supply, and common facilities are included in the rent. For AC rooms, electricity usage is measured via sub-meters and charged extra based on the consumption, unless stated otherwise in your specific plan.
              </p>
            </div>

            {/* 5. Code of Conduct */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">5. House Rules and Conduct</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Noise:</strong> Residents must maintain a peaceful environment, especially between 10:00 PM and 7:00 AM.</li>
                <li><strong>Cleanliness:</strong> Keeping individual rooms and common areas clean is a shared responsibility. Trash must be disposed of only in designated bins.</li>
                <li><strong>Visitors:</strong> Male and female visitors are restricted to the common lounge areas only. Overnight stays for guests are not permitted unless specifically approved by the management.</li>
                <li><strong>Safety:</strong> Possession of illegal substances, weapons, or any flammable material is strictly prohibited.</li>
              </ul>
            </div>

            {/* 6. Maintenance and Damages */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">6. Maintenance and Damages</h2>
              <p className="leading-relaxed">
                Management reserves the right to inspect rooms for maintenance or safety checks. Any damage to furniture, fixtures, or walls caused by a resident will be repaired at the resident's cost.
              </p>
            </div>

            {/* 7. Termination of Stay */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">7. Termination of Stay</h2>
              <p className="leading-relaxed">
                The management reserves the right to terminate the stay of any resident with immediate effect in case of a breach of conduct, non-payment of rent, or any illegal activities.
              </p>
            </div>

            {/* 8. Liability */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">8. Liability</h2>
              <p className="leading-relaxed">
                Meridian Homestay is not responsible for the loss, theft, or damage of any personal belongings. Residents are advised to keep their valuables secure.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-zinc-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="leading-relaxed mb-6">
                If you have any questions regarding these Terms and Conditions, please reach out to us:
              </p>
              <div className="space-y-3 font-semibold text-gray-900">
                <p>Location: Dharmatala Panchuria, Newtown, Kolkata</p>
                <p>WhatsApp: +91 6290381799</p>
                <p>Management Numbers: +91 8282895500 / +91 9051741292</p>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                Jurisdiction: All disputes are subject to the exclusive jurisdiction of the courts in Kolkata.
              </p>
            </div>

            {/* Last Updated */}
            <div className="pt-10 border-t border-gray-100 text-sm text-gray-400 text-center">
              <p>Last Updated: {lastUpdated}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
