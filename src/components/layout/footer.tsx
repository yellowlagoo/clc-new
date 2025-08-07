import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Children's Learning Cottage
            </h3>
            <p className="text-slate-400 mb-6">
              Nurturing confident, creative learners through our Reggio Emilia approach. 
              Where every child's curiosity is celebrated and learning is an adventure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="text-slate-400 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-slate-400 hover:text-white transition-colors">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-400 hover:text-white transition-colors">
                  Our Teachers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">
                    675 Escuela Avenue<br />
                    Mountain View, CA 94040
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <p className="text-slate-400">(650) 564-9906</p>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <p className="text-slate-400">adela@clcottage.com</p>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">
                    Monday – Friday<br />
                    8:30 AM – 5:30 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Emergency */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Stay Connected</h4>
            <p className="text-slate-400 mb-6">
              Follow us for updates, photos, and educational tips.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com/clcottage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/clcottage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <p className="text-slate-400 text-sm mb-1">Emergency Contact:</p>
              <p className="text-white font-semibold">(650) 564-9911</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2024 Children's Learning Cottage. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 