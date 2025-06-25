"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; 
import { FaAngleDown } from "react-icons/fa";
import AboutQAStemCell from "@/components/aboutus/AboutQAStemCell";
import ContactUs from "@/components/aboutus/ContactUs";
import OurTeam from "@/components/aboutus/OurTeam";
import PartnershipPrograms from "@/components/aboutus/PartnershipPrograms";

const aboutUsSections = [
  { title: "About QA Stem Cell", key: "about" },
  { title: "Contact Us", key: "contact" },
  { title: "Our Team", key: "team" },
  { title: "Partnership Programs", key: "partnership" },
];

const AboutUsPage: React.FC = () => {
  const searchParams = useSearchParams(); // ⬅️ Get URL query parameters
  const router = useRouter();
  
  const [selectedSection, setSelectedSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sectionFromURL = searchParams.get("section");
    if (sectionFromURL && aboutUsSections.some(sec => sec.key === sectionFromURL)) {
      setSelectedSection(sectionFromURL);
    }
  }, [searchParams]);

  const handleSectionChange = (key: string) => {
    setSelectedSection(key);
    setIsOpen(false);
    router.replace(`/aboutus?section=${key}`); // Change URL too without reload
  };

  const renderSelectedSection = () => {
    switch (selectedSection) {
      case "about":
        return <AboutQAStemCell />;
      case "contact":
        return <ContactUs />;
      case "team":
        return <OurTeam />;
      case "partnership":
        return <PartnershipPrograms />;
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen p-8 flex flex-col items-center justify-start">
   

      {/* Dropdown */}
      <div className="relative inline-block text-left mb-8">
     

        {isOpen && (
          <div className="origin-top-left absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-cyan-200 focus:outline-none z-20">
            <div className="py-1">
              {aboutUsSections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => handleSectionChange(section.key)}
                  className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Selected Content */}
      <div className="w-full ">{renderSelectedSection()}</div>
    </section>
  );
};

export default AboutUsPage;
