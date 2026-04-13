export default function PageHeader({ title, subtitle }) {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
