export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 bg-gray-50 max-w-[1440px] mx-auto px-6 md:px-20 w-full"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <dl className="space-y-6">
        <div>
          <dt className="font-semibold text-lg">What services do you offer?</dt>
          <dd className="mt-2 text-gray-700">
            We offer web design, ecommerce development, digital marketing, and
            more.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-lg">
            How long does a project take?
          </dt>
          <dd className="mt-2 text-gray-700">
            Project timelines vary depending on scope, but typically range from
            4-12 weeks.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-lg">
            Do you provide ongoing support?
          </dt>
          <dd className="mt-2 text-gray-700">
            Yes, we offer maintenance and support packages to keep your website
            updated.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-lg">Can you help with SEO?</dt>
          <dd className="mt-2 text-gray-700">
            Absolutely, SEO is a core part of our web development process.
          </dd>
        </div>
      </dl>
    </section>
  );
}
