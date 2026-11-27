import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery/school-outreach.webp",
    title: "School Outreach Programme",
    description: "Educating students about their rights at Naharpur school",
  },
  {
    src: "/images/gallery/book-distribution.webp",
    title: "Book Distribution Drive",
    description: "Distributing 'All in One' reading books and stationery to children",
  },
  {
    src: "/images/gallery/community-outreach.webp",
    title: "Community Connect",
    description: "Reaching out to children in neighbourhoods across Haryana",
  },
  {
    src: "/images/gallery/children-smiles.webp",
    title: "Spreading Smiles",
    description: "Building bonds with children through love and care",
  },
  {
    src: "/images/gallery/giving-books.png",
    title: "Education for All",
    description: "Ensuring every child has access to learning materials",
  },
  {
    src: "/images/gallery/field-visit.webp",
    title: "Field Visit",
    description: "Visiting underserved communities to understand their needs",
  },
  {
    src: "/images/gallery/awareness-talk.png",
    title: "Awareness Session",
    description: "Conducting interactive sessions on rights and safety",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Moments That Matter
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every event, every camp, every smile — a step towards the change we
            envision.
          </p>
        </div>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="break-inside-avoid rounded-2xl overflow-hidden group relative bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-white/80 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/seeratparashaktifoundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
