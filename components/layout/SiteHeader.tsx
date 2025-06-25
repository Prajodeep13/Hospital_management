"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const conditions = [
  { name: 'Autism Treatment', href: '/conditions/autism' },
  { name: 'Multiple Sclerosis', href: '/conditions/multiple-sclerosis' },
  { name: 'Amyotrophic Lateral Sclerosis (ALS)', href: '/conditions/als' },
  { name: "Parkinson's Disease", href: '/conditions/parkinsons' },
  { name: 'Arthritis / Arthrosis / Osteochondrosis', href: '/conditions/arthritis' },
  { name: 'Anti-Aging and Wellbeing', href: '/conditions/anti-aging' },
  { name: 'Diabetes Type 2', href: '/conditions/diabetes' },
  { name: 'Liver Cirrhosis', href: '/conditions/liver-cirrhosis' },
];

const therapies = [
  { name: 'Stem Cells & Regenerative Medicine', href: '/therapies/stem-cells' },
  { name: 'Stem Cell Therapy Cost', href: '/therapies/cost' },
  { name: 'Stem Cell Delivery Methods', href: '/therapies/delivery-methods' },
  { name: 'Safety & Adverse Effects', href: '/therapies/safety' },
  { name: 'Boosting Stem Cell Therapy', href: '/therapies/boosting' },
  { name: 'IMR & Drug Therapies', href: '/therapies/imr-drug' },
  { name: 'Medical Devices Therapies', href: '/therapies/medical-devices' },
  { name: 'Additional Procedures', href: '/therapies/additional' },
];

const navigation = [
  { name: 'Specialists', href: '#' },
  { name: 'Treatment Program', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'FAQ', href: '#' },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Heart className="h-8 w-8 text-teal-500" />
            <span className="ml-2 text-lg font-semibold text-gray-900">GA Stem Cell Centre</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-6 relative">
          {/* Conditions Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('conditions')}
              className="flex items-center text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              Conditions
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {activeDropdown === 'conditions' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                {conditions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Therapies Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('therapies')}
              className="flex items-center text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              Therapies
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {activeDropdown === 'therapies' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                {therapies.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Regular Navigation Items */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button size="sm" className="bg-teal-500 hover:bg-teal-600">Free Consult</Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-50 bg-white",
        mobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 z-50">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                <Heart className="h-8 w-8 text-teal-500" />
                <span className="ml-2 text-lg font-semibold text-gray-900">GA Stem Cell Centre</span>
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="divide-y divide-gray-100">
              <div className="space-y-2 py-6 px-4">
                {/* Mobile Conditions */}
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-900 px-3">Conditions</p>
                  {conditions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Therapies */}
                <div className="space-y-1 pt-4">
                  <p className="text-sm font-semibold text-gray-900 px-3">Therapies</p>
                  {therapies.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-1 pt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="py-6 px-4">
                <Button className="w-full bg-teal-500 hover:bg-teal-600">Free Consult</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
}