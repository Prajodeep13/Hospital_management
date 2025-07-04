"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Hospital,
  DollarSign,
  User,
  ShieldCheck,
  Plus,
} from "lucide-react";
const steps = [
  {
    title: "Stem Cell Source",
    description:
      "Stem cells can be sourced from various locations including adult tissues, embryos, and even by genetically reprogramming existing cells. Common sources include bone marrow, adipose tissue, umbilical cord blood, and blood.",
  },
  {
    title: "Cell Preparation and Differentiation",
    description:
      "Cell preparation refers to the steps taken to make cells ready for observation, analysis, or experimental use. Cell differentiation is the process by which unspecialized cells become specialized, acquiring unique structures and functions.",
  },
  {
    title: "Cell Transplantation",
    description:
      "Cell transplantation involves replacing damaged or diseased stem cells with healthy ones. This procedure is used to treat various blood disorders, cancers, and autoimmune diseases. Stem cells can be harvested from the patient or a donor.",
  },
];

const leftSteps = [
  {
    step: "Step 1",
    title: "Diagnosis and Severity Assessment",
    description:
      "Evaluates the severity of the diagnosis and identifies the most likely underlying condition causing the need for a transplant.",
  },
  {
    step: "Step 2",
    title: "Multidisciplinary Assessment",
    description:
      "Patients undergo tests, including blood tests, imaging scans, assessments of heart, lungs, and other organ systems.",
  },
  {
    step: "Step 3",
    title: "Infection Screening",
    description:
      "Pre-transplant evaluation screens for latent infections. Appropriate strategies and prophylactic treatments reduce the risk of post-transplant complications.",
  },
  {
    step: "Step 4",
    title: "Risk Factor Assessment",
    description:
      "Includes comorbidities, infection history, prior transplant history, and genetic risk factors that may impact post-transplant complications and survival probabilities.",
  },
  {
    step: "Step 5",
    title: "Specialist Feasibility",
    description:
      "Only patients with stable vitals and no contraindications are approved for therapy.",
  },
];

const faqs = [
  {
    id: 1,
    question: "How many times can we use stem cells?",
    answer:
      "Stem cells can be used multiple times, depending on the patient’s condition and treatment plan.",
  },
  {
    id: 2,
    question: "How many sessions are required?",
    answer:
      "Most patients require between 1–3 sessions, but this varies based on the disease severity.",
  },
  {
    id: 3,
    question: "What is the cost range?",
    answer:
      "Costs may range from ₹50,000 to ₹2,00,000 depending on the type of transplant and hospital.",
  },
  {
    id: 4,
    question: "Why STEM is the best choice?",
    answer:
      "STEM therapy targets the root cause of disease and promotes regeneration instead of symptom control.",
  },
  {
    id: 5,
    question: "Are there risks?",
    answer:
      "While generally safe, some risks include immune reactions, infections, or failure to improve.",
  },
];
const rightSteps = [
  {
    step: "Step 1",
    title: "Infection Control",
    description:
      "Prevents infections both detecting and treating existing infections before starting transplant conditioning therapy.",
  },
  {
    step: "Step 2",
    title: "Medication Review",
    description:
      "Reviews the patient’s medications, including over-the-counter drugs, to optimize medication management.",
  },
  {
    step: "Step 3",
    title: "Dietary Recommendations",
    description:
      "A nutritionist provides tailored diet strategies to help the patient’s body handle therapies and improve recovery.",
  },
  {
    step: "Step 4",
    title: "Addressing Underlying Conditions",
    description:
      "Manages conditions like diabetes or infections that could complicate transplant therapy and recovery.",
  },
  {
    step: "Step 5",
    title: "Psychosocial Evaluation",
    description:
      "Evaluates mental/emotional readiness and the presence of social support during the transplant process.",
  },
];

export default function TherapyCost() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Stem Cell Therapy Cost
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Regenerative treatment for Abdominal Organ Diseases using Stem
                Cell
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Overview – Stem Cell Therapy
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Stem cell therapy is a regenerative medicine approach that
                utilizes the unique properties of stem cells, particularly their
                ability to self-renew and differentiate, to repair or replace
                damaged tissues and cells. This therapy involves using stem
                cells, either derived from the patient (autologous) or from a
                donor (allogenic), to regenerate damaged tissues or replace them
                with new, healthy cells. 
              </p>
              <h4 className="font-bold">Stem Cell Properties:</h4>
              <ul className="list-disc mb-4">
                <li>
                  Stem cells possess the ability to self-renew (multiply) and
                  differentiate into various specialized cell types within the
                  body
                </li>
              </ul>
              <h4 className="font-bold">Repair and Regenertaion:</h4>
              <ul className="list-disc mb-4">
                <li>
                  Stem cell therapy aims to repair damaged or diseased tissues
                  by promoting the growth of new, healthy cells.
                </li>
              </ul>

              <h4 className="font-bold">Autologous vs. Allogenic</h4>
              <ul className="list-disc">
                <li>
                  Autologous: Uses a patient's own stem cells, minimizing the
                  risk of rejection.
                </li>
                <li>
                  Allogenic: Uses stem cells from a donor, which may be
                  necessary when a patient's own stem cells are damaged or
                  unavailable
                </li>
              </ul>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="px-4 py-10 md:px-8 lg:px-12 max-w-5xl mx-auto bg-white">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                How Stem Cell Therapy Works:
              </h2>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="border border-[#C4F0E0] bg-white rounded-xl p-5 md:p-6 shadow-[0_4px_12px_rgba(0,201,167,0.15)]"
                  >
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#00C9A7] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="px-4 py-10 md:px-10 max-w-6xl mx-auto bg-white">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Stem Cell Therapy Cost
              </h2>

              <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed">
                Stem cell therapy cost varies significantly due to several
                factors, including the type of transplant (autologous or
                allogeneic), hospital charges, pre-transplant evaluations,
                chemotherapy/radiation costs, and post-transplant care. Other
                factors like the specific condition being treated, the quality
                of treatment, and the clinic’s reputation also influence the
                price.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Card */}
                <div className="border border-[#C4F0E0] rounded-[1.25rem] p-6 shadow-[0_4px_12px_rgba(0,201,167,0.15)] bg-white">
                  <div className="flex flex-col items-center mb-4">
                    <User className="text-[#7c6e6e] w-10 h-10 mb-4" />
                    <h3 className="text-[#00C9A7] text-base md:text-lg font-semibold text-center">
                      Type of Transplant:
                    </h3>
                  </div>

                  <p className="text-gray-800 font-semibold mb-1">
                    Autologous:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
                    <li>
                      Using the patient’s own stem cells. This generally
                      involves a more straightforward process and can be less
                      costly than allogeneic transplants.
                    </li>
                  </ul>

                  <p className="text-gray-800 font-semibold mb-1">
                    Allogeneic:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>
                      Using stem cells from a donor. This type of transplant is
                      more complex and expensive due to donor matching,
                      preparation, and post-transplant care, including
                      immunosuppressive medications.
                    </li>
                  </ul>
                </div>

                {/* Right Card */}
                <div className="border border-[#C4F0E0] rounded-[1.25rem] p-6 shadow-[0_4px_12px_rgba(0,201,167,0.15)] bg-white">
                  <div className="flex flex-col items-center mb-4">
                    <Hospital className="text-[#7c6e6e] w-10 h-10 mb-4" />
                    <h3 className="text-[#00C9A7] text-base md:text-lg font-semibold text-center">
                      Hospital Charges and Location:
                    </h3>
                  </div>

                  <p className="text-gray-800 font-semibold mb-1">
                    Type of Transplant:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
                    <li>
                      Autologous (using the patient’s own cells) is generally
                      less expensive than allogeneic (using a donor’s cells).
                    </li>
                  </ul>

                  <p className="text-gray-800 font-semibold mb-1">
                    Hospital Reputation and Facilities:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
                    <li>
                      Reputable hospitals with advanced technology and expertise
                      may charge more.
                    </li>
                  </ul>

                  <p className="text-gray-800 font-semibold mb-1">
                    Patient-Specific Needs:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>
                      Complications, pre-existing conditions, and additional
                      procedures can increase the cost.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="px-4 py-10 md:px-10 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Card */}
                <div className="border border-[#C4F0E0] rounded-[1.25rem] p-6 shadow-[0_4px_12px_rgba(0,201,167,0.15)] bg-white">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Pre-Transplant Evaluations and Treatments:
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                    Medical tests, evaluations, and pre-transplant conditioning
                    (like chemotherapy or radiation) contribute significantly to
                    the overall expense
                  </p>

                  <div className="space-y-5">
                    {leftSteps.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <span className="bg-[#00C9A7] text-white text-xs font-semibold px-3 py-1 rounded-full inline-block">
                            {item.step}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-1">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-700">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-start gap-3">
                    <div className="flex-shrink-0 min-w-[60px] flex justify-center">
                      <span className="bg-[#00C9A7] text-white p-1.5 rounded-full inline-flex items-center justify-center w-10 h-10">
                        <ShieldCheck className="w-4 h-4" />
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Only Patients with stable vitals and no contraindications
                      are approved for therapy.
                    </p>
                  </div>
                </div>

                {/* Right Card */}
                <div className="border border-[#C4F0E0] rounded-[1.25rem] p-6 shadow-[0_4px_12px_rgba(0,201,167,0.15)] bg-white">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Pre-Transplant Treatment
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                    Pre-transplant treatment, also known as conditioning
                    therapy, involves a range of therapies to prepare a patient
                    for a transplant, primarily for hematopoietic stem cell
                    transplant (HSCT).
                  </p>

                  <div className="space-y-5">
                    {rightSteps.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <span className="bg-[#00C9A7] text-white text-xs font-semibold px-3 py-1 rounded-full inline-block">
                            {item.step}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-1">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-700">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-start gap-3">
                    <div className="flex-shrink-0 min-w-[60px] flex justify-center">
                      <span className="bg-[#00C9A7] text-white p-1.5 rounded-full inline-flex items-center justify-center w-10 h-10">
                        <ShieldCheck className="w-4 h-4" />
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      This is for informational purposes only. For medical
                      advice or diagnosis, consult a professional. All responses
                      may include mistakes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="px-4 py-10 md:px-10 max-w-7xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Conventional Treatments vs. Stem Cell Therapy
              </h2>

              <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full text-sm text-left border border-[#C4F0E0] table-fixed divide-y divide-[#C4F0E0]">
                  <thead className="bg-[#00C9A7] text-white text-sm">
                    <tr className="divide-x divide-[#C4F0E0]">
                      <th className="py-3 px-4 font-semibold">Aspect</th>
                      <th className="py-3 px-4 font-semibold">
                        Conventional Therapies
                      </th>
                      <th className="py-3 px-4 font-semibold">
                        Stem Cell Therapy
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800 divide-y divide-[#C4F0E0] bg-white">
                    {[
                      {
                        aspect: "Approach",
                        conventional:
                          "Symptom management with medications (e.g., insulin, thyroid hormones)",
                        stem: "Root-level regeneration of hormone-producing cells",
                      },
                      {
                        aspect: "Goal",
                        conventional: "Control or suppress symptoms",
                        stem: "Restore normal glandular function",
                      },
                      {
                        aspect: "Duration",
                        conventional: "Lifelong treatment often required",
                        stem: "Potential for long-term relief with fewer sessions",
                      },
                      {
                        aspect: "Side Effects",
                        conventional:
                          "Medication side effects, dependency risk",
                        stem: "Minimal, mostly mild and temporary",
                      },
                      {
                        aspect: "Personalization",
                        conventional: "Generalized dosages for most patients",
                        stem: "Tailored therapy based on individual biomarkers",
                      },
                      {
                        aspect: "Compatibility",
                        conventional:
                          "May conflict with lifestyle changes or other drugs",
                        stem: "Works synergistically with holistic wellness plans",
                      },
                    ].map((item, i) => (
                      <tr
                        key={i}
                        className="divide-x divide-[#C4F0E0] even:bg-gray-50"
                      >
                        <td className="py-3 px-4 font-medium">{item.aspect}</td>
                        <td className="py-3 px-4">{item.conventional}</td>
                        <td className="py-3 px-4">{item.stem}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <div className="max-w-7xl mx-auto px-4 py-10 md:px-10">
              {/* Heading */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Some Real Experiences of Stem Cell Therapy
              </h2>

              {/* Real Stories Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-[#EAF9F5] rounded-xl p-6 shadow-md">
                  <h3 className="text-md font-semibold text-[#00C9A7] mb-3">
                    Real Stories
                  </h3>
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      47-year-old Andrew Robinson had one of the most promising
                      stem cell success stories. He was told that he would need
                      a knee replacement after suffering years of pain and
                      swelling due to bone arthritis. However, Andrew, upon the
                      recommendation of a specialist, received stem cell
                      injections in the knee.
                      <br />
                      <br />
                      The procedure involves injecting a specific blend of the
                      patient's own stem cells extracted from bone marrow stem
                      cells. Andrew was able to walk again in two weeks after
                      treatment, and has now returned to his active lifestyle.
                    </p>
                  </div>
                </div>

                <div className="bg-[#EAF9F5] rounded-xl p-6 shadow-md">
                  <h3 className="text-md font-semibold text-[#00C9A7] mb-3">
                    Real Stories
                  </h3>
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Having endured an aggressive Crohn's disease throughout
                      his childhood, Deepen Shah tried multiple therapies. His
                      condition deteriorated to the point that he could not
                      digest food or maintain weight.
                      <br />
                      <br />
                      The gut-level stem cell regeneration helped Deepen see a
                      considerable improvement in his gut function. He could
                      digest more naturally without experiencing extreme
                      symptoms. Within two weeks of the treatment, he began to
                      show improvement and could return to regular routines.
                      <br />
                      <br />
                      Doctors believe that with close observation of his stem
                      cell response, Deepen may also be able to avoid a major
                      flare-up.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-[#EAF9F5] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">**</span> Book your free
                    consultation today to explore the benefits of stem cell
                    therapy with our experienced, board-certified team. Whether
                    you're dealing with chronic pain, joint issues, or health
                    conditions, our experts are here to assess if regenerative
                    therapy is the right solution. Schedule your session with
                    our stem cell experts.
                  </p>
                </div>
                <Button className="bg-[#00C9A7] hover:bg-[#00b89b] text-white px-6 py-2 rounded-full text-sm">
                  Schedule a Free MS Consultation
                </Button>
              </div>

              {/* Final Thoughts */}
              <div>
                <h3 className="text-md font-bold text-gray-900 mb-2">
                  Final Thoughts
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Stem cell therapy holds immense potential as a regenerative
                  medicine approach, with ongoing research exploring its use for
                  various chronic conditions and autoimmune issues. It's
                  important to note that results vary from person to person
                  depending on individual diagnosis and overall health. If
                  you're interested in this approach, ensure you are working
                  with a trusted provider who explains the risks and benefits
                  clearly. Always pair stem cell therapy with a measured
                  understanding of its current status, limitations, and need for
                  rigorous scientific validation.
                </p>
              </div>
            </div>
          </section>

          
        </div>
      </main>
    </div>
  );
}


/*
 <Image
                    src="/consultation.svg" // Replace with actual image
                    alt="Consultation Icon"
                    width={50}
                    height={50}
                  />


                  <Image
                      src="/patient2.svg" // Replace with actual path or local image
                      alt="Patient 2"
                      width={80}
                      height={80}
                      className="mb-4"
                    />
                     <Image
                      src="/patient1.svg" // Replace with actual path or local image
                      alt="Patient 1"
                      width={80}
                      height={80}
                      className="mb-4"
                    />
                  */