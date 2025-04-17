"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Brain, FlaskRound as Flask, Dna, Microscope, Star, Clock, Users, CheckCircle2, ArrowDown, BookOpen, Stethoscope, Award } from "lucide-react"
import { useRouter } from "next/navigation"
import StemCellClinic from "@/components/StemCellClinic"
import WhatIsStemCellTherapy from "@/components/WhatIsStemCellTherapy"
import HowStemCellTherapyWorks from "@/components/HowStemCellTherapyWorks"
import TypesOfStemCellsUsed from "@/components/TypesOfStemCellsUsed"
import LeadersInRegenerativeMedicine from "@/components/LeadersInRegenerativeMedicine"
import ConditionsTreated from "@/components/ConditionsTreated"
import StemCellTreatmentProcess from "@/components/StemCellTreatmentProcess"
import AdvantagesSection from "@/components/AdvantagesSection"
import SafetyAndEfficacy from "@/components/SafetyAndEfficacy"
import WhyChoose from "@/components/WhyChoose"

import FaqSection from "@/components/FaqSection"
import ResearchAreas from "@/components/ResearchAreas"
import HolisticDiseases from "@/components/HolisticDiseases"

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=2000",
    title: "Revolutionary Stem Cell Therapy",
    subtitle: "Experience the future of regenerative medicine with our cutting-edge stem cell treatments"
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000",
    title: "Advanced Joint Regeneration",
    subtitle: "Restore mobility and eliminate pain with our innovative treatments"
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000",
    title: "Personalized Care Solutions",
    subtitle: "Tailored treatments designed specifically for your unique needs"
  },
  {
    image: "https://images.unsplash.com/photo-1579165466991-467135ad3875?q=80&w=2000",
    title: "Cutting-edge Technology",
    subtitle: "State-of-the-art facilities and advanced medical procedures"
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000",
    title: "Expert Medical Team",
    subtitle: "World-class specialists dedicated to your well-being"
  },
  {
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=2000",
    title: "Comprehensive Care",
    subtitle: "Complete healthcare solutions under one roof"
  },
  {
    image: "https://images.unsplash.com/photo-1579684288538-c76a2fab9617?q=80&w=2000",
    title: "Innovative Treatments",
    subtitle: "Leading the way in medical advancements"
  }
]



export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleConsultation = () => {
    router.push('/contact')
  }

  const handleLearnMore = () => {
    router.push('/treatments')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen w-full relative">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] min-h-[400px] overflow-hidden w-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative h-full flex items-center justify-center w-full">
              <div className="container mx-auto px-4 w-full">
                <div className="max-w-4xl mx-auto text-center w-full">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-base sm:text-lg mx-auto sm:mx-0"
                      onClick={handleConsultation}
                    >
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>



   <StemCellClinic/>
   <WhatIsStemCellTherapy/>
   <ResearchAreas/>
  <HolisticDiseases/>
   <HowStemCellTherapyWorks/>
    <TypesOfStemCellsUsed/>
    <LeadersInRegenerativeMedicine/>
    <ConditionsTreated/>
    <StemCellTreatmentProcess/>
    <AdvantagesSection/>
    <SafetyAndEfficacy/>
    <WhyChoose/>
    <FaqSection/>


      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-3xl mx-auto text-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mb-8">
              Schedule your consultation today and discover how stem cell therapy can help you
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-base sm:text-lg mx-auto"
              onClick={handleConsultation}
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowDown className="h-6 w-6 transform rotate-180" />
      </button>
    </div>
  )
}