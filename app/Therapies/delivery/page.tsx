"use client";
import {
  FaSyringe,
  FaBrain,
  FaJoint,
  FaDumbbell,
  FaDotCircle,
  FaBullseye,
  FaUserAlt,
  FaMicroscope,
  FaCut,
  FaCheckCircle,
} from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MessageSquarePlus,
  Droplets,
  Shield,
  Activity,
  TestTube2,
  ShieldPlus,
  Dna,
  MessageCircle,
  Droplet,
  Zap,
  Stethoscope,
  Thermometer,
  HeartPulse,
  Repeat2,
  Bone,
  Accessibility,
  Brain,
  Egg,
  ShieldCheck,
} from "lucide-react";

const topRow = [
  {
    icon: <MdBloodtype className="text-teal-600 text-4xl" />,
    title: "Intravenous (IV) Injection",
    usage: "systemic conditions like autoimmune disorders.",
    description: "Stem cells are injected directly into the bloodstream.",
  },
  {
    icon: <FaBrain className="text-teal-600 text-4xl" />,
    title: "Intrathecal (Spinal) Injection",
    usage: "neurological conditions like MS or spinal cord injuries.",
    description: "Stem cells are injected into the cerebrospinal fluid.",
  },
  {
    icon: <FaJoint className="text-teal-600 text-4xl" />,
    title: "Intra-articular Injection",
    usage: "joint pain, arthritis.",
    description: "Stem cells are delivered into the affected joint.",
  },
];

const bottomRow = [
  {
    icon: <FaDumbbell className="text-teal-600 text-4xl" />,
    title: "Intramuscular Injection",
    usage: "localized muscle damage or degeneration.",
    description: "Stem cells are injected into muscle tissue.",
  },
  {
    icon: <FaDotCircle className="text-teal-600 text-4xl" />,
    title: "Localized Direct Injection",
    usage: "wounds, ulcers, or tissue damage.",
    description: "Stem cells are applied precisely to the area in need.",
  },
];

const cards = [
  {
    icon: Dna,
    color: "text-[#34d4b7]",
    title: "How Does Stem Cell Therapy Work",
    description:
      "Stem cells produce cytokines and growth factors that drive tissue regeneration and recovery.",
  },
  {
    icon: Activity,
    color: "text-[#34d4b7]",
    title: "How Does MMSC Therapy Work?",
    description:
      "MSCs can differentiate into various cell types, aiding bone, cartilage, fat, neural, and muscle repair.",
  },
  {
    icon: MessageCircle,
    color: "text-[#34d4b7]",
    title: "How Does Exosomes and Secretome Therapy Work?",
    description:
      "Exosomes are messengers that enhance healing by supporting natural communication and regeneration.",
  },
  {
    icon: Droplet,
    color: "text-[#34d4b7]",
    title: "How Does SVF Therapy Work?",
    description:
      "SVF uses a patient's fat tissue cells to promote healing, reduce inflammation, and support immune balance.",
  },
  {
    icon: Shield,
    color: "text-[#34d4b7]",
    title: "How Does T-Reg Therapy Work?",
    description:
      "T-Regs regulate the immune system and prevent it from attacking the body's own tissues.",
  },
  {
    icon: Brain,
    color: "text-[#34d4b7]",
    title: "How Does Neural Stem Cell (MMSC) Therapy Work?",
    description:
      "NSCs can self-renew and repair neural tissue, offering promise for stroke and multiple sclerosis.",
  },
  {
    icon: Zap,
    color: "text-[#34d4b7]",
    title: "How Does Macrophage Therapy Work",
    description:
      "Macrophages destroy harmful invaders and also influence inflammation and disease progression.",
  },
  {
    icon: Droplets,
    color: "text-[#34d4b7]",
    title: "How Does PRP Therapy Work?",
    description:
      "PRP uses your own blood to accelerate healing and tissue regeneration through natural processes.",
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
                Stem cell Delivery Methods
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
                Discover how our specialists safely deliver stem cells to
                targeted areas for maximum healing.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl">
          <div className="bg-white px-6 md:px-20 py-12 text-gray-900 font-sans">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Left Text Column */}
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  What Are Stem Cell Delivery Methods?
                </h2>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-4">
                  Stem cell therapy is more than just selecting the right type
                  of cells — the way these cells are delivered into the body
                  plays a vital role in the therapy’s success. At QA Stem Cell
                  Centre, we go beyond the basics by customizing delivery
                  methods to suit each patient’s specific medical condition,
                  treatment goals, and overall health profile.
                </p>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                  Different conditions require different approaches. For
                  instance, a patient with a neurological disorder might benefit
                  from a spinal (intrathecal) injection to reach the central
                  nervous system directly, while someone with a joint issue may
                  need an intra-articular injection to target cartilage
                  regeneration.
                </p>
              </div>

              {/* Right Image Column */}
              <div className="flex-1 flex justify-center">
                <Image
                  src="/delivery_1.png"
                  alt="Stem Cell Delivery"
                  width="320"
                  height="320"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white py-12 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
            {/* Top row - 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
              {topRow.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-full max-w-xs hover:shadow-lg transition"
                >
                  <div className="flex justify-center mb-4">{method.icon}</div>
                  <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-700 text-center mb-1">
                    <span className="font-semibold">Used for:</span>{" "}
                    {method.usage}
                  </p>
                  <p className="text-sm text-gray-700 text-center">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom row - centered 2 cards */}
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {bottomRow.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-full max-w-xs hover:shadow-lg transition"
                >
                  <div className="flex justify-center mb-4">{method.icon}</div>
                  <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-700 text-center mb-1">
                    <span className="font-semibold">Used for:</span>{" "}
                    {method.usage}
                  </p>
                  <p className="text-sm text-gray-700 text-center">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-6 sm:px-10 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Stem Cell Delivery Methods – Comparative Table
            </h2>

            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-300">
              <table className="w-full text-base text-left border-separate border-spacing-0">
                <thead className="bg-teal-500 text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold border-b border-gray-300">
                      Delivery Method
                    </th>
                    <th className="px-6 py-4 font-semibold border-b border-gray-300">
                      Best For
                    </th>
                    <th className="px-6 py-4 font-semibold border-b border-gray-300">
                      Procedure Time
                    </th>
                    <th className="px-6 py-4 font-semibold border-b border-gray-300">
                      Pain Level
                    </th>
                    <th className="px-6 py-4 font-semibold border-b border-gray-300">
                      Recovery Time
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-200">
                  {[
                    {
                      method: "Intravenous (IV)",
                      bestFor: "Autoimmune diseases, systemic inflammation",
                      time: "30–60 mins",
                      pain: "Minimal",
                      recovery: "None",
                    },
                    {
                      method: "Intrathecal (Spinal)",
                      bestFor: "Multiple sclerosis, spinal cord injuries",
                      time: "45–90 mins",
                      pain: "Moderate",
                      recovery: "1–2 days",
                    },
                    {
                      method: "Intramuscular",
                      bestFor: "Localized muscle injuries or degeneration",
                      time: "20–40 mins",
                      pain: "Mild",
                      recovery: "Minimal",
                    },
                    {
                      method: "Intra-articular",
                      bestFor:
                        "Joint-related issues like arthritis or cartilage repair",
                      time: "30–60 mins",
                      pain: "Mild",
                      recovery: "1–2 days",
                    },
                    {
                      method: "Localized Direct",
                      bestFor: "Chronic wounds, ulcers, soft tissue damage",
                      time: "30–50 mins",
                      pain: "Mild",
                      recovery: "Minimal",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 transition-all duration-200 border-b border-gray-200"
                    >
                      <td className="px-6 py-5 border-r border-gray-200">
                        {row.method}
                      </td>
                      <td className="px-6 py-5 border-r border-gray-200">
                        {row.bestFor}
                      </td>
                      <td className="px-6 py-5 border-r border-gray-200">
                        {row.time}
                      </td>
                      <td className="px-6 py-5 border-r border-gray-200">
                        {row.pain}
                      </td>
                      <td className="px-6 py-5">{row.recovery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="bg-white py-16 px-6 sm:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Top 2-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Why Choosing the Right Delivery Method Is Critical
                </h2>
                <p className="text-gray-700 mb-6">
                  Each delivery method affects how efficiently stem cells reach
                  their target. Proper delivery maximizes effectiveness, reduces
                  waste, and enhances recovery.
                </p>

                <ul className="space-y-5 mb-8">
                  <li className="flex items-center gap-4">
                    <FaBullseye className="text-teal-600 text-2xl" />
                    <span className="text-gray-800 text-base">
                      Improves targeting
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaUserAlt className="text-teal-600 text-2xl" />
                    <span className="text-gray-800 text-base">
                      Personalized to patient condition
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaMicroscope className="text-teal-600 text-2xl" />
                    <span className="text-gray-800 text-base">
                      Enhances cell survival
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaCut className="text-teal-600 text-2xl" />
                    <span className="text-gray-800 text-base">
                      Minimizes invasiveness
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Column (Box) */}
              <div className="bg-teal-50 p-6 sm:p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How We Ensure Safe Stem Cell Delivery
                </h3>
                <ul className="space-y-4 text-gray-800">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-teal-500 mt-1" />
                    <span>Sterile operating environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-teal-500 mt-1" />
                    <span>Guided imaging for accurate delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-teal-500 mt-1" />
                    <span>Post-procedure monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-teal-500 mt-1" />
                    <span>Emergency protocols.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Full-width bottom paragraph */}
            <div className="mt-10">
              <p className="text-gray-700 text-base leading-relaxed">
                Choosing the right stem cell delivery method is just as crucial
                as the therapy itself. At QA Stem Cell Centre, our expert
                medical team ensures each delivery is safe, targeted, and
                optimized for your specific condition. Whether it’s through IV
                infusion, spinal injection, or direct application, we use
                advanced, evidence-backed techniques to help you heal faster and
                better. Ready to take the next step in your recovery journey?
                Let’s find the method that works best for you.
              </p>
            </div>
          </div>
        </section> 
      </main>
    </div>
  );
}
