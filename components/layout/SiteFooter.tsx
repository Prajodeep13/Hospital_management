import Link from 'next/link';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-teal-400" />
              <span className="ml-2 text-lg font-semibold text-white">GA Stem Cell Centre</span>
            </div>
            <p className="text-sm">
              Providing innovative medical treatments and compassionate care for patients with autism and other conditions.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-teal-400 transition-colors">Treatments</Link></li>
              <li><Link href="#" className="hover:text-teal-400 transition-colors">Conditions</Link></li>
              <li><Link href="#" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-teal-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-teal-400" />
                <span>info@gastemcellcentre.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-teal-400" />
                <span>123 Medical Plaza Dr.<br />Suite 456<br />Atlanta, GA 30303</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} GA Stem Cell Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}