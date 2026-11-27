export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-pink-200 font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Creating Real Change
          </h2>
          <p className="mt-4 text-lg text-pink-100">
            In just over a year, we have reached hundreds of people across
            Haryana and beyond, building a movement for justice and equality.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "500+",
              label: "Women & Children Reached",
              desc: "Through legal aid camps and awareness drives",
            },
            {
              number: "15+",
              label: "Schools Visited",
              desc: "Educating young minds about rights and safety",
            },
            {
              number: "10+",
              label: "Campaigns Run",
              desc: "From safety awareness to gender equality",
            },
            {
              number: "50+",
              label: "Volunteers",
              desc: "A growing network of changemakers",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white">
                {stat.number}
              </div>
              <div className="mt-2 text-lg font-semibold text-pink-100">
                {stat.label}
              </div>
              <div className="mt-1 text-sm text-pink-200">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
