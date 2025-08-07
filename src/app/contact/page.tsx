"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  Users,
  MessageCircle
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
    inquiryType: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      childAge: "",
      message: "",
      inquiryType: "general"
    });
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900">
              Get in Touch
            </h1>
            <p className="text-xl text-navy-600 leading-relaxed">
              We'd love to hear from you! Contact us to learn more about our programs, 
              schedule a tour, or ask any questions about your child's educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Photos */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              Our Beautiful Facility
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Take a look at our welcoming learning environment designed for children to explore, play, and grow.
            </p>
            
            {/* Photo Gallery Placeholders */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 p-8 text-center">
                <div className="w-12 h-12 bg-slate-200 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">🏫</span>
                </div>
                <p className="text-slate-600 font-medium">Exterior Building</p>
                <p className="text-sm text-slate-500 mt-1">Front entrance and playground</p>
              </div>
              
              <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 p-8 text-center">
                <div className="w-12 h-12 bg-slate-200 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">🛝</span>
                </div>
                <p className="text-slate-600 font-medium">Playground Area</p>
                <p className="text-sm text-slate-500 mt-1">Outdoor play equipment</p>
              </div>
              
              <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 p-8 text-center">
                <div className="w-12 h-12 bg-slate-200 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">🍽️</span>
                </div>
                <p className="text-slate-600 font-medium">Dining Area</p>
                <p className="text-sm text-slate-500 mt-1">Meal and snack space</p>
              </div>
              
              <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 p-8 text-center">
                <div className="w-12 h-12 bg-slate-200 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">📚</span>
                </div>
                <p className="text-slate-600 font-medium">Reading Corner</p>
                <p className="text-sm text-slate-500 mt-1">Quiet learning space</p>
              </div>
              
              <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 p-8 text-center">
                <div className="w-12 h-12 bg-slate-200 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">🌳</span>
                </div>
                <p className="text-slate-600 font-medium">Garden Area</p>
                <p className="text-sm text-slate-500 mt-1">Nature exploration space</p>
              </div>
              
              <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 p-8 text-center">
                <div className="w-12 h-12 bg-slate-200 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl">🎨</span>
                </div>
                <p className="text-slate-600 font-medium">Art Station</p>
                <p className="text-sm text-slate-500 mt-1">Creative workspace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-navy-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Visit Us</h3>
                    <p className="text-navy-600 leading-relaxed">
                      675 Escuela Avenue<br />
                      Mountain View, CA 94040
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-navy-50 rounded-2xl">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Call Us</h3>
                    <p className="text-navy-600 leading-relaxed">
                      Main: (650) 564-9906<br />
                      Emergency: (650) 555-0911
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-navy-50 rounded-2xl">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Email Us</h3>
                    <p className="text-navy-600 leading-relaxed">
                      General: info@clcottage.com<br />
                      Director: adela@clcottage.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-navy-50 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">School Hours</h3>
                    <p className="text-navy-600 leading-relaxed">
                      Monday - Friday<br />
                      8:30 AM - 5:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button size="lg" className="w-full justify-start bg-gradient-secondary">
                  <Calendar className="mr-3 h-5 w-5" />
                  Schedule Tour
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-start">
                  <Users className="mr-3 h-5 w-5" />
                  Join Waitlist
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <Card className="shadow-professional-lg p-8">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-navy-700 mr-3" />
                    <h2 className="text-2xl font-bold text-navy-900">Send us a Message</h2>
                  </div>
                  <p className="text-navy-600">
                    Tell us about your child and what you're looking for. We'll get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">
                      Thank You!
                    </h3>
                    <p className="text-navy-600 mb-6 text-lg">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      size="lg"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-3">
                          Parent/Guardian Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border-2 border-navy-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-navy-900 placeholder-navy-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border-2 border-navy-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-navy-900 placeholder-navy-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-navy-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-navy-900 placeholder-navy-400"
                          placeholder="(650) 555-0123"
                        />
                      </div>
                      <div>
                        <label htmlFor="childAge" className="block text-sm font-semibold text-navy-800 mb-3">
                          Child's Age
                        </label>
                        <select
                          id="childAge"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-navy-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-navy-900"
                        >
                          <option value="">Select age</option>
                          <option value="2">2 years old</option>
                          <option value="3">3 years old</option>
                          <option value="4">4 years old</option>
                          <option value="5">5 years old</option>
                          <option value="not-born">Not born yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-semibold text-navy-800 mb-3">
                        Type of Inquiry
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-navy-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-navy-900"
                      >
                        <option value="general">General Information</option>
                        <option value="tour">Schedule a Tour</option>
                        <option value="admissions">Admissions/Enrollment</option>
                        <option value="programs">Program Details</option>
                        <option value="tuition">Tuition & Fees</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-3">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 border-2 border-navy-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-vertical text-navy-900 placeholder-navy-400"
                        placeholder="Tell us about your child, what you're looking for, or any questions you have..."
                      />
                    </div>

                    <div className="flex flex-col space-y-4">
                      <Button 
                        type="submit" 
                        size="xl" 
                        className="w-full bg-gradient-secondary btn-professional"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin mr-3 h-5 w-5 border-2 border-white/30 border-t-white rounded-full" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                      
                      <p className="text-sm text-navy-500 text-center">
                        We typically respond within 24 hours during business days.
                      </p>
                    </div>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 