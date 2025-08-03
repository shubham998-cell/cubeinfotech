import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center gap-10 py-20 bg-[#1a237e] rounded-lg px-6 md:px-20 w-full overflow-hidden"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left text-white z-10">
        <h1 className="text-5xl font-extrabold leading-tight">
          <span className="opacity-30">Website Design</span> <br />
          <span className="text-white">Web Design</span> <br />
          <span className="text-white">
            Company in <span className="text-orange-500">Toronto</span>
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-white">
          Improve your online presence with Cube InfoTech. Connect with audience
          through a strategic approach. Be memorable with an SEO friendly &
          innovative website. Cube InfoTech is your website design company in
          Toronto.
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a
            href="#portfolio"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold border-2 border-white hover:bg-orange-50 transition"
          >
            Contact Today!
          </a>
        </div>
      </div>

      {/* Right Content - Woman Image */}
      <div className="md:w-1/2 relative w-full h-[400px] z-10">
        <Image
          src="/woman-hero.png"
          alt="Woman thinking about web design"
          fill
          className="object-contain"
          priority
        />

        {/* Floating Icons */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <Image src="/icon-1.png" alt="Devices Icon" width={32} height={32} />
        </div>
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <Image
            src="/icon-2.png"
            alt="Wireframe Icon"
            width={32}
            height={32}
          />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <Image src="/icon-3.png" alt="Rocket Icon" width={32} height={32} />
        </div>
      </div>

      {/* Background Shape Behind Woman */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full opacity-10 z-0" />
    </section>
  );
}
