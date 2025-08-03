import Image from "next/image";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-20 max-w-[1440px] mx-auto px-6 md:px-20 w-full"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        See Our Blog Post
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/blog1.jpg"
            alt="Blog post 1"
            width={400}
            height={250}
            className="object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">
              How to boost your website traffic
            </h3>
            <p className="text-gray-700 text-sm">
              Learn effective strategies to increase your website visitors.
            </p>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/blog2.jpg"
            alt="Blog post 2"
            width={400}
            height={250}
            className="object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">
              Digital marketing trends in 2024
            </h3>
            <p className="text-gray-700 text-sm">
              Stay ahead with the latest marketing techniques and tools.
            </p>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/blog3.jpg"
            alt="Blog post 3"
            width={400}
            height={250}
            className="object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">
              SEO best practices for startups
            </h3>
            <p className="text-gray-700 text-sm">
              Optimize your site for search engines and improve rankings.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
