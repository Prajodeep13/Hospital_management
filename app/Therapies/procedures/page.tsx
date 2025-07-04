"use client";

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
import { FaRecycle, FaUserMd } from "react-icons/fa";
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
                Occupational Therapy
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
                Let us deep dive more into what and how’s of occupational
                therapy
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl">
          <div className="px-6 py-10 md:px-16 bg-white text-gray-800">
            {/* Section 1: Massage and Manual Therapy */}
            <div className="flex flex-col md:flex-row gap-6 mb-10">
              <div className="md:w-3/4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  What is Massage and Manual Therapy?
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  Imagine this: a young man in his mid-30s, once a software
                  engineer with dreams coded in binary, now struggling to button
                  his shirt after a spinal cord injury. Or a child with cerebral
                  palsy whose laughter rings out, but whose little limbs refuse
                  to obey his brain’s commands. For these individuals and
                  countless others, the journey of recovery isn’t just
                  medical—it’s deeply personal, emotional, and physical. This is
                  where the beautiful blend of Occupational Therapy and Stem
                  Cell Therapy is making miracles possible.
                </p>
              </div>
              <div className="md:w-1/4 flex justify-center items-start">
                <Image
                  src="msg.png"
                  alt="Massage Therapy"
                  width={220}
                  height={220}
                  className="rounded-md shadow-md"
                />
              </div>
            </div>

            {/* Section 2: Occupational Therapy */}
            <div className="relative bg-white">
              <div className="flex items-center mb-4">
                <span className="text-4xl text-teal-500 font-bold mr-3">?</span>
                <h2 className="text-2xl md:text-3xl font-bold">
                  What is Occupational Therapy, Really?
                </h2>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Occupational Therapy (OT) isn’t just about helping people get
                back to “work.” It’s about empowering them to reclaim the little
                things—tying shoelaces, brushing teeth, cooking a meal, playing
                a musical instrument, or simply hugging a loved one. OT helps
                individuals overcome physical, cognitive, or emotional
                limitations to live more independently and meaningfully.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Whether it’s stroke survivors relearning how to write or
                children with autism improving social skills, occupational
                therapists become the bridge between clinical recovery and
                real-world functionality.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                But what happens when even therapy seems to hit a plateau?
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                That’s where{" "}
                <strong className="font-semibold">stem cells</strong> enter the
                story—not as a replacement but as a powerful ally to
                occupational therapy.
              </p>
            </div>
          </div>
        </div>
        <section className="px-6 py-10 md:px-20 bg-white text-gray-800 space-y-10">
          {/* The Missing Piece: Stem Cells */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The Missing Piece: Stem Cells
            </h2>
            <div className="bg-[#d8f4f2] p-5 rounded-md shadow-sm text-base md:text-lg leading-relaxed text-gray-700">
              Stem cells are like the body’s master builders. They have the
              unique ability to transform into various types of cells—nerve
              cells, muscle cells, brain cells, and more. When directed
              appropriately, they can help repair or regenerate damaged tissues.
              While traditional rehabilitation can guide the brain and body to
              adapt to damage, stem cells can actually help repair that damage.{" "}
              <br />
              <br />
              Imagine combining the restorative potential of stem cells with the
              structured guidance of occupational therapy. It’s like giving your
              body a second chance—both inside and out.
            </div>
          </div>

          {/* Healing in Two Dimensions */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Healing in Two Dimensions: Functional + Biological
            </h2>
            <p className="text-base md:text-lg mb-6">
              Let’s explore how this dynamic duo works:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-teal-50 rounded-lg p-6 shadow-md flex flex-col items-center text-center space-y-4">
                <FaRecycle className="text-4xl text-teal-500" />
                <h3 className="text-lg font-semibold text-teal-700">
                  1. Biological Repair with Stem Cells
                </h3>
                <p className="text-sm text-gray-700">
                  Stem cell therapies introduce regenerative cells into damaged
                  tissues, jumpstarting natural healing. Whether it's for
                  neurological damage, muscular degeneration, or autoimmune
                  conditions, stem cells offer a way to heal from within.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-teal-50 rounded-lg p-6 shadow-md flex flex-col items-center text-center space-y-4">
                <FaUserMd className="text-4xl text-teal-500" />
                <h3 className="text-lg font-semibold text-teal-700">
                  2. Functional Relearning with OT
                </h3>
                <p className="text-sm text-gray-700">
                  As the cells repair tissues biologically, occupational
                  therapists step in to retrain the brain and body in real-life
                  tasks—brushing teeth, using cutlery, or returning to hobbies
                  and careers. <br />
                  Together, they help patients not just survive, but thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white px-4 md:px-20 py-8 font-sans">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-[17px] md:text-[18px] font-bold text-gray-900 leading-tight">
              Real-Life Miracles: The Human Side of Science
            </h2>
            <p className="text-[16px] text-gray-800 mt-1">
              Meet Riya, 8 years old – Cerebral Palsy Fighter
            </p>
          </div>

          {/* Two Boxes Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Box */}
            <div className="bg-[#E6FAF4] rounded-md p-5">
              <h3 className="text-[16px] font-semibold text-gray-900 mb-4">
                How Stem Cells Help
              </h3>

              {/* Regeneration of Beta Cells */}
              <div className="mb-3">
                <p className="text-[#00AA8D] text-[13px] font-semibold mb-1">
                  Regeneration of Beta Cells:
                </p>
                <p className="text-[13px] text-gray-800 leading-snug">
                  Mesenchymal stem cells (MSCs) can differentiate into
                  insulin-producing beta cells or stimulate the body to
                  regenerate them. This means the pancreas may begin producing
                  insulin more efficiently.
                </p>
              </div>

              {/* Mesenchymal Injection */}
              <div className="mb-3">
                <p className="text-[#00AA8D] text-[13px] font-semibold mb-1">
                  Mesenchymal Injection
                </p>
                <p className="text-[13px] text-gray-800 leading-snug">
                  Within months of her first round of mesenchymal stem cell
                  injections, her therapists noticed a difference.
                </p>
              </div>

              {/* Final Highlight */}
              <p className="text-[#00AA8D] text-[13px] font-medium leading-snug mt-2">
                Now, OT sessions are more productive than ever. Riya isn’t just
                participating—she’s engaged. And her smile says it all.
              </p>
            </div>

            {/* Right Box */}
            <div className="bg-[#E6FAF4] rounded-md p-5">
              <h3 className="text-[16px] font-semibold text-gray-900 mb-4">
                Real Stories
              </h3>

              {/* Avatar */}
              <div className="flex justify-center mb-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
                  alt="Riya avatar"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>

              {/* Story Text */}
              <p className="text-[13px] text-gray-800 leading-snug text-left">
                Riya was born with cerebral palsy. Her body was stiff, her limbs
                rigid, and speech difficult. Her parents enrolled her in OT
                sessions, which improved her coordination, but progress was
                slow. Then came stem cell therapy.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
