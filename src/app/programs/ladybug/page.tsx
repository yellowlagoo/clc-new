import React from "react";
import Link from "next/link";
import { 
  Calendar, 
  Users, 
  Clock,
  CheckCircle,
  ArrowLeft,
  MapPin,
  User
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LadybugClassroomPage() {
  const schedule = [
    { time: "8:30-9:30", activity: "Arrival & Free Play", description: "Greeting children with selected activities. Indoor or outdoor play." },
    { time: "9:30-9:45", activity: "Morning Snack", description: "Hand washing and snack time at the table." },
    { time: "9:45-10:00", activity: "Circle Time", description: "Good morning song, finger play, books, and daily announcements." },
    { time: "10:00-10:30", activity: "Individual/Small Group Activities", description: "Children work on projects with teachers." },
    { time: "10:30-10:45", activity: "Transition", description: "Diaper changing, bathroom, and hand washing." },
    { time: "10:45-11:30", activity: "Outdoor Play", description: "Outside activities and exploration." },
    { time: "11:30", activity: "Story Time/Yoga", description: "Quiet time with stories and movement." },
    { time: "11:45", activity: "Lunch Preparation", description: "Bathroom, hand washing, and lunch begins." },
    { time: "12:15", activity: "Rest Preparation", description: "Clean up, bathroom, teeth brushing, and diaper changing." },
    { time: "12:30", activity: "Rest Time/Departure", description: "Morning children departure or outdoor play and rest period." }
  ];

  const faqs = [
    {
      question: "What is your teacher-student ratio?",
      answer: "In the Ladybugs Classroom, we maintain a 1:6 ratio to ensure personalized attention for each child."
    },
    {
      question: "What meals are provided?",
      answer: "We provide 2 snacks daily: morning snack includes fruits, yogurt with granola, and pancakes. Afternoon snack consists of cheeses, crackers, and fruits."
    },
    {
      question: "How much time do children spend outside?",
      answer: "Children spend a great amount of time outdoors throughout the day. In the morning, they move in and out of the classroom, and in the afternoon they average 2 hours outside. We also take weekly walks to the neighborhood park."
    },
    {
      question: "Do you help with potty training?",
      answer: "Yes, we assist and support children as they go through their potty learning process."
    },
    {
      question: "What subjects do you teach?",
      answer: "We teach math, English, art, music, and science. With our Reggio Emilia-inspired curriculum, children choose the right way to learn for them."
    },
    {
      question: "How do you handle behavioral challenges?",
      answer: "We first focus on positive redirection. If this doesn't work, we move to cool down time. We treat all children with respect and acknowledge their feelings and emotions."
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
            <div className="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">🐞</span>
            </div>
            <h1 className="text-large mb-6 text-slate-900">
              The Ladybug Classroom
            </h1>
            <p className="text-body-large mb-8 text-slate-600">
              Reggio Emilia Curriculum for 3-4 year olds in Mountain View
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Tour
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-2">Ages 3–4</div>
                <div className="text-slate-600">Years Old</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#6F4D6CFF] mb-2">1:6 Ratio</div>
                <div className="text-slate-600">Teacher to Student</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500 mb-2">Enrolling</div>
                <div className="text-slate-600">Accepting Applications</div>
              </div>
            </div>

            <p className="text-body max-w-3xl mx-auto">
              In our Ladybugs classroom, teamwork is the name of the game as we build on social, communication, 
              and problem-solving skills. Children are encouraged to embrace their curiosity and build independence 
              through creative exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                            <div className="w-12 h-12 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-[#6F4D6CFF]" />
                </div>
                <CardTitle>Social & Emotional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  With lots of group collaboration, children learn to work together to solve problems. 
                  They are encouraged to listen to one another, understand varying points of view, 
                  and celebrate their friends' achievements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                            <div className="w-12 h-12 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mb-4">
              <User className="h-6 w-6 text-[#6F4D6CFF]" />
                </div>
                <CardTitle>Focused on the Individual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We keep our classes small and our teacher ratios high (1:6 in Ladybugs) to ensure 
                  each child is nurtured, prioritized, and encouraged as a unique individual.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                            <div className="w-12 h-12 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-[#6F4D6CFF]" />
                </div>
                <CardTitle>Accessible Tuition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We believe childcare should be affordable and open to people of all backgrounds. 
                  We try to keep our tuition rates as low as we can to ensure as many families as 
                  possible can access our center.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Life in the Classroom */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-medium mb-8 text-slate-900 text-center">
              Life in the Ladybug Classroom
            </h2>
            <div className="bg-slate-50 rounded-lg p-8 space-y-6">
              <p className="text-body">
                Our classroom acts as the "third teacher" and is full of learning activities that children are 
                free to explore independently. From role-play items to art materials, children choose and teachers 
                follow, enabling them to create and learn spontaneously.
              </p>
              <p className="text-body">
                We spend a lot of time outside in our fun courtyard playground and garden. Children love planting 
                flowers and watching them grow!
              </p>
              
              {/* Activity Photo Gallery */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/ladybug-classroom.jpeg" 
                    alt="Ladybug classroom learning environment"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                    <p className="text-sm font-medium">Classroom Environment</p>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/ladybug-play.jpeg" 
                    alt="Children playing in the Ladybug classroom"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                    <p className="text-sm font-medium">Active Play Time</p>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/ladybug-story.jpeg" 
                    alt="Story time in the Ladybug classroom"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                    <p className="text-sm font-medium">Story Time</p>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/ladybug-art.jpeg" 
                    alt="Art activities in the Ladybug classroom"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                    <p className="text-sm font-medium">Creative Arts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-medium mb-12 text-slate-900 text-center">
              Average Day in the Ladybug Classroom
            </h2>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="text-[#6F4D6CFF] font-bold text-lg min-w-[120px]">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-1">{item.activity}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-medium mb-12 text-slate-900 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-3">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-medium mb-6">
              Ready to Join the Ladybug Classroom?
            </h2>
            <p className="text-body-large mb-12 text-slate-300">
              We're currently accepting enrollments for our Ladybug Classroom. 
              Schedule a tour to see our engaging learning environment firsthand.
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
                  Contact Us
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