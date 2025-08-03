import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gray-50 max-w-[1440px] mx-auto px-6 md:px-20 w-full"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Our Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Image
          src="/portfolio1.jpg"
          alt="Portfolio project 1"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/portfolio2.jpg"
          alt="Portfolio project 2"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/portfolio3.jpg"
          alt="Portfolio project 3"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/portfolio4.jpg"
          alt="Portfolio project 4"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
