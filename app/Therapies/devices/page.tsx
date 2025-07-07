"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Waves,
  Dumbbell,
} from "lucide-react";

const therapies = [
  {
    id: 1,
    title: "Ultrasound Therapy – The Sound of Healing",
    description:
      "Ultrasound isn’t just for imaging anymore. In therapeutic form, it uses sound waves to penetrate deep into soft tissues, promoting circulation, decreasing pain, and accelerating tissue repair. For patients undergoing stem cell therapy, ultrasound therapy can be an effective pre-treatment to prepare tissues by enhancing cellular activity and oxygen delivery. It also supports the post-treatment phase by easing inflammation and reducing scar tissue formation.",
    icon: <Waves className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 2,
    title: "Spark/Shock Wave Therapy – Breaking Barriers to Regeneration",
    description:
      "This therapy delivers high-energy sound waves to specific areas of the body, stimulating metabolic activity and encouraging new blood vessel formation (angiogenesis). Especially helpful for orthopedic and musculoskeletal conditions, shock wave therapy can make tissues more receptive to stem cells by breaking down calcifications and improving the microenvironment, thus laying the groundwork for optimal regeneration.",
    icon: <Zap className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 3,
    title: "Super Inductive System – Magnetic Power for Muscles and Joints",
    description:
      "SIS therapy uses extremely high-intensity electromagnetic fields to stimulate muscle contractions and joint stabilization. For patients dealing with muscle atrophy, joint degeneration, or neurological impairments, SIS provides a safe and powerful complement to stem cell treatments. It helps re-educate muscles, improve mobility, and prepare the body for active rehabilitation.",
    icon: <Zap className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 4,
    title: " Electrotherapy – Charging the Body’s Healing Mechanisms",
    description:
      "Electrotherapy involves the use of controlled electrical impulses to reduce pain, improve circulation, and stimulate nerve and muscle function. It’s particularly useful in neurodegenerative conditions or injuries where reactivation of nerves and muscle fibers is critical. Combined with stem cell therapy, electrotherapy can accelerate functional recovery and maintain muscle tone during healing.",
    icon: <Zap className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 5,
    title: "Lymphatic Drainage Therapy – Detoxifying the Pathway to Healing",
    description:
      "The lymphatic system is key to detoxification and immune support. Lymphatic drainage therapy gently stimulates lymph flow, helping the body eliminate waste and inflammation. When patients receive regenerative therapies like stem cell injections, ensuring a clean, flowing lymphatic system maximizes their body’s ability to accept and integrate the treatment.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 6,
    title: "Intravenous Laser Blood Irradiation– Lighting Up the Bloodstream",
    description:
      "ILBI introduces low-level laser light directly into the bloodstream via intravenous access. The light interacts with blood components, enhancing oxygenation, modulating immune response, and improving microcirculation. It primes the body for better stem cell activity and can reduce oxidative stress—one of the major obstacles in tissue repair and regeneration.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 7,
    title: "Plasmapheresis – Cleansing at the Cellular Level",
    description:
      "Think of plasmapheresis as a “reset” for your bloodstream. This procedure filters out harmful components like autoantibodies, toxins, or inflammatory proteins from the plasma. In autoimmune or inflammatory conditions, removing these elements can create a more conducive environment for stem cells to work effectively. It’s often used before or alongside stem cell infusion to prepare the body for a more successful outcome.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 8,
    title: "Radiofrequency Microneedling – Stimulating Skin from Within",
    description:
      "This modern aesthetic and therapeutic treatment combines microneedling with radiofrequency energy to penetrate deeper skin layers, triggering collagen production and improving tissue elasticity. For patients receiving stem cell therapies for dermatological or cosmetic conditions, radiofrequency microneedling opens micro-channels in the skin, allowing regenerative serums or stem cells to be absorbed more effectively.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 9,
    title: "Ultraviolet Blood Irradiation – Light-Enhanced Immune Support",
    description:
      "Like ILBI, this therapy uses ultraviolet light to sterilize and energize the blood. It’s particularly beneficial for immune modulation, increasing the body’s defense mechanisms without overstimulating them. In regenerative medicine, a balanced immune response is crucial for tissue integration and avoiding rejection of introduced cells.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 10,
    title: "Hyperbaric Oxygen Therapy (HBOT) – Fueling the Cells with Oxygen",
    description:
      "HBOT involves breathing pure oxygen in a pressurized chamber, dramatically increasing the amount of oxygen in the bloodstream. This oxygen reaches areas with poor blood supply, reducing inflammation and speeding up tissue repair. For stem cell therapy patients, HBOT improves stem cell viability, encourages angiogenesis, and enhances the therapeutic outcome—especially in cases of neurological or orthopedic injury.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 11,
    title:
      "Magnetic Resonance-Based Stimulation Therapy  – Cellular Revival via Magnetism",
    description:
      "MBST uses magnetic fields similar to MRI but with therapeutic intent. It targets cartilage and bone cells, helping restore structure and function in degenerative joint diseases. This can be a powerful non-invasive supplement to stem cell therapy in conditions like arthritis, where cellular stimulation encourages faster healing and pain relief.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 12,
    title: "Emsella – Reclaiming Core Muscle Strength",
    description:
      "Emsella is a non-invasive therapy that uses high-intensity focused electromagnetic (HIFEM) technology to stimulate pelvic floor muscles. Just one session delivers thousands of muscle contractions. Particularly helpful for urinary incontinence or post-partum recovery, Emsella can support stem cell therapy aimed at pelvic floor regeneration or nerve recovery.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 13,
    title: "High-Intensity Laser Therapy (HILT) – Deep Tissue Rejuvenation",
    description:
      "HILT penetrates deep into tissues using high-powered laser energy. Unlike traditional cold lasers, this therapy can reach muscles, ligaments, and tendons to relieve pain and boost healing. Stem cells thrive in environments with good circulation and energy transfer—HILT creates just that, making it an excellent co-therapy.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 14,
    title:
      "Targeted Radio frequency Therapy (Tecar) – Internal Energy for External Relief",
    description:
      "Tecar therapy uses targeted radiofrequency to increase cellular metabolism and tissue oxygenation. It reduces muscle stiffness and inflammation, preparing the body for stem cell application. Whether used before or after stem cell injections, Tecar can maximize cellular uptake and improve long-term results.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 15,
    title: "R-Force Therapy – Redefining Muscle Activation",
    description:
      "R-Force is a cutting-edge device designed to challenge and train neuromuscular control. It’s often used in rehabilitation and strength-building protocols. For regenerative medicine patients, especially those recovering from neurological conditions or orthopedic surgeries, R-Force helps reconnect mind and muscle, restoring lost function.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 16,
    title: "Theragun Therapy – Percussion for Pain and Mobility",
    description:
      "A favorite among athletes and physical therapists, Theragun uses rapid percussive therapy to relax muscle tension, increase circulation, and reduce pain. When paired with stem cell therapy for muscular or tendon injuries, it can relieve discomfort and improve range of motion during recovery.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 17,
    title: "Spinal Decompression Table Therapy – Space for Healing",
    description:
      "This non-surgical therapy gently stretches the spine to relieve pressure on discs and nerves. Ideal for patients with herniated discs or spinal stenosis, decompression improves blood flow to the spine—making it more responsive to stem cell treatments that aim to regenerate disc material or support spinal repair.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 18,
    title: "Hyperbaric Oxygen Therapy (HBOT) – Fueling the Cells with Oxygen",
    description:
      "HBOT involves breathing pure oxygen in a pressurized chamber, dramatically increasing the amount of oxygen in the bloodstream. This oxygen reaches areas with poor blood supply, reducing inflammation and speeding up tissue repair. For stem cell therapy patients, HBOT improves stem cell viability, encourages angiogenesis, and enhances the therapeutic outcome—especially in cases of neurological or orthopedic injury.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
  {
    id: 10,
    title: "Hyperbaric Oxygen Therapy (HBOT) – Fueling the Cells with Oxygen",
    description:
      "HBOT involves breathing pure oxygen in a pressurized chamber, dramatically increasing the amount of oxygen in the bloodstream. This oxygen reaches areas with poor blood supply, reducing inflammation and speeding up tissue repair. For stem cell therapy patients, HBOT improves stem cell viability, encourages angiogenesis, and enhances the therapeutic outcome—especially in cases of neurological or orthopedic injury.",
    icon: <Dumbbell className="h-8 w-8 text-teal-500" />,
  },
];

export default function RegenerativePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gray-100 overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3,
            }}
          />

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Medical Devices Therapies in Regenerative Medicine
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
                Lets get to know more about Medical devices used in stem cell
                therapy
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl">
          {/* Overview Section */}
          <section className="py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Medical Devices Therapies in Regenerative Medicine
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-3 sm:mb-4">
                In recent years, the world of regenerative medicine has
                undergone a quiet revolution. Once dominated solely by surgical
                interventions and pharmaceutical solutions, it now finds itself
                enriched by the union of advanced medical devices and biological
                therapies. Among the game-changers in this realm is stem cell
                therapy, a treatment that leverages the body’s own potential to
                heal and regenerate. But what if we told you that this process
                could be enhanced—amplified even—by integrating medical
                device-based therapies? This is where cutting-edge, non-invasive
                and minimally invasive medical device therapies step in. From
                advanced laser systems and focused waves to radiofrequency and
                electromagnetic technologies, these devices are transforming how
                we prepare, support, and recover the human body through
                regenerative procedures. Let's dive into these remarkable
                therapies that not only complement stem cell treatment but also
                offer patients a more holistic, accelerated healing journey.
              </p>
            </div>
          </section>

          <section className="py-12">
            <div className="space-y-8">
              {therapies.map((therapy) => (
                <div
                  key={therapy.id}
                  className="border border-teal-300 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-1 ">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      {therapy.id}. {therapy.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed ">
                      {therapy.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
                    {therapy.icon}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              A Holistic Approach to Regeneration
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-3 sm:mb-4 text-base md:text-lg">
                Medical device therapies represent the perfect synergy between
                technology and biology. They don't replace stem cell
                treatments—they amplify them. Think of these devices as the
                scaffolding and support system that prepares the body, enhances
                cell delivery, and optimizes outcomes. Whether it's increasing
                oxygen to cells, reducing inflammation, or stimulating muscle
                and nerve recovery, these therapies can make all the difference
                in a patient’s healing experience. At our center, we believe
                healing isn't about a single intervention—it's about a
                comprehensive strategy. By integrating advanced medical devices
                with regenerative techniques like stem cell therapy, we’re not
                just treating symptoms—we’re rebuilding lives. Are you ready to
                embrace the future of medicine—where your body’s healing meets
                the power of innovation? Let's take that journey together.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
