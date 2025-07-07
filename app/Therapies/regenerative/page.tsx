"use client";

import Link from "next/link";
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
                Regenerative Medicine
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
                Discover how regenerative medicine restores tissues and improves
                health
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl">
          {/* Overview Section */}
          <section className="py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Condition Overview – Stem Cell - Regenerating Medicine
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-3 sm:mb-4 text-base md:text-lg">
                Stem cells are the body's natural repair system — capable of
                transforming into specialized cells to heal and regenerate
                damaged tissues. Regenerative medicine harnesses this power to
                treat a wide range of conditions, from joint pain and nerve
                damage to autoimmune disorders and chronic inflammation.
              </p>
              <p className="mb-3 sm:mb-4 text-base md:text-lg">
                At QA Stem Cell Centre, we combine advanced stem cell science
                with personalized care to help patients experience faster
                recovery, reduced pain, and improved quality of life — without
                invasive surgery or long-term medication.
              </p>
              <p className="text-base md:text-lg">
                Explore how our therapies are shaping the future of healing.
              </p>
            </div>
          </section>

          {/* What Are Stem Cells Section */}
          <section className="py-8 sm:py-12">
            <div className="min-h-[50vh] sm:min-h-screen bg-[#e9f7f5] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
              <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    What Are Stem Cells?
                  </h1>
                  <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-6 leading-relaxed">
                    Stem cells are the body's master cells — capable of
                    developing into many different types of specialized cells
                    like muscle, nerve, or blood cells. They serve as the
                    foundation for growth, healing, and repair throughout your
                    body.
                  </p>
                  <p className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">
                    When placed in the right environment, stem cells can:
                  </p>
                  <ul className="list-disc list-inside text-gray-900 text-base sm:text-lg space-y-1 sm:space-y-2">
                    <li>
                      <span className="font-semibold">Self-renew</span> by
                      dividing and multiplying
                    </li>
                    <li>
                      <span className="font-semibold">Repair</span> and
                      regenerate damaged or diseased tissues
                    </li>
                    <li>
                      <span className="font-semibold">Adapt</span> into the
                      specific cells your body needs
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center mt-6 md:mt-0">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-[#96c7be] rounded-[50%_40%_50%_60%] flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 bg-[#0e5c58] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stem Cells & Regenerative Medicine Section */}
          <section className="py-8 sm:py-12">
            <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Card */}
              <div className="bg-[#e9f7f5] p-4 sm:p-6 rounded-xl shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Stem Cells & Regenerative Medicine
                </h2>
                <p className="text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">
                  Stem cells are the body's natural repair system — capable of
                  transforming into specialized cells to heal and regenerate
                  damaged tissues. Regenerative medicine harnesses this power to
                  treat a wide range of conditions, from joint pain and nerve
                  damage to autoimmune disorders and chronic inflammation.
                </p>
                <p className="text-gray-800 text-sm sm:text-base">
                  At QA Stem Cell Centre, we combine advanced stem cell science
                  with personalized care to help patients experience faster
                  recovery, reduced pain, and improved quality of life — without
                  invasive surgery or long-term medication.
                </p>
              </div>

              {/* Right Text */}
              <div className="mt-4 md:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Where Do Stem Cells Come From?
                </h2>
                <p className="text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">
                  At QA Stem Cell Centre, we use ethically sourced and
                  scientifically validated stem cells:
                </p>
                <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-gray-800 text-sm sm:text-base">
                  <li>
                    Autologous (from the patient's own body – bone marrow, fat)
                  </li>
                  <li>
                    Allogeneic (from healthy donors – umbilical cord tissue)
                  </li>
                </ul>
                <p className="text-gray-800 mt-3 sm:mt-4 text-sm sm:text-base">
                  Each source is matched based on the therapy and individual
                  condition.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Stem Cell Therapy Section */}
          <section className="bg-[#e9f7f5] py-8 sm:py-12 px-4 sm:px-6 md:px-20 rounded-3xl text-black text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10">
              Why Choose Stem Cell Therapy?
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
                <Stethoscope className="h-8 w-8 sm:h-10 sm:w-10 text-[#34d4b7] mb-2 sm:mb-4" />
                <p className="text-sm sm:text-base font-medium leading-snug">
                  Non-surgical, <br />
                  minimally invasive
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
                <Thermometer className="h-8 w-8 sm:h-10 sm:w-10 text-[#34d4b7] mb-2 sm:mb-4" />
                <p className="text-sm sm:text-base font-medium leading-snug">
                  Accelerated <br />
                  healing and recovery
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
                <HeartPulse className="h-8 w-8 sm:h-10 sm:w-10 text-[#34d4b7] mb-2 sm:mb-4" />
                <p className="text-sm sm:text-base font-medium leading-snug">
                  Reduced pain <br />
                  and inflammation
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
                <Repeat2 className="h-8 w-8 sm:h-10 sm:w-10 text-[#34d4b7] mb-2 sm:mb-4" />
                <p className="text-sm sm:text-base font-medium leading-snug">
                  Improvements <br />
                  without dependency
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4">
              <p className="font-semibold text-sm sm:text-lg">
                Talk to our specialist to find the right therapy for the
                condition
              </p>
              <button className="bg-[#248076] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#01352f] transition whitespace-nowrap text-sm sm:text-base">
                Check the condition we treat →
              </button>
            </div>
          </section>

          {/* What Can Regenerative Therapy Treat Section */}
          <section className="py-8 sm:py-12 bg-white text-black mt-8 sm:mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                What Can Regenerative Therapy Treat?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-10">
                Our stem cell treatments support recovery from:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                  <Bone className="h-8 w-8 sm:h-10 sm:w-10 text-[#34d4b7] mb-2 sm:mb-3" />
                  <p className="font-medium text-center text-xs sm:text-sm md:text-base">
                    Osteoarthritis and joint pain
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Accessibility className="h-8 w-8 sm:h-10 sm:w-10 text-[#34d4b7] mb-2 sm:mb-3" />
                  <p className="font-medium text-center text-xs sm:text-sm md:text-base">
                    Spinal cord injuries
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Brain className="h-8 w-8 sm:h-10 sm:w-10 text-[#34d4b7] mb-2 sm:mb-3" />
                  <p className="font-medium text-center text-xs sm:text-sm md:text-base">
                    Neurodegenerative diseases
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Egg className="h-8 w-8 sm:h-10 sm:w-10 text-[#34d4b7] mb-2 sm:mb-3" />
                  <p className="font-medium text-center text-xs sm:text-sm md:text-base">
                    Diabetes complications
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 text-[#34d4b7] mb-2 sm:mb-3" />
                  <p className="font-medium text-center text-xs sm:text-sm md:text-base">
                    Autoimmune disorders
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Regenerative Journey Section */}
          <section className="py-8 sm:py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Your Regenerative Journey With Us
              </h1>

              <div className="relative">
                {/* Horizontal progress line (desktop only) */}
                <div className="hidden md:block absolute top-[42px] left-[7.5%] w-[85%] h-1 bg-teal-200 z-0"></div>

                {/* Vertical progress line (mobile only) */}
                <div className="md:hidden absolute left-1/2 top-[60px] bottom-[60px] w-1 bg-teal-200 transform -translate-x-1/2 z-0"></div>

                {/* Steps */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 relative z-10">
                  {[
                    "Initial Consultation",
                    "Customized Treatment Plan",
                    "Stem Cell Collection & Preparation",
                    "Therapy Administration",
                    "Monitoring & Recovery Support",
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center w-full md:w-auto"
                    >
                      {/* Circle + mobile connector arrow */}
                      <div className="relative flex items-center md:flex-col">
                        {/* Line before circle (mobile only) */}
                        {index !== 0 && (
                          <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full w-4 h-1 bg-teal-200"></div>
                        )}

                        {/* Circle */}
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                          {index + 1}
                        </div>

                        {/* Mobile arrow */}
                        {index !== 4 && (
                          <div className="md:hidden text-teal-500 ml-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Step Label */}
                      <div className="mt-4 w-[90%] max-w-[220px] md:max-w-[180px]">
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                          {step}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Our Regenerative Therapies Section */}
          <section>
            <div className="bg-gray-50 text-gray-800">
              <div className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
                  Our Regenerative Therapies
                </h2>
                <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                  Explore our cutting-edge cellular therapies and hear real
                  experiences from our patients.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {cards.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 h-auto sm:h-[250px] md:h-[300px] flex flex-col justify-start hover:shadow-lg transition"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                          <Icon
                            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${card.color}`}
                          />
                          <h3 className="font-semibold text-base sm:text-lg md:text-xl leading-snug">
                            {card.title}
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600">
                          {card.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Consultation Form Section */}
          <section>
            <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 md:p-10 max-w-4xl mx-auto mt-8 sm:mt-12 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Get a free online consultation
              </h2>
              <p className="text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Let our team guide you through the next steps in managing autism
                with the power of regenerative medicine.
              </p>

              <form className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-left mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl bg-[#d6faf5] p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-[#18bab2] text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-left mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl bg-[#d6faf5] p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-[#18bab2] text-sm sm:text-base"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-left mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl bg-[#d6faf5] p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-[#18bab2] text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </form>

              <button
                type="submit"
                className="bg-[#025b52] text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-xl hover:bg-[#01463f] transition text-sm sm:text-base"
              >
                Talk to a Specialist
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
