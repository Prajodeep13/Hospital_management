"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Globe, Lock, Zap } from "lucide-react";

export default function TechnologyPage() {
  const technologies = [
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: "Advanced Processing",
      description: "Leveraging cutting-edge processors and algorithms for optimal performance",
      badge: "Performance"
    },
    {
      icon: <Lock className="h-8 w-8 text-green-500" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and security protocols to protect your data",
      badge: "Security"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Global Infrastructure",
      description: "Distributed systems across multiple regions for maximum reliability",
      badge: "Infrastructure"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Real-time Processing",
      description: "Instant data processing and analytics for immediate insights",
      badge: "Speed"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Our Technology Stack
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover the innovative technologies powering our solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technologies.map((tech, index) => (
          <Card key={index} className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                {tech.icon}
                <Badge variant="secondary">{tech.badge}</Badge>
              </div>
              <CardTitle className="mt-4">{tech.title}</CardTitle>
              <CardDescription>{tech.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-2 bg-gradient-to-r from-primary/50 to-primary rounded-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}