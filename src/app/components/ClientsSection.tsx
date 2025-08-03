import Image from "next/image";

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="py-20 bg-gray-50 max-w-[1440px] mx-auto px-6 md:px-20 w-full"
    >
      <div className="flex flex-wrap justify-center items-center gap-10">
        <Image
          src="/forbes-logo.png"
          alt="Forbes"
          width={120}
          height={40}
          className="object-contain"
        />
        <Image
          src="/netflix-logo.png"
          alt="Netflix"
          width={120}
          height={40}
          className="object-contain"
        />
        <Image
          src="/amazon-logo.png"
          alt="Amazon"
          width={120}
          height={40}
          className="object-contain"
        />
        <Image
          src="/sej-logo.png"
          alt="SEJ"
          width={120}
          height={40}
          className="object-contain"
        />
        <Image
          src="/entrepreneur-logo.png"
          alt="Entrepreneur"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
    </section>
  );
}
