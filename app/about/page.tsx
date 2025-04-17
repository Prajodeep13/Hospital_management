"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Building2, GraduationCap } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: <Users className="h-8 w-8 text-cyan-500" />, value: "10,000+", label: "Patients Treated" },
    { icon: <Award className="h-8 w-8 text-cyan-500" />, value: "15+", label: "Years Experience" },
    { icon: <Building2 className="h-8 w-8 text-cyan-500" />, value: "5", label: "Global Centers" },
    { icon: <GraduationCap className="h-8 w-8 text-cyan-500" />, value: "50+", label: "Expert Doctors" }
  ];

  return (
    <main className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-cyan-600">
          About QA Stem Cell
        </h1>
        <p className="text-xl text-gray-600">
          Leading the future of regenerative medicine with innovative stem cell therapies
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center bg-white shadow-md hover:shadow-lg transition duration-300 border-0">
            <CardHeader className="space-y-0 pb-2">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <CardTitle className="text-3xl font-extrabold text-gray-800">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-cyan-600">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At QA Stem Cell, we are committed to advancing the field of regenerative medicine through innovative stem cell therapies. Our mission is to provide cutting-edge treatments that enhance the quality of life for our patients while maintaining the highest standards of safety and ethical practice.
          </p>
          <p className="text-lg text-gray-700">
            We believe in the power of regenerative medicine to transform healthcare and create a future where chronic conditions can be effectively treated using the body's own healing mechanisms.
          </p>
        </div>
        <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1000"
            alt="Laboratory"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}