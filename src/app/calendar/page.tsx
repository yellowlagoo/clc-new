import React from "react";
import Link from "next/link";
import { 
  Calendar as CalendarIcon, 
  Clock,
  AlertCircle,
  ArrowLeft,
  Info
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalendarPage() {
  const holidays = [
    {
      date: "September 2, 2024",
      name: "Labor Day",
      type: "federal"
    },
    {
      date: "October 14, 2024", 
      name: "Indigenous People's Day",
      type: "federal"
    },
    {
      date: "November 11, 2024",
      name: "Veterans Day", 
      type: "federal"
    },
    {
      date: "November 27 (closed at 12:30), 28 & 29, 2024",
      name: "Thanksgiving",
      type: "extended",
      note: "Early closure on November 27"
    },
    {
      date: "December 23, 2024 - January 3, 2025",
      name: "Winter Break",
      type: "extended"
    },
    {
      date: "January 20, 2025",
      name: "Martin Luther King Jr. Day",
      type: "federal"
    },
    {
      date: "February 17, 2025", 
      name: "President's Day",
      type: "federal"
    },
    {
      date: "April 18 - April 21, 2025",
      name: "Spring Break",
      type: "extended"
    },
    {
      date: "May 26, 2025",
      name: "Memorial Day",
      type: "federal"
    },
    {
      date: "June 6, 2025",
      name: "Preschool Graduation",
      type: "special"
    },
    {
      date: "June 19, 2025",
      name: "Juneteenth Day",
      type: "federal"
    },
    {
      date: "July 2, 3, 4, 2025",
      name: "Summer Break",
      type: "extended"
    },
    {
      date: "August 21 & 22, 2025",
      name: "Teacher In-Service Days",
      type: "special"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "federal":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "extended":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "special":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "federal":
        return "Federal Holiday";
      case "extended":
        return "Extended Break";
      case "special":
        return "Special Event";
      default:
        return "Holiday";
    }
  };

  return (
    <>
      <Header />
      
      {/* Back Navigation */}
      <section className="bg-slate-50 py-4">
        <div className="container">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding-large bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mx-auto mb-8">
              <CalendarIcon className="h-10 w-10 text-[#6F4D6CFF]" />
            </div>
            <h1 className="text-large mb-6 text-slate-900">
              2024/2025 School Year Calendar
            </h1>
            <p className="text-body-large mb-12 text-slate-600">
              Plan ahead with our complete schedule of holidays, breaks, and special events. 
              We're committed to keeping families informed about all closure dates.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-[#6F4D6CFF]/30 bg-[#6F4D6CFF]/5">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#6F4D6CFF]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Info className="h-4 w-4 text-[#6F4D6CFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#6F4D6CFF] mb-2">Important Policy Information</h3>
                    <ul className="space-y-2 text-[#6F4D6CFF]/80">
                      <li>• We will provide at least thirty (30) day notice if there are any changes to the schedule</li>
                      <li>• There are no tuition adjustments for holidays</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-medium mb-8 text-slate-900 text-center">
              Children's Learning Cottage is Closed:
            </h2>
            
            <div className="space-y-4">
              {holidays.map((holiday, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <CalendarIcon className="h-5 w-5 text-slate-400 mt-0.5" />
                          <div>
                            <h3 className="font-bold text-slate-900 mb-1">{holiday.name}</h3>
                            <p className="text-slate-600">{holiday.date}</p>
                            {holiday.note && (
                              <p className="text-sm text-amber-600 mt-1 flex items-center">
                                <AlertCircle className="h-4 w-4 mr-1" />
                                {holiday.note}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(holiday.type)}`}>
                          {getTypeLabel(holiday.type)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">Calendar Legend</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border bg-blue-50 text-blue-700 border-blue-200 mb-2">
                  Federal Holiday
                </span>
                <p className="text-sm text-slate-600">Nationally recognized holidays</p>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border bg-purple-50 text-purple-700 border-purple-200 mb-2">
                  Extended Break
                </span>
                <p className="text-sm text-slate-600">Multi-day closures</p>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border bg-green-50 text-green-700 border-green-200 mb-2">
                  Special Event
                </span>
                <p className="text-sm text-slate-600">School-specific events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Photo Placeholders */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">Special Events & Celebrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-100 rounded-lg border border-dashed border-slate-300 p-6 text-center">
                <div className="w-10 h-10 bg-slate-200 rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg">🎓</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Graduation Day</p>
                <p className="text-xs text-slate-500 mt-1">June celebration photos</p>
              </div>
              
              <div className="bg-slate-100 rounded-lg border border-dashed border-slate-300 p-6 text-center">
                <div className="w-10 h-10 bg-slate-200 rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg">🦃</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Holiday Celebrations</p>
                <p className="text-xs text-slate-500 mt-1">Thanksgiving & other events</p>
              </div>
              
              <div className="bg-slate-100 rounded-lg border border-dashed border-slate-300 p-6 text-center">
                <div className="w-10 h-10 bg-slate-200 rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg">🌸</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Seasonal Activities</p>
                <p className="text-xs text-slate-500 mt-1">Spring & summer fun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-medium mb-6">
              Questions About Our Schedule?
            </h2>
            <p className="text-body-large mb-12 text-slate-300">
              If you have questions about our calendar or need to discuss specific dates, 
              we're here to help. Contact us for more information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#6F4D6CFF] hover:bg-[#6F4D6CFF]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link href="/programs">
                <button className="border border-slate-600 text-white hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-colors">
                  View Programs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 