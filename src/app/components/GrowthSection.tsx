export default function GrowthSection() {
  return (
    <section
      id="growth"
      className="py-20 max-w-[1440px] mx-auto px-6 md:px-20 w-full"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        How page traffic creates hyper business growth
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">More Leads</h3>
          <p className="text-gray-700">
            Increase your website traffic and generate more qualified leads.
          </p>
        </article>
        <article className="bg-green-100 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">More Sales</h3>
          <p className="text-gray-700">
            Convert visitors into customers with optimized landing pages.
          </p>
        </article>
        <article className="bg-green-100 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">More Leads</h3>
          <p className="text-gray-700">
            Engage your audience with targeted marketing campaigns.
          </p>
        </article>
        <article className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">More Sales</h3>
          <p className="text-gray-700">
            Build lasting customer relationships through excellent support.
          </p>
        </article>
      </div>
    </section>
  );
}
