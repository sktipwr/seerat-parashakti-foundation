import Image from "next/image";

const founders = [
  {
    name: "Adv. Pavitra Yadav",
    role: "Director & Co-Founder",
    bio: "An advocate and Ph.D. scholar, Pavitra brings deep legal expertise and academic rigour to the foundation's mission. Her passion for justice drives the foundation's legal aid initiatives.",
    credentials: ["Advocate", "Ph.D. Scholar", "DBA GGM"],
    instagram: "https://www.instagram.com/yaduvanshi_pavitra/",
    photo: "/images/founders/pavitra.webp",
  },
  {
    name: "Sheetal Chauhan",
    role: "Director & Co-Founder",
    bio: "A dedicated social worker and visionary leader, Sheetal's commitment to community welfare and women's empowerment has been instrumental in shaping the foundation's outreach programmes.",
    credentials: ["Social Worker", "Community Leader"],
    instagram: "https://www.instagram.com/ctlchauhan/",
    photo: "/images/founders/sheetal.webp",
  },
  {
    name: "Adv. Nisha Rana",
    role: "Director & Co-Founder",
    bio: "An advocate and student leader, Nisha combines legal practice with grassroots activism. Her energy and leadership drive the foundation's campaigns for safety and equality.",
    credentials: ["Advocate", "Student Leader"],
    instagram: "https://www.instagram.com/i.nisharana/",
    photo: "/images/founders/nisha.png",
  },
];

export default function Founders() {
  return (
    <section id="founders" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Meet the Founders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three women united by a shared vision of justice, equality, and
            empowerment for all.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="text-center group"
            >
              <div className="relative inline-block">
                <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    width={176}
                    height={176}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-md">
                  <span className="text-xs font-semibold text-primary">
                    Co-Founder
                  </span>
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {founder.name}
              </h3>
              <p className="text-primary font-medium">{founder.role}</p>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {founder.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="text-xs bg-pink-50 text-primary-dark px-3 py-1 rounded-full font-medium"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {founder.bio}
              </p>

              <a
                href={founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
