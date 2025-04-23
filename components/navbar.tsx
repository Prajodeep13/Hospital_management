"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

const menuItems = {
  Conditions: [
    { name: "Autism Treatment", href: "/conditions#autism" },
    { name: "Multiple sclerosis", href: "/conditions#ms" },
    { name: "Amyotrophic Lateral Sclerosis (ALS)", href: "/conditions#als" },
    { name: "Parkinson Disease", href: "/conditions#parkinson" },
    { name: "Arthritis / Arthrosis / Osteochondrosis", href: "/conditions#arthritis" },
    { name: "Anti-Aging and Wellbeing", href: "/conditions#anti-aging" },
    { name: "Diabetes Type 2", href: "/conditions#diabetes" },
    { name: "Liver Cirrhosis And Stem Cell Treatment", href: "/conditions#liver" },
  ],
  Therapies: [
    { name: "Stem Cells & Regenerative Medicine", href: "/therapies#regenerative" },
    { name: "Stem Cell Therapy Cost", href: "/therapies#cost" },
    { name: "Stem Cell Delivery Methods", href: "/therapies#delivery" },
    { name: "Safety & Adverse Effects", href: "/therapies#safety" },
    { name: "Boosting Stem Cell Therapy", href: "/therapies#boosting" },
    { name: "IMR & Drug Therapies", href: "/therapies#imr" },
    { name: "Medical Devices Therapies", href: "/therapies#devices" },
    { name: "Additional Procedures", href: "/therapies#procedures" },
  ],
  "Our stem cells": [
    { name: "Stem Cells Used in Therapy", href: "/stem-cells#used" },
    { name: "Our Lab", href: "/stem-cells#lab" },
    { name: "Production of Stem Cells", href: "/stem-cells#production" },
    { name: "Cell Products Catalog", href: "/stem-cells#catalog" },
  ],
  "Treatment Program": [
    { name: "Application Process", href: "/programs#application" },
    { name: "Stem Cell Therapy Step by Step", href: "/programs#step-by-step" },
    { name: "Client Care & Travel Support", href: "/programs#support" },
    { name: "VIP treatment", href: "/programs#vip" },
  ],
  "About Us": [
    { name: "About QA Stem Cell", href: "/about#company" },
    { name: "Contact Us", href: "/about#contact" },
    { name: "Locations", href: "/about#locations" },
    { name: "Our Team", href: "/about#team" },
    { name: "Partnership programs", href: "/about#partnership" },
    { name: "About Serbia", href: "/about#serbia" },
  ],
  FAQ: [
    { name: "Treatment FAQ", href: "/faq#treatment" },
    { name: "Travel & Stay", href: "/faq#travel" },
  ],
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const router = useRouter()

  const handleCallBack = () => {
    router.push('/contact')
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <nav className="container flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 font-bold text-black">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-black">
          {Object.entries(menuItems).map(([title, items]) => (
            <DropdownMenu key={title}>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-cyan-500">
                {title} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[220px]">
                {items.map((item) => (
                  <DropdownMenuItem key={item.href}>
                    <Link href={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>

        {/* Call Me Back Desktop */}
        <div className="hidden lg:flex">
          <Button onClick={handleCallBack} className="bg-[#0dbfd6] hover:bg-[#0aa7b6] text-white font-bold text-sm rounded-md px-4 py-2">
            CALL ME BACK
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu with Scroll */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white max-h-[calc(100vh-4rem)] overflow-y-auto px-4 pb-6 pt-4 border-t text-sm font-medium text-black">
          {Object.entries(menuItems).map(([title, items]) => (
            <div key={title} className="mb-6">
              <p className="font-semibold text-cyan-600 mb-2">{title}</p>
              <div className="space-y-1">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-1 rounded hover:bg-cyan-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Button onClick={handleCallBack} className="w-full bg-[#0dbfd6] hover:bg-[#0aa7b6] text-white font-semibold">
            CALL ME BACK
          </Button>
        </div>
      )}
    </header>
  )
}
