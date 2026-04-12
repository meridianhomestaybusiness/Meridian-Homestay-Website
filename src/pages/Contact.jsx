import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/common/PageHeader';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const text = `Hello Meridian Homestay!\n\n*New Inquiry from Website*\n*Name:* ${name}\n*Phone:* ${phone}\n*Message:* ${message || "I'm interested in booking a stay."}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/916290381799?text=${encodedText}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Meridian Homestay</title>
        <meta name="description" content="Get in touch with Meridian Homestay. Address: Dharmatala Panchuria, Newtown. Call or WhatsApp us to book your fast stay." />
      </Helmet>

      <PageHeader 
        title="Contact & Reach Us" 
        subtitle="We're here to help! Reach out for bookings, queries, or just a quick tour."
      />

      <section className="py-20 px-4 md:px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Details side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              className="lg:w-1/3 space-y-8"
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Ways to Connect</h3>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a href="https://wa.me/916290381799" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">WhatsApp Booking</p>
                      <p className="text-gray-900 font-bold group-hover:text-green-600 transition-colors">+91 6290381799</p>
                    </div>
                  </a>

                  {/* Calls */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-gray-100 hover:shadow-md transition-shadow group cursor-default">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Call Booking Team</p>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+918282895500" className="text-gray-900 font-bold hover:text-blue-600 transition-colors">+91 8282895500</a>
                        <a href="tel:+919051741292" className="text-gray-900 font-bold hover:text-blue-600 transition-colors">+91 9051741292</a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <a href="mailto:swapnakuley462@gmail.com" className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Email Us</p>
                      <p className="text-gray-900 font-bold group-hover:text-red-600 transition-colors">swapnakuley462@gmail.com</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-gray-100 hover:shadow-md transition-shadow cursor-default">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">PG Location</p>
                      <p className="text-gray-900 font-semibold leading-snug">Dharmatala Panchuria, Newtown, Kolkata</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-2/3 bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 shadow-blue-900/5 relative overflow-hidden"
            >
              {/* Form decor */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10"></div>
              
              <h3 className="font-heading text-3xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600 mb-8">We usually reply within a few hours. For immediate assistance, use WhatsApp.</p>
              
              <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-900">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-zinc-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-900">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-zinc-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" 
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-900">Your Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-zinc-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium resize-none" 
                    placeholder="I'm looking for a premium single room..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all">
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <div className="h-[400px] w-full">
         <iframe 
            src="https://maps.google.com/maps?q=Dharmatala%20Panchuria,%20Newtown,%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Meridian Homestay Map"
          ></iframe>
      </div>
    </>
  );
}
