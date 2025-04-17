import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20"> {/* Centered layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm">
            Leading the way in stem cell innovation with cutting-edge telemedicine solutions.
            </p>
          </div>

          {/* <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/treatments" className="text-gray-400 hover:text-white text-sm transition-colors">Virtual Consultations</Link></li>
              <li><Link href="/treatments" className="text-gray-400 hover:text-white text-sm transition-colors">Telemedicine</Link></li>
              <li><Link href="/treatments" className="text-gray-400 hover:text-white text-sm transition-colors">Remote Monitoring</Link></li>
              <li><Link href="/treatments" className="text-gray-400 hover:text-white text-sm transition-colors">Digital Health</Link></li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/technology" className="text-gray-400 hover:text-white text-sm transition-colors">Technology</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>First Floor, 583 B, Sushant Lok Phase I,</p>
                  <p>Sector 43, Gurugram, Haryana 122002</p>
                  <p className="mt-2">20 River Ct, Apt 805,</p>
                  <p>Jersey City, New Jersey-07310, USA</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919812193122" className="hover:text-white transition-colors">
                  +91 9812193122
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919313730912" className="hover:text-white transition-colors">
                  +91 9313730912
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* <Mail className="h-4 w-4 flex-shrink-0" /> */}
                {/* <a href="mailto:info@oavirtualhealthcare.com" className="hover:text-white transition-colors">
                  info@qastemcell.center
                </a> */}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 QA Stem Cell Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
