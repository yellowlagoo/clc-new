import React from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Calendar } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the dedicated educators at Children's Learning Cottage. Our experienced team brings passion and expertise to every classroom, fostering a love of learning in children ages 2-5.",
  keywords: [
    "preschool teachers Mountain View",
    "early childhood educators",
    "qualified preschool staff",
    "Reggio Emilia teachers",
    "experienced child care providers"
  ],
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Example Name 1",
      role: "Example Role",
      classroom: "Example Classroom (Ages 2-3)",
      years: "Example Years",
      email: "example1@clcottage.com",
      image: "👩‍🏫",
      summary: "Example summary describing the teacher's background and expertise. This is placeholder text to show how teacher information would be displayed on the website.",
      education: "Example Education Degree",
      specialties: ["Example Specialty 1", "Example Specialty 2", "Example Specialty 3"]
    },
    {
      name: "Example Name 2",
      role: "Example Role",
      classroom: "Example Classroom (Ages 3-4)",
      years: "Example Years",
      email: "example2@clcottage.com",
      image: "👩‍🏫",
      summary: "Example summary describing the teacher's background and expertise. This is placeholder text to show how teacher information would be displayed on the website.",
      education: "Example Education Degree",
      specialties: ["Example Specialty 1", "Example Specialty 2", "Example Specialty 3"]
    },
    {
      name: "Example Name 3",
      role: "Example Role",
      classroom: "Example Classroom (Ages 3-4)",
      years: "Example Years",
      email: "example3@clcottage.com",
      image: "👩‍🏫",
      summary: "Example summary describing the teacher's background and expertise. This is placeholder text to show how teacher information would be displayed on the website.",
      education: "Example Education Degree",
      specialties: ["Example Specialty 1", "Example Specialty 2", "Example Specialty 3"]
    },
    {
      name: "Example Name 4",
      role: "Example Role",
      classroom: "Example Classroom (Ages 4-5)",
      years: "Example Years",
      email: "example4@clcottage.com",
      image: "👩‍🏫",
      summary: "Example summary describing the teacher's background and expertise. This is placeholder text to show how teacher information would be displayed on the website.",
      education: "Example Education Degree",
      specialties: ["Example Specialty 1", "Example Specialty 2", "Example Specialty 3"]
    },
    {
      name: "Example Name 5",
      role: "Example Role",
      classroom: "Example Classroom Support",
      years: "Example Years",
      email: "example5@clcottage.com",
      image: "👩‍🏫",
      summary: "Example summary describing the teacher's background and expertise. This is placeholder text to show how teacher information would be displayed on the website.",
      education: "Example Education Degree",
      specialties: ["Example Specialty 1", "Example Specialty 2", "Example Specialty 3"]
    },
    {
      name: "Example Name 6",
      role: "Example Role",
      classroom: "Example Programs",
      years: "Example Years",
      email: "example6@clcottage.com",
      image: "👨‍🏫",
      summary: "Example summary describing the teacher's background and expertise. This is placeholder text to show how teacher information would be displayed on the website.",
      education: "Example Education Degree",
      specialties: ["Example Specialty 1", "Example Specialty 2", "Example Specialty 3"]
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-[#6F4D6CFF] hover:text-[#6F4D6CFF]/80 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-large mb-8 text-slate-900">
              Meet Our Dedicated Team
            </h1>
            <p className="text-body-large mb-12 max-w-3xl mx-auto">
              Our exceptional educators bring passion, expertise, and genuine care to every 
              interaction with your child. Each team member is committed to fostering a love 
              of learning that will last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[#6F4D6CFF]/30 transition-colors">
                <CardHeader className="text-center">
                  {/* Team Member Photo Placeholder */}
                  <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 p-6 text-center mb-6">
                    <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">{member.image}</span>
                    </div>
                    <p className="text-slate-600 font-medium">{member.name}</p>
                    <p className="text-sm text-slate-500 mt-1">Professional photo</p>
                  </div>
                  
                  <CardTitle className="text-xl text-slate-900 mb-2">
                    {member.name}
                  </CardTitle>
                  <p className="text-[#6F4D6CFF] font-semibold mb-1">{member.role}</p>
                  <p className="text-slate-600 font-medium mb-2">{member.classroom}</p>
                  <p className="text-sm text-slate-500">{member.years} of experience</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Summary */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">About {member.name.split(' ')[0]}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {member.summary}
                    </p>
                  </div>

                  {/* Education & Specialties */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h5 className="font-semibold text-slate-900 text-sm mb-2">Education</h5>
                      <p className="text-slate-600 text-sm">{member.education}</p>
                    </div>
                    
                    <div className="bg-[#6F4D6CFF]/5 rounded-lg p-4">
                      <h5 className="font-semibold text-slate-900 text-sm mb-2">Specialties</h5>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span 
                            key={idx}
                            className="bg-[#6F4D6CFF]/10 text-[#6F4D6CFF] px-2 py-1 rounded text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center text-sm text-slate-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>{member.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-medium mb-6 text-slate-900">
              Ready to Meet Our Team in Person?
            </h2>
            <p className="text-body mb-12">
              Schedule a tour to meet our educators and see how they create a nurturing 
              environment where your child can thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Tour
                </Button>
              </Link>
              <Link href="/programs">
                <Button variant="secondary" size="lg">
                  View Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 