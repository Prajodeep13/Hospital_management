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
  Repeat2,
  Bone,
  Accessibility,
  Brain,
  Egg,
  ShieldCheck,
  HeartPulse,
  Pill,
  Target,
  Hospital,
  FileText,
  BarChart2,
  FlaskConical,
  FileCheck2,
  UserCheck,
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

export default function IMRPage() {
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
              Overview – IMR and Drug Therapies
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-3 sm:mb-4 text-base md:text-lg">
                At our center, we take a comprehensive, science-backed approach
                to healing—integrating Immune Modulation & Reconstitution (IMR)
                and advanced Drug Therapies to address chronic illnesses, immune
                dysfunction, and inflammation-related conditions. These
                therapies are often used alongside regenerative treatments, such
                as stem cell therapy, for more effective and long-lasting
                results.
              </p>
              <h4 className="text-2xl sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                What is IMR?
              </h4>
              <h4 className="text-2xl sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                IMR refers to a set of targeted therapeutic strategies designed
                to:
              </h4>
              <ul className="list-disc text-base md:text-lg">
                <li>
                  Modulate immune activity when it's causing harm (e.g.,
                  inflammation, autoimmunity)
                </li>
                <li>
                  Rebuild or support the immune system when it’s under
                  performing (e.g., after infections, chronic illness, or cancer
                  treatment)
                </li>
              </ul>
            </div>
          </section>

          <section className="py-12">
            <div className="bg-white min-h-screen px-4 py-8 flex justify-center">
              <div className="w-full max-w-4xl">
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  IMR - Illness Management & Recovery
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                  In the context of drug therapy, IMR, or Illness Management and
                  Recovery, is a psychosocial intervention designed to help
                  individuals with severe mental illness manage their illness
                  and achieve meaningful goals. It’s a structured program that
                  integrates psychoeducation, medication management strategies,
                  and other tools to improve overall well-being and support
                  recovery.
                </p>

                {/* Card: Focus on Self-Management */}
                <div className="border border-[#baf1ee] bg-[#f0fdfa] rounded-xl p-5 mb-5 shadow-md">
                  <h2 className="text-xl font-semibold text-[#17b0a3] mb-1">
                    Focus on Self-Management
                  </h2>
                  <p className="text-gray-800 text-sm sm:text-base">
                    IMR emphasizes teaching individuals with mental illness how
                    to manage their condition effectively through various
                    strategies.
                  </p>
                </div>

                {/* Card: Standardized Approach */}
                <div className="border border-[#baf1ee] bg-[#f0fdfa] rounded-xl p-5 mb-5 shadow-md">
                  <h2 className="text-xl font-semibold text-[#17b0a3] mb-1">
                    Standardized Approach
                  </h2>
                  <p className="text-gray-800 text-sm sm:text-base">
                    It’s a standardized program, meaning it has a set curriculum
                    and structure, making it easier to implement and evaluate.
                  </p>
                </div>

                {/* Card: Integration of Elements */}
                <div className="border border-[#baf1ee] bg-[#f0fdfa] rounded-xl p-5 mb-5 shadow-md">
                  <h2 className="text-xl font-semibold text-[#17b0a3] mb-1">
                    Integration of Elements
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base">
                    <li>
                      Psychoeducation: Providing information about mental
                      illness, medications, and coping strategies.
                    </li>
                    <li>
                      Medication Management: Helping individuals understand
                      their medications and how to take them properly.
                    </li>
                    <li>
                      Goal Setting and Pursuit: Encouraging individuals to set
                      and work towards personal goals that are important to
                      them.
                    </li>
                    <li>
                      Coping Skills: Teaching skills to manage symptoms, stress,
                      and triggers.
                    </li>
                  </ul>
                </div>

                {/* Card: Evidence-Based */}
                <div className="border border-[#baf1ee] bg-[#f0fdfa] rounded-xl p-5 mb-5 shadow-md">
                  <h2 className="text-xl font-semibold text-[#17b0a3] mb-1">
                    Evidence-Based
                  </h2>
                  <p className="text-gray-800 text-sm sm:text-base">
                    IMR is based on evidence from research on illness
                    self-management for individuals with serious mental illness.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="bg-white px-4 py-10 md:py-14 lg:py-16">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  Benefits:
                </h2>

                {/* Grid for cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Card 1 */}
                  <div className="bg-[#f0fdfa] border border-[#c6f2ec] rounded-2xl p-5 flex items-start space-x-4 shadow-sm">
                    <Activity className="text-[#00b99e] w-7 h-7 mt-1" />
                    <p className="text-gray-900 font-medium text-base sm:text-lg">
                      Reduction in systemic inflammation
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#f0fdfa] border border-[#c6f2ec] rounded-2xl p-5 flex items-start space-x-4 shadow-sm">
                    <Brain className="text-[#00b99e] w-7 h-7 mt-1" />
                    <p className="text-gray-900 font-medium text-base sm:text-lg">
                      Fewer disease flare-ups and improved symptom control
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#f0fdfa] border border-[#c6f2ec] rounded-2xl p-5 flex items-start space-x-4 shadow-sm">
                    <HeartPulse className="text-[#00b99e] w-7 h-7 mt-1" />
                    <p className="text-gray-900 font-medium text-base sm:text-lg">
                      Enhanced response to regenerative treatments
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-[#f0fdfa] border border-[#c6f2ec] rounded-2xl p-5 flex items-start space-x-4 shadow-sm">
                    <ShieldCheck className="text-[#00b99e] w-7 h-7 mt-1" />
                    <p className="text-gray-900 font-medium text-base sm:text-lg">
                      Improved energy, tissue repair, and immune resilience
                    </p>
                  </div>
                </div>

                {/* Paragraph below cards */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  IMR (Intracellular Matrix Restoration) therapy, when combined
                  with stem cell therapy, offers several key benefits including
                  enhanced stem cell effectiveness, improved metabolism, and
                  accelerated healing processes. It helps in rejuvenating
                  metabolism, covering deficiencies caused by diseases, and
                  supporting the overall body's ability to heal and regenerate.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-10 md:py-14">
            <div className="max-w-6xl mx-auto">
              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Advanced Drug Therapies
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-4xl leading-relaxed">
                Our clinic integrates modern pharmacology with precision
                medicine to create fully individualized treatment protocols.
                Drug therapies are selected to address the root causes of
                disease, manage symptoms, and support regenerative and
                immune-based treatments like IMR and stem cell therapy
              </p>

              {/* What We Offer */}
              <h3 className="text-2xl font-bold text-gray-900 mb-10">
                What We Offer
              </h3>

              {/* Grid of cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
                {/* Card 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e0f7f4] p-8 rounded-xl mb-2">
                    <ShieldCheck className="text-[#18b0a4] w-8 h-8 " />
                  </div>
                  <p className="font-semibold text-sm sm:text-base">
                    Immunomodulators
                  </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e0f7f4] p-8 rounded-xl mb-2">
                    <Pill className="text-[#18b0a4] w-8 h-8" />
                  </div>
                  <p className="font-semibold text-sm sm:text-base">
                    Anti-inflammatory
                    <br />
                    medications
                  </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e0f7f4] p-8 rounded-xl mb-2">
                    <Brain className="text-[#18b0a4] w-8 h-8" />
                  </div>
                  <p className="font-semibold text-sm sm:text-base">
                    Neuroprotective
                    <br />
                    agents
                  </p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e0f7f4] p-8 rounded-xl mb-2">
                    <Target className="text-[#18b0a4] w-8 h-8" />
                  </div>
                  <p className="font-semibold text-sm sm:text-base">
                    Targeted
                    <br />
                    biologics
                  </p>
                </div>

                {/* Card 5 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e0f7f4] p-8 rounded-xl mb-2">
                    <Hospital className="text-[#18b0a4] w-8 h-8" />
                  </div>
                  <p className="font-semibold text-sm sm:text-base">
                    Supportive
                    <br />
                    therapies
                  </p>
                </div>
              </div>

              {/* Bullet Explanation */}
              <div className="text-gray-800 text-sm sm:text-base space-y-2">
                <p>
                  <strong>Immunomodulators:</strong> To calm an overactive
                  immune system
                </p>
                <p>
                  <strong>Anti-inflammatory medications:</strong> To manage pain
                  and swelling without long-term steroid use
                </p>
                <p>
                  <strong>Neuroprotective agents:</strong> Especially for
                  neurodegenerative or post-stroke patients
                </p>
                <p>
                  <strong>Targeted biologics:</strong> Used in autoimmune and
                  inflammatory conditions
                </p>
                <p>
                  <strong>Supportive therapies:</strong> Including antivirals,
                  antibiotics, or hormone regulation, as needed
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-10 md:py-14">
            <div className="max-w-5xl mx-auto">
              {/* Personalized Medicine Heading */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                Personalized Medicine in Action
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                All medications are selected based on detailed diagnostics,
                including
              </p>

              {/* Diagnostic Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
                <div className="bg-[#e0f7f4] border border-[#c7f0e9] rounded-2xl p-5 text-center shadow-md">
                  <FileText className="mx-auto text-[#18b0a4] w-8 h-8 mb-3" />
                  <p className="text-[#18b0a4] font-semibold text-sm sm:text-base">
                    Immune profiling
                  </p>
                </div>
                <div className="bg-[#e0f7f4] border border-[#c7f0e9] rounded-2xl p-5 text-center shadow-md">
                  <BarChart2 className="mx-auto text-[#18b0a4] w-8 h-8 mb-3" />
                  <p className="text-[#18b0a4] font-semibold text-sm sm:text-base">
                    Inflammatory markers
                  </p>
                </div>
                <div className="bg-[#e0f7f4] border border-[#c7f0e9] rounded-2xl p-5 text-center shadow-md">
                  <Dna className="mx-auto text-[#18b0a4] w-8 h-8 mb-3" />
                  <p className="text-[#18b0a4] font-semibold text-sm sm:text-base">
                    Genetic and epigenetic
                    <br />
                    testing (where applicable)
                  </p>
                </div>
              </div>

              {/* Advanced Drug Therapies */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Advanced Drug Therapies
              </h2>

              <div className="bg-white border border-[#67efc4] rounded-2xl p-5 shadow-md">
                <p className="text-base md:text-lg font-semibold text-gray-900 mb-3">
                  At our center, IMR and drug therapies they are part of a
                  larger, holistic care model that includes
                </p>
                <ul className="list-disc pl-5 text-base md:text-lg text-gray-800 mb-4 space-y-2">
                  <li>
                    Regenerative medicine (e.g., stem cell therapy,
                    platelet-rich plasma)
                  </li>
                  <li>Lifestyle medicine and nutritional support</li>
                  <li>Physiotherapy and neuro-rehabilitation</li>
                  <li>Ongoing patient education and wellness tracking</li>
                </ul>
                <p className="text-base md:text-lg text-gray-700">
                  We believe that true healing requires synergy—between
                  therapies, between body systems, and between patient and
                  doctor
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-10 md:py-14">
            {/* Why Choose Us */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <ul className="text-base md:text-lg  text-gray-800 space-y-2">
              <li>
                ✔️ Evidence-based therapies grounded in immunology and
                regenerative science
              </li>
              <li>✔️ Advanced diagnostics for truly personalized treatment</li>
              <li>
                ✔️ Multidisciplinary medical team (immunologists, regenerative
                specialists, neurologists)
              </li>
              <li>✔️ Safe, ethical, and internationally compliant protocols</li>
              <li>✔️ Patient-centered care from start to finish</li>
            </ul>
          </section>

          <section className="bg-white px-4 py-10 md:py-14">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                How We Prioritize Safety
              </h2>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Card 1 */}
                <div className="bg-[#f0fdfa] border border-[#c6f2ec] rounded-2xl p-8 flex items-start space-x-4 shadow-md">
                  <FileText className="text-[#00b99e] w-6 h-6 mt-1" />
                  <p className="text-gray-900 font-medium text-sm sm:text-base">
                    Use of ethically sourced, GMP-grade stem cells
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#f0fdfa] border border-[#c6f2ec] rounded-2xl p-8 flex items-start space-x-4 shadow-md">
                  <FlaskConical className="text-[#00b99e] w-6 h-6 mt-1" />
                  <p className="text-gray-900 font-medium text-sm sm:text-base">
                    Treatment conducted in sterile, accredited labs
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#f0fdfa] border border-[#c6f2ec] rounded-xl p-8 flex items-start space-x-4 shadow-md">
                  <FileCheck2 className="text-[#00b99e] w-6 h-6 mt-1" />
                  <p className="text-gray-900 font-medium text-sm sm:text-base">
                    Compliance with national and international regulations
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-[#f0fdfa] border border-[#c6f2ec] rounded-xl p-8 flex items-start space-x-4 shadow-md">
                  <Stethoscope className="text-[#00b99e] w-6 h-6 mt-1" />
                  <p className="text-gray-900 font-medium text-sm sm:text-base">
                    Pre-treatment screening and diagnostic evaluation
                  </p>
                </div>
              </div>

              {/* Centered Bottom Card */}
              <div className="flex justify-center">
                <div className="bg-[#f0fdfa] border border-[#c6f2ec] rounded-xl p-8 flex items-start space-x-4 shadow-md w-full sm:w-[80%]">
                  <UserCheck className="text-[#00b99e] w-6 h-6 mt-1" />
                  <p className="text-gray-900 font-medium text-sm sm:text-base">
                    Ongoing patient monitoring and follow-up care
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
