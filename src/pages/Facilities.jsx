import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/common/PageHeader';
import { Wifi, Droplet, UtensilsCrossed, MonitorPlay, Dumbbell, Car, WashingMachine, Refrigerator, ConciergeBell } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Facilities() {
  const facilitiesList = [
    { icon: Wifi, title: "High-Speed WiFi", desc: "Uninterrupted fiber-optic internet connection perfect for WFH setup." },
    { icon: Droplet, title: "24/7 Water Supply", desc: "Consistent hot and cold water availability throughout the year." },
    { icon: UtensilsCrossed, title: "Home-like Food", desc: "Hygienic Breakfast, Dinner, and Evening Snacks prepared daily." },
    { icon: MonitorPlay, title: "AC & Non-AC Rooms", desc: "Choose room types tailored exactly to your comfort needs." },
    { icon: Dumbbell, title: "Gym Facility", desc: "Stay fit with our basic in-house fitness equipment." },
    { icon: Car, title: "Secured Parking", desc: "Safe parking space for your bikes and cars inside the premises." },
    { icon: WashingMachine, title: "Washing Machines", desc: "Free access to automatic washing machines for your laundry." },
    { icon: Refrigerator, title: "Refrigerator", desc: "Common refrigerators available on every floor for storage." },
    { icon: ConciergeBell, title: "Room Service", desc: "Regular cleaning and housekeeping done by dedicated staff." }
  ];

  return (
    <>
      <Helmet>
        <title>Facilities & Amenities | Meridian Homestay</title>
        <meta name="description" content="Explore everything Meridian Homestay offers: high-speed WiFi, 24/7 water, AC rooms, daily food, parking, and gym facilities." />
      </Helmet>

      <PageHeader 
        title="Premium Facilities" 
        subtitle="Enjoy a hassle-free lifestyle with our comprehensive list of modern amenities."
      />

      <section className="py-20 px-4 md:px-6 bg-white min-h-[50vh]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesList.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-8 rounded-3xl bg-zinc-50 hover:bg-blue-600 transition-colors duration-300 border border-gray-100 shadow-lg"
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl shadow-sm text-blue-600 mb-6 group-hover:text-blue-600 transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-blue-100 transition-colors leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
