export default function AboutSection() {
  return (
    <section id="about" className="py-20 w-full px-6 md:px-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        The Results Speak for Themselves
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="bg-black text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
            Clients Served Worldwide
          </h3>
          <p className="text-4xl font-bold">500+</p>
        </article>
        <article className="bg-black text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
            Projects Successfully Completed
          </h3>
          <p className="text-4xl font-bold">700+</p>
        </article>
        <article className="bg-black text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
            Revenue Generated for Clients
          </h3>
          <p className="text-4xl font-bold">$200M+</p>
        </article>
      </div>
    </section>
  );
}
