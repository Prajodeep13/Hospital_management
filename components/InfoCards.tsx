import Image from "next/image";

const cardData = [
  {
    id: "treatments",
    title: "Treatments",
    image: "/images/image14.jpg",
    description:
      "Regenerative Medicine – Outpatient Stem Cell Therapy with Injections, IV, Intrathecal, Intranasal & Nebulizer.",
  },
  {
    id: "indications",
    title: "Indications",
    image: "/images/image14.jpg",
    description:
      "Musculoskeletal, Neurologic, Parkinson’s, Alzheimer’s, Diabetes Type I and II, COPD, Liver Disease, Cardiac/Kidney/Lung Disease & Cosmetic.",
  },
  {
    id: "doctors",
    title: "Doctors",
    image: "/images/image14.jpg",
    description:
      "Expert Stem Cell Doctors with extensive Regenerative Medicine experience overseeing your care. Chaperoned transportation, same day there and back!",
  },
  {
    id: "faqs",
    title: "FAQs",
    image: "/images/image14.jpg",
    description:
      "The most common questions answered about Regenerative Medicine & Stem Cell Therapy and how it can help you. Learn from the experts!",
  },
];

const InfoCards = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore More at QA Stem Cell Center
        </h2>
        <p className="text-gray-600 text-sm">
          Learn about our cutting-edge treatments, conditions we help with, and the expert care you'll receive.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center p-6 text-center h-full"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-md font-bold text-[#a03821] mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-gray-700 mb-6">{card.description}</p>
            <a
              id={card.id}
              href={`#${card.id}`}
              className="bg-red-300 text-black font-medium px-4 py-2 rounded hover:bg-yellow-400 transition-all"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
