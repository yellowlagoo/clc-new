import React from "react";
import Link from "next/link";
import { 
  Calendar, 
  Users, 
  Clock,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  MapPin,
  User
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProgramsOverviewPage() {
  const classrooms = [
    {
      name: "Butterfly Classroom",
      emoji: "🦋",
      ages: "2-3 Years",
      ratio: "1:4",
      status: "Enrolling",
      description: "In our Butterflies classroom, we work on developing skills such as listening, following instructions and working in collaboration with our friends. Toddlers are encouraged to explore their own interests as they grow into little learners ready for preschool.",
      features: ["Social & emotional development", "Individual focus with 1:4 ratio", "Reggio Emilia curriculum"],
      href: "/programs/butterflys"
    },
    {
      name: "Ladybug Classroom", 
      emoji: "🐞",
      ages: "3-4 Years",
      ratio: "1:6", 
      status: "Enrolling",
      description: "In our Ladybugs classroom, teamwork is the name of the game as we build on social, communication and problem solving skills. Children are encouraged to embrace their curiosity and build independence through creative exploration.",
      features: ["Group collaboration skills", "Independence building", "Creative exploration"],
      href: "/programs/ladybug"
    },
    {
      name: "Dragonfly Classroom",
      emoji: "🪲", 
      ages: "4-5 Years",
      ratio: "1:9",
      status: "Enrolling",
      description: "The Dragonfly classroom gets your little one ready for Kindergarten by exploring more complex ideas as they play and developing critical thinking skills. Children build their confidence and make friends for life.",
      features: ["Kindergarten preparation", "Critical thinking skills", "Confidence building"],
      href: "/programs/dragonfly"
    }
  ];

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
            <h1 className="text-large mb-6 text-slate-900">
              Our Learning Programs
            </h1>
            <p className="text-body-large mb-12 text-slate-600">
              Discover the perfect classroom environment for your child's development. 
              Each program is thoughtfully designed around the Reggio Emilia approach, 
              fostering creativity, independence, and lifelong learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Tour
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Classrooms Overview */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {classrooms.map((classroom, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{classroom.emoji}</span>
                  </div>
                  
                  {/* Classroom Image */}
                  <div className="rounded-lg overflow-hidden mb-4">
                    {classroom.name === "Ladybug Classroom" ? (
                      <img 
                        src="/ladybug-classroom.jpeg" 
                        alt="Ladybug Classroom at Children's Learning Cottage"
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <div className="bg-slate-100 rounded-lg border border-dashed border-slate-300 p-6 text-center">
                        <div className="w-8 h-8 bg-slate-200 rounded mx-auto mb-2 flex items-center justify-center">
                          <span className="text-sm">📷</span>
                        </div>
                        <p className="text-xs text-slate-500">{classroom.name} Photo</p>
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className="text-center">{classroom.name}</CardTitle>
                  
                  <div className="grid grid-cols-3 gap-4 text-center mt-4">
                    <div>
                      <div className="text-lg font-bold text-slate-900">{classroom.ages}</div>
                      <div className="text-sm text-slate-600">Age Range</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#6F4D6CFF]">{classroom.ratio}</div>
                      <div className="text-sm text-slate-600">Ratio</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-500">{classroom.status}</div>
                      <div className="text-sm text-slate-600">Status</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-slate-600 mb-6">
                    {classroom.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {classroom.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <Link href={classroom.href}>
                      <Button className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-medium mb-12 text-slate-900 text-center">
              Why Families Choose Our Programs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                              <div className="w-12 h-12 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-[#6F4D6CFF]" />
                  </div>
                  <CardTitle>Reggio Emilia Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Our curriculum is based on the world-renowned Reggio Emilia approach, 
                    where children are viewed as capable, curious learners who construct 
                    their own knowledge through exploration and discovery.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                              <div className="w-12 h-12 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mb-4">
              <User className="h-6 w-6 text-[#6F4D6CFF]" />
                  </div>
                  <CardTitle>Small Class Sizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We maintain small class sizes with excellent teacher-to-student ratios 
                    ranging from 1:4 to 1:9, ensuring each child receives personalized 
                    attention and support for their individual growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                              <div className="w-12 h-12 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-[#6F4D6CFF]" />
                  </div>
                  <CardTitle>Accessible to All Families</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We believe quality childcare should be accessible to families from all 
                    backgrounds. Our competitive tuition rates ensure that excellent early 
                    education is within reach for as many families as possible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                              <div className="w-12 h-12 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-[#6F4D6CFF]" />
                  </div>
                  <CardTitle>Balanced Daily Rhythm</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Each day includes a perfect balance of outdoor exploration, creative 
                    activities, quiet learning time, and social interaction, supporting 
                    all aspects of your child's development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-medium mb-6">
              Ready to Find Your Child's Perfect Classroom?
            </h2>
            <p className="text-body-large mb-12 text-slate-300">
              Schedule a tour to visit our classrooms and meet our educators. 
              We'd love to show you how we nurture each child's unique potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#6F4D6CFF] hover:bg-[#6F4D6CFF]/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Tour
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="border-slate-600 text-white hover:bg-slate-800">
                  <MapPin className="mr-2 h-5 w-5" />
                  Visit Our Campus
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