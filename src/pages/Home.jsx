import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wifi, Home as HomeIcon, Coffee, Utensils, Droplets, MapPin, Star, ArrowRight } from 'lucide-react';

import room2 from '../assets/room-2.webp';
import exterior1 from '../assets/food-1.avif';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>Best PG in Newtown Kolkata | Meridian Homestay</title>
        <meta name="description" content="Affordable PG in Newtown Kolkata with food, WiFi, AC rooms. Book now at Meridian Homestay for boys, girls, professionals and families." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with animated scale effect */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={room2} 
            alt="Comfortable PG Room in Newtown" 
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center mt-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl flex flex-col items-center"
          >
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 font-medium text-sm md:text-base mb-8 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span>Premium Accommodation in Kolkata</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5rem] font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
              Elevate Your Stay in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Newtown</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed drop-shadow-md">
              Experience the perfect blend of comfort, hygiene, and modern amenities. Fully furnished rooms with home-cooked food.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a 
                href="https://wa.me/916290381799"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-600/40 hover:-translate-y-1 hover:shadow-blue-600/60 flex items-center justify-center gap-2 min-w-[200px]"
              >
                Book via WhatsApp
              </a>
              <a 
                href="tel:+918282895500"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white rounded-full font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px]"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-6 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply blur-2xl opacity-70"></div>
              <img src={exterior1} alt="Meridian Homestay Building" className="rounded-3xl shadow-2xl relative z-10 object-cover h-[500px] w-full" />
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-gray-900">4.9/5</p>
                    <p className="text-gray-500 font-medium text-sm text-center">Top Rated</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="font-heading text-blue-600 font-semibold tracking-wide uppercase text-sm">About Us</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Your Home Away From Home</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to Meridian Homestay, a premium PG accommodation located in the heart of Newtown, Kolkata. We provide a safe, comfortable, and modern living environment tailored for working professionals, students, and families.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience hassle-free living with our all-inclusive amenities. Relax in well-furnished rooms, enjoy hygienic home-cooked meals, and stay connected with high-speed internet.
              </p>
              <ul className="grid grid-cols-2 gap-4 pt-6">
                {[
                  'Fully Furnished Rooms', 'Hygienic Food', 
                  '24/7 Security', 'Prime Location'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                 <Link to="/facilities" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    Explore our facilities 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Pricing */}
      <section className="py-24 px-4 md:px-6 bg-zinc-50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Pricing</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Affordable & Transparent</h3>
            <p className="text-gray-600 text-lg">Choose a plan that fits your lifestyle. All our plans provide exceptional value and comfort.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300">
              <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">Double Sharing</h4>
              <p className="text-gray-500 mb-6 font-medium text-sm">Perfect for students & professionals</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">₹7,000</span>
                <span className="text-gray-500 font-medium">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600"><Utensils className="w-5 h-5 text-blue-500" /> Food Included</li>
                <li className="flex items-center gap-3 text-gray-600"><Wifi className="w-5 h-5 text-blue-500" /> Free WiFi</li>
                <li className="flex items-center gap-3 text-gray-600"><HomeIcon className="w-5 h-5 text-blue-500" /> Fully Furnished</li>
              </ul>
              <Link to="/rooms" className="block w-full py-3 px-6 text-center text-blue-600 bg-blue-50 hover:bg-blue-100 font-semibold rounded-xl transition-colors">View Details</Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-blue-600 rounded-3xl p-8 border border-blue-500 shadow-xl shadow-blue-600/30 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Popular</div>
              <h4 className="font-heading text-xl font-bold mb-2">Single Bed</h4>
              <p className="text-blue-200 mb-6 font-medium text-sm">Experience maximum comfort</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">₹10,000</span>
                <span className="text-blue-200 font-medium">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><Utensils className="w-5 h-5 text-yellow-400" /> Food Included</li>
                <li className="flex items-center gap-3"><Wifi className="w-5 h-5 text-yellow-400" /> Free WiFi</li>
                <li className="flex items-center gap-3"><HomeIcon className="w-5 h-5 text-yellow-400" /> Fully Furnished</li>
              </ul>
              <Link to="/rooms" className="block w-full py-3 px-6 text-center text-blue-600 bg-white hover:bg-gray-50 font-semibold rounded-xl transition-colors">View Details</Link>
            </motion.div>

            {/* Card 3 */}
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300">
              <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">Single Bed (No Food)</h4>
              <p className="text-gray-500 mb-6 font-medium text-sm">Flexible & budget friendly</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">₹5,000</span>
                <span className="text-gray-500 font-medium">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-400 line-through"><Utensils className="w-5 h-5 opacity-50" /> Food Included</li>
                <li className="flex items-center gap-3 text-gray-600"><Wifi className="w-5 h-5 text-blue-500" /> Free WiFi</li>
                <li className="flex items-center gap-3 text-gray-600"><HomeIcon className="w-5 h-5 text-blue-500" /> Fully Furnished</li>
              </ul>
              <Link to="/rooms" className="block w-full py-3 px-6 text-center text-blue-600 bg-blue-50 hover:bg-blue-100 font-semibold rounded-xl transition-colors">View Details</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="font-heading text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Premium Amenities</h2>
             <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Everything You Need</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Wifi, label: 'Free WiFi' },
              { icon: Droplets, label: '24hr Water' },
              { icon: Utensils, label: 'Daily Meals' },
              { icon: Coffee, label: 'AC Rooms' },
            ].map((facility, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-50 border border-gray-100 text-center hover:shadow-lg transition-shadow group cursor-default">
                <div className="w-14 h-14 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  <facility.icon className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-semibold text-gray-900">{facility.label}</h4>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/facilities" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
              View all 10+ facilities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>



      {/* Map Embed Section */}
      <section className="py-24 px-4 md:px-6 bg-white overflow-hidden">
        <div className="container mx-auto">
           <div className="flex flex-col lg:flex-row gap-12 items-center bg-zinc-50 rounded-3xl p-6 md:p-10 border border-gray-100 shadow-xl">
             <div className="lg:w-1/2 space-y-6">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold text-sm">
                  <MapPin className="w-4 h-4" /> Discover Our Location
               </div>
               <h3 className="font-heading text-3xl font-bold text-gray-900 leading-tight">Conveniently Located in Newtown</h3>
               <p className="text-gray-600 text-lg">
                 Situated in Dharmatala Panchuria, our PG is centrally located near top IT parks, colleges, and shopping centers keeping you close to everything you need.
               </p>
               <a 
                 href="https://maps.app.goo.gl/uwxMc6MwNmJEXVxMA?g_st=ic" 
                 target="_blank" rel="noreferrer"
                 className="inline-block mt-4 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-colors"
               >
                 Get Directions
               </a>
             </div>
             <div className="lg:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-inner border border-gray-200">
                <iframe 
                  src="https://maps.google.com/maps?q=Dharmatala%20Panchuria,%20Newtown,%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Meridian Homestay Location"
                ></iframe>
             </div>
           </div>
        </div>
      </section>
    </>
  );
}
