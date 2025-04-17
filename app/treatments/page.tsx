"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Shield, Zap, Flower2, Activity, Droplets } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TreatmentsPage() {
  const router = useRouter();
  
  const treatments = [
    {
      id: "aesthetics",
      icon: <Flower2 className="h-12 w-12 text-primary" />,
      title: "Aesthetics",
      description: "Advanced aesthetic treatments for natural-looking rejuvenation and beauty enhancement.",
      price: "₹45,000",
      duration: "1-2 hours"
    },
    {
      id: "female-health",
      icon: <Activity className="h-12 w-12 text-pink-500" />,
      title: "Female Health",
      description: "Comprehensive women's health services including hormonal balance and reproductive wellness.",
      price: "₹55,000",
      duration: "2-3 hours"
    },
    {
      id: "hormone",
      icon: <Brain className="h-12 w-12 text-purple-500" />,
      title: "Hormone Replacement",
      description: "Bioidentical hormone therapy to restore balance and vitality.",
      price: "₹65,000",
      duration: "2 hours"
    },
    {
      id: "oxygen",
      icon: <Droplets className="h-12 w-12 text-blue-500" />,
      title: "Hyperbaric Oxygen",
      description: "High-pressure oxygen therapy for enhanced healing and recovery.",
      price: "₹40,000",
      duration: "1-2 hours"
    },
    {
      id: "regenerative",
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Regenerative Therapies",
      description: "Cutting-edge regenerative treatments for tissue repair and healing.",
      price: "₹75,000",
      duration: "3-4 hours"
    },
    {
      id: "sexual-health",
      icon: <Shield className="h-12 w-12 text-green-500" />,
      title: "Sexual Health",
      description: "Comprehensive sexual health treatments and therapies for both men and women.",
      price: "₹50,000",
      duration: "2 hours"
    },
    {
      id: "iv-therapy",
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "IV Therapy",
      description: "Customized IV treatments for immunity, energy, and overall wellness.",
      price: "₹35,000",
      duration: "1-2 hours"
    }
  ];

  const handleConsultation = () => {
    router.push('/contact');
  };

  return (
    <main className="container mx-auto px-4 py-8 sm:py-16">
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-4">
          Our Treatments
        </h1>
        <p className="text-sm sm:text-lg text-muted-foreground">
          Discover our range of innovative therapies designed to enhance your health and vitality
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {treatments.map((treatment) => (
          <Card key={treatment.id} className="border-2" id={treatment.id}>
            <CardHeader>
              <div className="flex justify-center mb-4">
                {treatment.icon}
              </div>
              <CardTitle className="text-lg sm:text-xl">{treatment.title}</CardTitle>
              <CardDescription className="text-sm sm:text-base">{treatment.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
                <span>Starting from {treatment.price}</span>
                <span>Duration: {treatment.duration}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleConsultation}>
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}