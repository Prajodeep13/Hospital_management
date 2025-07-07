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
  FlaskConical,
  Truck,
  Hexagon,
  Pill,
  MoveHorizontal,
  Dumbbell,
  Users,
  FileText,
  Biohazard,
  Network,
  BrainCircuit,
  Syringe,
} from "lucide-react";

const items = [
  {
    title: "Poor Cell Survival",
    text: "Transplanted cells often face a hostile environment, especially in areas of inflammation or injury, making it hard for them to survive.",
    color: "text-[#4AD1B2]", // Tealish green
  },
  {
    title: "Immune Rejection",
    text: "Even autologous stem cells (from the patient’s own body) can sometimes trigger immune responses.",
    color: "text-[#4AD1B2]", // Lighter green
  },
  {
    title: "Limited Differentiation",
    text: "Stem cells may not always become the exact type of cell needed for repair.",
    color: "text-[#4AD1B2]", // Yellowish green
  },
  {
    title: "Weak Integration",
    text: "Even when cells survive and differentiate, they must integrate into the tissue correctly to be truly effective",
    color: "text-[#4AD1B2]", // Light blue
  },
  {
    title: "Short-Term Effects",
    text: "In some cases, benefits are only temporary, and symptoms may return.",
    color: "text-[#4AD1B2]", // Mint green
  },
];

const points = [
  "Engineering stem cells to over express survival genes helps them resist  dying in inflamed environments.",
  "Modified stem cells can produce therapeutic proteins that aid tissue repair.",
  "Immune-evasive stem cells are being designed to minimize rejection, making allogeneic (donor) treatments safer and more effective",
];


export default function BoostingPage() {
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
                Boosting Stem Cell Therapy
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
                Discover evidence-backed strategies and treatments to enhance
                the results of your stem cell journey.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-8 sm:px-10 py-8 max-w-6xl">
          {/* Overview Section */}
          <section className="py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Overview – Boosting Stem Cell Therapy
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-base md:text-lg mb-3 sm:mb-4">
                In the vast world of modern medicine, few innovations have
                stirred as much excitement and possibility as stem cell therapy.
                It’s more than just a buzzword—it’s a lifeline for many people
                suffering from diseases that, until recently, had limited or no
                treatment options. Stem cell therapy is not just about curing
                ailments; it’s about restoring hope, function, and quality of
                life. But while the promise is immense, the journey of stem cell
                therapy is still unfolding. Scientists and clinicians around the
                world are continually working on one critical question: how do
                we boost the effectiveness of stem cell therapy? That’s where
                the conversation truly begins. Enhancing this therapy isn't just
                about better science—it’s about better lives. Let’s dive into
                the current advancements, the key challenges, and the
                groundbreaking strategies that are boosting stem cell therapy
                for a brighter tomorrow.
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Challenge: Why Doesn’t Stem Cell Therapy Always Work?
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="text-base md:text-lg mb-3 sm:mb-4">
                  Despite the buzz, stem cell therapy isn’t magic. Patients and
                  researchers alike sometimes face disappointing outcomes. Here
                  are a few reasons why
                </p>
              </div>
            </div>
            <div className="bg-white px-4 py-10 flex justify-center">
              <div className="max-w-4xl w-full space-y-5">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F3FEFB] rounded-2xl border border-[#D7F3EC] px-6 py-6 shadow-sm shadow-gray-300"
                  >
                    <p className={`text-[18px] font-semibold ${item.color}`}>
                      {item.title}:
                      <span className="text-black font-normal">
                        {" "}
                        {item.text}
                      </span>
                    </p>
                  </div>
                ))}
                <p className="text-sm md:text-base text-gray-600 pt-4">
                  That’s where boosting strategies come in—to enhance cell
                  survival, effectiveness, and integration, turning potential
                  into real-world results.
                </p>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white px-6 py-12 flex justify-center">
              <div className="max-w-5xl w-full">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Strategy #1: Preconditioning the Stem Cells
                </h2>

                {/* Paragraph */}
                <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
                  Imagine sending a soldier into battle without training—it’s
                  the same with stem cells. If they’re not prepared for the
                  environment they’re being transplanted into, they’re unlikely
                  to survive or perform optimally.{" "}
                  <span className="font-semibold">Preconditioning</span>{" "}
                  involves exposing stem cells to controlled stress, growth
                  factors, or specific biochemical signals before
                  transplantation. This helps:
                </p>

                {/* Top Two Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="bg-white border border-[#CFF1EC] shadow-md rounded-lg px-5 py-4 flex items-center space-x-4">
                    <FlaskConical className="text-[#2CB3A8] w-7 h-7 min-w-[28px]" />
                    <p className="text-black font-semibold text-[15px] leading-snug">
                      Improve cell survival under hostile conditions.
                    </p>
                  </div>

                  <div className="bg-white border border-[#CFF1EC] shadow-md rounded-lg px-5 py-4 flex items-center space-x-4">
                    <Brain className="text-[#2CB3A8] w-7 h-7 min-w-[28px]" />
                    <p className="text-black font-semibold text-[15px] leading-snug">
                      Increase resistance to oxidative stress and inflammation.
                    </p>
                  </div>
                </div>

                {/* Bottom Centered Card */}
                <div className="w-full md:w-[70%] mx-auto mb-6">
                  <div className="bg-white border border-[#CFF1EC] shadow-md rounded-lg px-5 py-4 flex items-center space-x-4">
                    <Dna className="text-[#2CB3A8] w-7 h-7 min-w-[28px]" />
                    <p className="text-black font-semibold text-[15px] leading-snug">
                      Encourage beneficial gene expression that supports
                      healing.
                    </p>
                  </div>
                </div>

                {/* Footer Note */}
                <p className="text-[13.5px] text-gray-700">
                  Studies have shown that preconditioned stem cells are more
                  likely to thrive, especially in environments like the brain
                  (after a stroke) or heart (after a heart attack)
                </p>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white px-6 py-12 flex justify-center">
              <div className="max-w-5xl w-full">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Strategy #2: Genetic Modification – Smarter Cells for Smarter
                  Healing
                </h2>

                {/* Subtext */}
                <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
                  One of the most exciting fields in biotechnology is the
                  genetic engineering of stem cells. By tweaking their DNA,
                  scientists can create supercharged cells that are more robust,
                  targeted, and functional.
                </p>

                {/* Points */}
                <div className="space-y-4 mb-5">
                  {points.map((point, index) => (
                    <div
                      key={index}
                      className="bg-[#F3FEFB] border border-[#B4ECE5] rounded-lg px-5 py-4"
                    >
                      <p className="text-[16px] text-[#50BFA5] font-semibold leading-snug">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Text */}
                <p className="text-[14px] text-gray-700">
                  Of course, genetic modification comes with its own ethical and
                  safety concerns, but the progress is real—and promising.
                </p>
              </div>
            </div>
          </section>
          <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white px-6 py-12 flex justify-center">
              <div className="max-w-5xl w-full">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Strategy #3: Exosomes – The Silent Messengers
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 max-w-4xl leading-relaxed mb-8">
                  In recent years, researchers have realized something
                  fascinating: stem cells don’t always need to become new tissue
                  to help. Sometimes, the signals they send are just as
                  powerful. <br />
                  Enter exosomes—tiny packets of proteins, RNA, and other
                  molecules released by stem cells. These microscopic messengers
                  travel to other cells and stimulate healing, reduce
                  inflammation, and encourage regeneration.
                </p>

                {/* Benefit Intro */}
                <p className="text-base md:text-lg text-gray-800 mb-6">
                  <strong>Using exosomes as a therapy</strong> (often called
                  "cell-free therapy") has several benefits:
                </p>

                {/* Icon Grid */}
                <div className="border-t border-gray-300 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {/* Benefit 1 */}
                  <div className="flex flex-col items-center">
                    <Hexagon className="w-10 h-10 text-teal-600 mb-4" />
                    <p className="text-sm font-medium text-gray-800">
                      No risk of uncontrolled
                      <br />
                      cell growth
                    </p>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex flex-col items-center">
                    <Truck className="w-10 h-10 text-teal-600 mb-4" />
                    <p className="text-sm font-medium text-gray-800">
                      Easier to store and
                      <br />
                      transport.
                    </p>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-10 h-10 text-teal-600 mb-4" />
                    <p className="text-sm font-medium text-gray-800">
                      Lower immune
                      <br />
                      rejection risk.
                    </p>
                  </div>
                </div>

                {/* Final Note */}
                <p className="text-sm md:text-base text-gray-700 mt-10 max-w-4xl leading-relaxed">
                  Boosting stem cell therapy with exosomes can offer safer, more
                  salable solutions—especially in conditions like
                  osteoarthritis, neurodegeneration, or even skin rejuvenation.
                </p>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white px-6 py-12 flex justify-center">
              <div className="max-w-5xl w-full">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Strategy #4: Biomaterials and 3D Scaffolds
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 max-w-4xl leading-relaxed mb-4">
                  Imagine trying to plant seeds in thin air. Without soil,
                  nutrients, or structure, they won’t grow. Similarly,
                  transplanted stem cells need a supportive environment to
                  thrive.
                </p>
                <p className="text-base md:text-lg text-gray-700 max-w-4xl leading-relaxed mb-6">
                  This is where biomaterials and 3D scaffolds come in—engineered
                  materials that mimic the natural tissue environment. These
                  can:
                </p>

                {/* Card Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="border-2 border-[#D4F1EE] bg-white rounded-xl shadow-sm p-6 flex items-center gap-4">
                    <MoveHorizontal className="w-8 h-8 text-teal-600" />
                    <p className="text-sm md:text-base font-semibold text-gray-800">
                      Anchor stem cells in place.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="border-2 border-[#D4F1EE] bg-white rounded-xl shadow-sm p-6 flex items-center gap-4">
                    <ShieldPlus className="w-8 h-8 text-teal-600" />
                    <p className="text-sm md:text-base font-semibold text-gray-800">
                      Protect them from the immune system.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="border-2 border-[#D4F1EE] bg-white rounded-xl shadow-sm p-6 flex items-center gap-4 md:col-span-2 md:w-2/3">
                    <Pill className="w-8 h-8 text-teal-600" />
                    <p className="text-sm md:text-base font-semibold text-gray-800">
                      Release growth factors slowly to support healing
                    </p>
                  </div>
                </div>

                {/* Footer Text */}
                <p className="text-sm md:text-base text-gray-700 mt-10 max-w-4xl leading-relaxed">
                  Hydrogels, collagen scaffolds, and biodegradable polymers are
                  already showing success in applications like bone regeneration
                  and cartilage repair. They’re essentially “nurseries” for new
                  tissue to grow.
                </p>
              </div>
            </div>
          </section>
          <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white px-6 py-12 flex justify-center">
              <div className="max-w-5xl w-full">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Strategy #5: Combining Stem Cell Therapy with Other Treatments
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 max-w-4xl leading-relaxed mb-6">
                  Why stop at stem cells? Pairing stem cell therapy with other
                  medical treatments often leads to synergistic results.
                </p>

                <p className="text-sm md:text-base font-medium text-gray-800 mb-6">
                  Some combinations include:
                </p>

                {/* Card Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="border-2 border-[#D4F1EE] bg-white rounded-xl shadow-sm p-6 flex items-start gap-4">
                    <Dumbbell className="w-8 h-8 text-teal-600 mt-1" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                        Stem Cells + Physical Therapy
                      </p>
                      <p className="text-sm text-gray-700">
                        Especially helpful in neurological and musculoskeletal
                        conditions.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="border-2 border-[#D4F1EE] bg-white rounded-xl shadow-sm p-6 flex items-start gap-4">
                    <Droplets className="w-8 h-8 text-teal-600 mt-1" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                        Stem Cells + PRP (Platelet-Rich Plasma)
                      </p>
                      <p className="text-sm text-gray-700">
                        PRP enhances healing signals and helps stem cells work
                        more effectively.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="border-2 border-[#D4F1EE] bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 md:col-span-2 md:w-2/3">
                    <Users className="w-8 h-8 text-teal-600 mt-1" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                        Stem Cells + Immune Modulation
                      </p>
                      <p className="text-sm text-gray-700">
                        In autoimmune conditions, modulating the immune system
                        allows stem cells to work without attack.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Text */}
                <p className="text-sm md:text-base text-gray-700 mt-10 max-w-4xl leading-relaxed">
                  This integrated approach doesn’t just boost effectiveness—it
                  personalizes treatment for better outcomes.
                </p>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white px-6 py-12 flex justify-center">
              <div className="max-w-5xl w-full">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Strategy #6: Personalized Stem Cell Therapy
                </h2>

                {/* Subheading */}
                <p className="text-base md:text-lg text-gray-700 max-w-4xl leading-relaxed">
                  Every person’s body is different. So why should treatments be
                  one-size-fits-all?
                </p>

                {/* Lead-in Line */}
                <p className="text-base md:text-lg font-medium text-gray-800 mt-4 mb-6">
                  With advancements in precision medicine, we can now tailor
                  stem cell therapy based on:
                </p>

                {/* Card Box */}
                <div className="bg-white border-2 border-[#D4F1EE] rounded-xl shadow-sm px-6 py-6 md:px-10 md:py-8 space-y-6">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4">
                    <FileText className="w-6 h-6 text-teal-600 mt-1" />
                    <p className="text-sm md:text-base font-semibold text-gray-900">
                      The patient’s genetic profile.
                    </p>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-start gap-4">
                    <Biohazard className="w-6 h-6 text-teal-600 mt-1" />
                    <p className="text-sm md:text-base font-semibold text-gray-900">
                      The exact nature and stage of the disease.
                    </p>
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-start gap-4">
                    <Network className="w-6 h-6 text-teal-600 mt-1" />
                    <p className="text-sm md:text-base font-semibold text-gray-900">
                      The optimal source and type of stem cell.
                    </p>
                  </div>

                  {/* Row 4 */}
                  <div className="flex items-start gap-4">
                    <BrainCircuit className="w-6 h-6 text-teal-600 mt-1" />
                    <p className="text-sm md:text-base font-semibold text-gray-900">
                      Predictive biomarkers that guide therapy choices.
                    </p>
                  </div>
                </div>

                {/* Final Note */}
                <p className="text-sm md:text-base text-gray-700 mt-10 max-w-4xl leading-relaxed">
                  This customized approach ensures that patients get the right
                  cells, in the right dose, at the right time, maximizing
                  therapeutic benefits while reducing risks.
                </p>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12">
            <div className="bg-white px-6 md:px-20 py-10 text-gray-900 font-sans">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Real-Life Applications: Where We See the Boost in Action
              </h2>

              {/* Subtext */}
              <p className="text-base md:text-lg text-gray-700 max-w-4xl leading-relaxed mb-8">
                The strategies to enhance stem cell therapy aren’t just lab
                experiments—they’re being used in real-world treatments today.
                Here are some examples:
              </p>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 - Neurological Disorders */}
                <div className="bg-white border border-[#D4F1EE] rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-[#D4F1EE] flex justify-center items-center py-6">
                    <Brain className="w-10 h-10 text-teal-700" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-md font-semibold text-[#1DA39D] mb-2">
                      Neurological Disorders
                    </h3>
                    <p className="text-sm text-gray-700 leading-snug">
                      In spinal cord injuries, combining stem cells with
                      exosomes and rehabilitation has shown remarkable
                      improvements in motor function
                    </p>
                  </div>
                </div>

                {/* Card 2 - Cardiovascular Disease */}
                <div className="bg-white border border-[#D4F1EE] rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-[#D4F1EE] flex justify-center items-center py-6">
                    <HeartPulse className="w-10 h-10 text-teal-700" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-md font-semibold text-[#1DA39D] mb-2">
                      Cardiovascular Disease
                    </h3>
                    <p className="text-sm text-gray-700 leading-snug">
                      Preconditioned mesenchymal stem cells have helped improve
                      heart function after heart attacks in clinical trials.
                    </p>
                  </div>
                </div>

                {/* Card 3 - Orthopedic Healing */}
                <div className="bg-white border border-[#D4F1EE] rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-[#D4F1EE] flex justify-center items-center py-6">
                    <Bone className="w-10 h-10 text-teal-700" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-md font-semibold text-[#1DA39D] mb-2">
                      Orthopedic Healing
                    </h3>
                    <p className="text-sm text-gray-700 leading-snug">
                      3D scaffolds with stem cells are helping patients
                      regenerate bone and cartilage in joints damaged by injury
                      or arthritis.
                    </p>
                  </div>
                </div>

                {/* Card 4 - Diabetes */}
                <div className="bg-white border border-[#D4F1EE] rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-[#D4F1EE] flex justify-center items-center py-6">
                    <Syringe className="w-10 h-10 text-teal-700" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-md font-semibold text-[#1DA39D] mb-2">
                      Diabetes
                    </h3>
                    <p className="text-sm text-gray-700 leading-snug">
                      Researchers are using gene-edited stem cells to produce
                      insulin-producing beta cells, offering a potential cure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white px-6 md:px-20 py-10 text-gray-900 font-sans space-y-10">
              {/* Lifestyle and Environment */}
              <div className="border-2 border-[#C4F0EC] bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1DA39D] mb-3">
                  The Role of Lifestyle and Environment
                </h3>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Interestingly, boosting stem cell therapy isn’t limited to the
                  clinic. Patients themselves play a vital role in success.
                  Lifestyle factors like nutrition, sleep, stress levels, and
                  physical activity can significantly affect how well the body
                  responds to stem cell therapy.
                  <br />A nutrient-rich diet, regular movement,
                  anti-inflammatory habits, and mental wellbeing all help create
                  a favorable internal environment for healing and regeneration.
                </p>
              </div>

              {/* Ethical and Safety Considerations */}
              <div className="border-2 border-[#C4F0EC] bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1DA39D] mb-3">
                  Ethical and Safety Considerations
                </h3>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-2">
                  As we explore ways to boost stem cell therapy, it’s crucial
                  not to lose sight of the ethics. Not all stem cell clinics
                  follow rigorous safety protocols, and patients must stay
                  informed.
                </p>
                <ul className="list-disc list-inside text-base md:text-lg text-gray-800 space-y-1">
                  <li>
                    Regulated therapies are essential for safety and results
                  </li>
                  <li>Informed consent must be a priority.</li>
                  <li>
                    False promises from unverified clinics can endanger lives.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12">
            <div className="bg-white px-6 md:px-20 py-10 text-gray-900 font-sans space-y-10">
              {/* Section 1: Looking Ahead */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Looking Ahead: A World Transformed by Regenerative Medicine
                </h2>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Boosting stem cell therapy is not just a scientific
                  pursuit—it’s a humanitarian mission. It's about giving a child
                  with cerebral palsy the chance to walk, helping a grandmother
                  regain memory lost to Alzheimer’s, or allowing a wounded
                  soldier to rebuild muscle after trauma.
                  <br />
                  <br />
                  With AI, biotechnology, and personalized medicine converging,
                  the next decade will likely bring faster, more effective, and
                  more accessible stem cell therapies. This transformation won't
                  just treat disease—it will redefine how we understand health
                  and aging.
                </p>
              </div>

              {/* Section 2: Final Thoughts */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Thoughts: Hope in Every Cell
                </h2>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Stem cell therapy stands at the intersection of science and
                  miracle. But miracles take work—and that’s where boosting
                  strategies come in. Whether it’s through better cell
                  preparation, smarter delivery systems, or personalized care,
                  the path forward is filled with possibilities.
                  <br />
                  <br />
                  As we continue to unlock the secrets of our own biology, one
                  truth becomes clear: healing is not only possible—it’s
                  inevitable. And stem cells are leading the way.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
