import { Helmet } from "react-helmet-async";
import PageHeader from "../components/common/PageHeader";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Sparkles, Utensils } from "lucide-react";

import room1 from "../assets/pg_img4.avif";
import room2 from "../assets/pg_img3.avif";
import room3 from "../assets/pg_img8.avif";

export default function RoomsPricing() {
  const plans = [
    {
      title: "Double Sharing",
      price: "₹7,000",
      subtitle: "With Food / Month",
      popular: true,
      image: room1,
      features: [
        "Spacious sharing room",
        "3 meals + evening snacks",
        "High-speed WiFi included",
        "24/7 Water supply",
        "Room cleaning service",
        "Washing machine access",
      ],
    },
    {
      title: "Single Bed (Premium)",
      price: "₹10,000",
      subtitle: "With Food / Month",
      popular: false,
      image: room2,
      features: [
        "Private AC / Non-AC room",
        "3 meals + evening snacks",
        "High-speed WiFi included",
        "24/7 Water supply",
        "Room cleaning service",
        "Washing machine access",
      ],
    },
    {
      title: "Single Bed (Economy)",
      price: "₹5,000",
      subtitle: "Without Food / Month",
      popular: false,
      image: room3,
      features: [
        "Private room setup",
        "High-speed WiFi included",
        "24/7 Water supply",
        "Room cleaning service",
        "Washing machine access",
        "No meals included",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Rooms & Pricing | Meridian Homestay</title>
        <meta
          name="description"
          content="View affordable room pricing at Meridian Homestay Newtown. Options for single bed, double sharing with or without food."
        />
      </Helmet>

      <PageHeader
        title="Rooms & Pricing"
        subtitle="Transparent pricing for premium comfort. No hidden fees."
      />

      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl p-8 border ${plan.popular ? "border-blue-500 bg-blue-600 text-white shadow-xl shadow-blue-500/20 relative" : "border-gray-200 bg-white text-gray-900 shadow-lg"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-yellow-900 text-sm font-bold rounded-full border-4 border-white shadow-sm flex items-center gap-1 z-10">
                    <Sparkles className="w-4 h-4" /> HIGHEST VALUE
                  </div>
                )}

                <div className="w-full h-48 rounded-xl overflow-hidden mb-6 mt-2 relative group isolate">
                  <img src={plan.image} alt={plan.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply"></div>
                </div>

                <h3 className="font-heading text-2xl font-bold mb-2 text-center">
                  {plan.title}
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <div
                    className={`text-sm mt-2 font-medium ${plan.popular ? "text-blue-200" : "text-gray-500"}`}
                  >
                    {plan.subtitle}
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? "text-blue-300" : "text-blue-600"}`}
                      />
                      <span
                        className={
                          plan.popular ? "text-indigo-50" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/916290381799"
                  target="_blank"
                  rel="noreferrer"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? "bg-white text-blue-600 hover:bg-gray-50" : "bg-gray-900 text-white hover:bg-black"}`}
                >
                  Book This Plan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 px-4 bg-zinc-50 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Security Deposit Information
          </h2>
          <p className="text-gray-600 text-lg">
            A refundable security deposit equal to setup charges is required
            during admission. Please contact our management at{" "}
            <a href="tel:+918282895500" className="text-blue-600 font-medium">
              8282895500
            </a>{" "}
            to get exact specific breakdowns based on your room selection.
          </p>
        </div>
      </section>
    </>
  );
}
