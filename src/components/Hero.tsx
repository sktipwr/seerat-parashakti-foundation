import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="mb-8">
          <Image src="/logo.jpg" alt="Seerat Parashakti Foundation" width={100} height={100} className="mx-auto rounded-full shadow-lg shadow-pink-200/50" />
        </div>
        <div className="inline-flex items-center gap-2 bg-pink-100/80 text-primary-dark px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Empowering Communities Since 2025
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          <span className="text-gray-900">For </span>
          <span className="text-primary">Rights</span>
          <span className="text-gray-900">, For </span>
          <span className="text-accent">Justice</span>
          <span className="text-gray-900">,</span>
          <br />
          <span className="text-gray-900">For </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Change
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Seerat Parashakti Foundation is dedicated to empowering women and
          children through free legal aid, awareness campaigns, and grassroots
          community action across India.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#initiatives"
            className="bg-primary text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-pink-200"
          >
            Our Initiatives
          </a>
          <a
            href="#about"
            className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-full text-base font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            Learn More
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            { number: "1+", label: "Year of Service" },
            { number: "500+", label: "Lives Impacted" },
            { number: "10+", label: "Campaigns" },
            { number: "3", label: "Founders" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
