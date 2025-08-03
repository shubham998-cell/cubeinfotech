import Image from "next/image";

export default function USPSection() {
  return (
    <section
      id="usp"
      className="py-20 max-w-[1440px] mx-auto px-6 md:px-20 w-full"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <article>
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p className="text-gray-700 mb-4">
            Over 10 years of delivering quality web solutions.
          </p>
          <Image
            src="/experience-icon.svg"
            alt="Experience Icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        </article>
        <article>
          <h3 className="text-xl font-semibold mb-2">Products</h3>
          <p className="text-gray-700 mb-4">
            Innovative products tailored to your business needs.
          </p>
          <Image
            src="/products-icon.svg"
            alt="Products Icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        </article>
        <article>
          <h3 className="text-xl font-semibold mb-2">Support</h3>
          <p className="text-gray-700 mb-4">
            Dedicated support to ensure your success.
          </p>
          <Image
            src="/support-icon.svg"
            alt="Support Icon"
            width={60}
            height={60}
            className="mx-auto"
          />
        </article>
      </div>
    </section>
  );
}
