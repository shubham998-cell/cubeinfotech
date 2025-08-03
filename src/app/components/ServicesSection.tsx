import Image from "next/image";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 w-full px-6 md:px-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        What We Serve
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Service Card */}
        <article className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <Image
            src="/ecommerce-development.jpg"
            alt="Ecommerce Development"
            width={400}
            height={200}
            className="rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Ecommerce Development</h3>
          <p className="text-gray-700 flex-grow">
            Powerful ecommerce solutions tailored to your business needs.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition self-start"
          >
            Learn More
          </a>
        </article>

        <article className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <Image
            src="/digital-marketing.jpg"
            alt="Digital Marketing"
            width={400}
            height={200}
            className="rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
          <p className="text-gray-700 flex-grow">
            Innovative marketing strategies to boost your online presence.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition self-start"
          >
            Learn More
          </a>
        </article>

        <article className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <Image
            src="/website-design.jpg"
            alt="Website Design & Development"
            width={400}
            height={200}
            className="rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Website Design & Development
          </h3>
          <p className="text-gray-700 flex-grow">
            Custom websites designed to engage and convert visitors.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition self-start"
          >
            Learn More
          </a>
        </article>
      </div>
    </section>
  );
}
