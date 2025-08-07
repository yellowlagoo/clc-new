import React from "react";
import Link from "next/link";
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Clock,
  CheckCircle,
  ArrowRight,
  Award,
  Star,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding-large bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-large mb-8 text-slate-900">
              Quality Early Childhood Education in Mountain View
            </h1>
            <p className="text-body-large mb-12 max-w-3xl mx-auto">
              Children's Learning Cottage provides exceptional Reggio Emilia-inspired 
              education for children ages 2-5. We create a nurturing environment where 
              every child can learn, grow, and thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Tour
                </Button>
              </Link>
              <Link href="/programs">
                <Button variant="secondary" size="lg">
                  View Programs
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-lg overflow-hidden mb-16 shadow-lg">
              <img 
                src="/hero-classroom.jpg" 
                alt="Children learning at Children's Learning Cottage classroom"
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">Ages 2–5</div>
                <div className="text-slate-600">Comprehensive Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6F4D6CFF] mb-2">4:1 Ratio</div>
                <div className="text-slate-600">Small Class Sizes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">8:30–5:30</div>
                <div className="text-slate-600">Full Day Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-medium mb-6 text-slate-900">
              Why Families Choose Our School
            </h2>
            <p className="text-body">
              Our proven Reggio Emilia-inspired approach combines academic excellence with 
              nurturing care, preparing children for lifelong success in learning and life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                            <div className="w-12 h-12 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-[#6F4D6CFF]" />
                </div>
                <CardTitle>Expert Educators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Our experienced teachers maintain optimal ratios to ensure every child receives 
                  individualized attention and support.
                </p>
                <div className="space-y-2 text-sm bg-slate-50 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span>Ages 2–3:</span> 
                    <span className="font-semibold">4:1 ratio</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ages 3–5:</span> 
                    <span className="font-semibold">6:1 / 9:1 ratio</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                            <div className="w-12 h-12 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-[#6F4D6CFF]" />
                </div>
                <CardTitle>Family-Focused Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Designed for working families, our flexible schedules adapt to your needs 
                  without compromising educational quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                            <div className="w-12 h-12 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-[#6F4D6CFF]" />
                </div>
                <CardTitle>Quality Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  High-quality education at competitive rates, ensuring exceptional early childhood 
                  development is accessible to all families.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-medium mb-6 text-slate-900">
              Age-Appropriate Learning Environments
            </h2>
            <p className="text-body">
              Each classroom is designed to support optimal development at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🦋</span>
                </div>
                {/* Butterfly Classroom Image Placeholder */}
                <div className="bg-slate-100 rounded-lg border border-dashed border-slate-300 p-6 text-center mb-4">
                  <div className="w-8 h-8 bg-slate-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-sm">📷</span>
                  </div>
                  <p className="text-xs text-slate-500">Butterfly Classroom Photo</p>
                </div>
                <CardTitle className="text-center">Butterfly Classroom</CardTitle>
                <p className="text-center text-slate-600 font-semibold">Ages 2–3</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Foundation building through play-based learning, developing essential social skills 
                  and emotional regulation in a nurturing environment.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Individual developmental pacing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Emotional expression & safety
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Early literacy & numeracy introduction
                  </li>
                </ul>
                              <div className="mt-6">
                <Link href="/programs/butterflys">
                  <Button variant="secondary" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🐞</span>
                </div>
                {/* Ladybug Classroom Image */}
                <div className="rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/ladybug-classroom.jpeg" 
                    alt="Ladybug Classroom at Children's Learning Cottage"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardTitle className="text-center">Ladybug Classroom</CardTitle>
                <p className="text-center text-slate-600 font-semibold">Ages 3–4</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Independence and collaboration development through structured exploration, 
                  fostering curiosity and critical thinking skills.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Curiosity-driven exploration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Advanced language development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Creative problem-solving
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/programs/ladybug">
                    <Button variant="secondary" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🪲</span>
                </div>
                {/* Dragonfly Classroom Image Placeholder */}
                <div className="bg-slate-100 rounded-lg border border-dashed border-slate-300 p-6 text-center mb-4">
                  <div className="w-8 h-8 bg-slate-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-sm">📷</span>
                  </div>
                  <p className="text-xs text-slate-500">Dragonfly Classroom Photo</p>
                </div>
                <CardTitle className="text-center">Dragonfly Classroom</CardTitle>
                <p className="text-center text-slate-600 font-semibold">Ages 4–5</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Kindergarten preparation through advanced project work, developing leadership 
                  skills and academic readiness for future success.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Kindergarten readiness focus
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Interdisciplinary learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Leadership skill development
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/programs/dragonfly">
                    <Button variant="secondary" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-medium mb-6 text-slate-900">
              Tuition & Schedule Options
            </h2>
            <p className="text-body">
              Flexible scheduling options to meet your family's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-[#6F4D6CFF]/30">
              <CardHeader>
                <CardTitle className="text-[#6F4D6CFF] text-center">Full Day Care</CardTitle>
                <p className="text-sm text-slate-600 text-center">8:30am – 5:30pm</p>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                                  <div className="p-4 bg-[#6F4D6CFF]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[#6F4D6CFF]">$2,235</div>
                    <div className="text-sm text-slate-600">5 days weekly</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>3 days:</span>
                      <span className="font-semibold">$1,702</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 days:</span>
                      <span className="font-semibold">$1,190</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 text-center">Half Day</CardTitle>
                <p className="text-sm text-slate-600 text-center">9:00am – 12:30pm</p>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">$1,375</div>
                    <div className="text-sm text-slate-600">5 days weekly</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>3 days:</span>
                      <span className="font-semibold">$1,060</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 days:</span>
                      <span className="font-semibold">$780</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 text-center">Extended Day</CardTitle>
                <p className="text-sm text-slate-600 text-center">9:00am – 3:00pm</p>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">$1,970</div>
                    <div className="text-sm text-slate-600">5 days weekly</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>3 days:</span>
                      <span className="font-semibold">$1,402</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 days:</span>
                      <span className="font-semibold">$1,175</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-100">
              <CardHeader>
                <CardTitle className="text-slate-700 text-center">Additional Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm font-semibold text-yellow-800">
                      Additional $200/month for non-potty trained children
                    </p>
                  </div>
                  <Button className="w-full">
                    Get Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Our Director */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="text-medium mb-6 text-slate-900">
                Meet Our Director
              </h2>
              <h3 className="text-xl font-bold text-[#6F4D6CFF] mb-4">Adela Alvarado</h3>
              <p className="text-body mb-4">
                Founder and Director Adela Alvarado established Children's Learning Cottage in 2010, 
                bringing over 25 years of expertise in early childhood education and curriculum development.
              </p>
              <p className="text-body mb-8">
                As a passionate child advocate, Adela believes every child deserves access to exceptional 
                early education. Her vision and dedication have created a learning environment where 
                children thrive academically, socially, and emotionally.
              </p>
              <Link href="/team">
                <Button variant="secondary">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div>
              {/* Director Photo Placeholder */}
              <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 p-8 text-center mb-4">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👩‍🏫</span>
                </div>
                <p className="text-slate-600 font-medium">Director Photo</p>
                <p className="text-sm text-slate-500 mt-1">Professional photo of Adela Alvarado</p>
              </div>
              
              <div className="bg-slate-100 rounded-lg p-6">
                <blockquote className="text-slate-700 text-lg italic mb-4">
                  "Every child deserves access to exceptional early childhood education that nurtures their unique potential."
                </blockquote>
                <p className="text-sm text-slate-600 font-medium">— Adela Alvarado, Founder & Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#6F4D6CFF]/30">
              <CardContent className="text-center p-12">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-slate-700 mb-6 italic">
                  "We can't express how grateful we are to have found CLC! 
                  Stefan learned through play and made lifelong friends. Thank you for making CLC 
                  our true 'home away from home'."
                </blockquote>
                <div>
                  <p className="font-bold text-slate-900">– The Chiriac Family</p>
                  <p className="text-slate-600 text-sm">Parents of Stefan, Dragonfly Classroom</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary">
              Read More Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding-large bg-slate-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-medium mb-6">
              Begin Your Child's Learning Journey
            </h2>
            <p className="text-body-large mb-12 text-slate-300">
              Join our community of families who value excellence in early childhood education. 
              Schedule a personal tour to experience our Reggio Emilia-inspired approach firsthand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-[#6F4D6CFF] hover:bg-[#6F4D6CFF]/90">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Tour
              </Button>
              <Button variant="secondary" size="lg" className="border-slate-600 text-white hover:bg-slate-800">
                <Phone className="mr-2 h-5 w-5" />
                Call (650) 564-9906
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-bold mb-2">Visit Us</h4>
                <p className="text-slate-400">675 Escuela Avenue, Mountain View</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Hours</h4>
                <p className="text-slate-400">Monday – Friday: 8:30 AM – 5:30 PM</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Contact</h4>
                <p className="text-slate-400">adela@clcottage.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
