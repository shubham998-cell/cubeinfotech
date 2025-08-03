export default function SubscriptionSection() {
  return (
    <section
      id="subscribe"
      className="py-20 bg-green-600 text-white text-center rounded-lg max-w-[1440px] mx-auto px-6 md:px-20"
    >
      <h2 className="text-3xl font-bold mb-6">
        Subscribe to get information, latest news and other interesting offers
        about
      </h2>
      <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
          required
          className="rounded-md px-4 py-3 text-gray-900"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 transition rounded-md px-6 py-3 font-semibold"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
