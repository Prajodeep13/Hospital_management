import Image from "next/image";

const WhyChoose = () => {
  return (
    <section className="bg-[#1b3a3f] text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-300">
            Why Choose QA Stem Cell Center For Stem Cell Treatment?
          </h2>
          <p className="mb-6 text-gray-300">
            Gurugram and Rishikesh are top destinations for regenerative medicine, offering world-class infrastructure, affordable treatments, expert healthcare, and robust medical tourism support.
          </p>

          <div className="space-y-6 text-sm md:text-base text-gray-200">
            <div>
              <p className="font-semibold text-white">World-Class Infrastructure</p>
              <p>
                Gurugram and Rishikesh provide cutting-edge hospitals and clinics. QA Stem Cell Center’s modern labs and treatment rooms ensure optimal results.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">Affordable Care</p>
              <p>
                Gurugram and Rishikesh deliver top-tier medical care at a fraction of global costs. QA Stem Cell Center offers transparent pricing for comprehensive stem cell therapy.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">Expert Healthcare Professionals</p>
              <p>
                Gurugram and Rishikesh boast highly skilled stem cell therapy specialists. QA Stem Cell Center’s knowledgeable doctors ensure excellent care throughout the patient experience.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <Image
            src="/images/image13.png"
            alt="QA Stem Cell Center doctor with patient"
            width={400}
            height={400}
            className="w-full rounded-lg shadow-lg object-cover h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
