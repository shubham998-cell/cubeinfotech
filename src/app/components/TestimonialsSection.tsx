export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 max-w-[1440px] mx-auto px-6 md:px-20 w-full"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        What our clients say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <blockquote className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            "CubeInfoTech transformed our online presence and boosted our sales
            significantly."
          </p>
          <footer className="font-semibold">- John Doe, CEO</footer>
        </blockquote>
        <blockquote className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            "Professional, reliable, and innovative team. Highly recommended!"
          </p>
          <footer className="font-semibold">
            - Jane Smith, Marketing Head
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
