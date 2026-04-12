import { Star } from 'lucide-react';

export default function Reviews() {
  const reviewsData = [
    { text: "Best PG in Newtown. The food is exactly like home, and everything is super clean. The high-speed internet is perfect for my WFH setup.", name: "Rahul S.", role: "Software Engineer" },
    { text: "Safe and secure environment for girls. The staff is very polite and always ready to help. Highly recommend the AC single rooms.", name: "Priya D.", role: "Student" },
    { text: "Great pricing for the facilities provided. 24/7 water supply and washing machine availability make life so much easier.", name: "Amit K.", role: "Working Professional" }
  ];

  return (
    <section className="py-24 px-4 md:px-6 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">What Our Residents Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviewsData.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-8">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">{review.name}</h5>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
