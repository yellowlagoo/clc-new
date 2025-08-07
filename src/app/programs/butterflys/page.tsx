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

export default function ButterflyClassroomPage() {
  const schedule = [
    { time: "8:30-9:30", activity: "Arrival", description: "Greeting children. Selected activities for children to choose while arrival continues. Children play freely (indoors or outdoors)" },
    { time: "9:30-9:45", activity: "Morning Snack", description: "Children get ready for snack – wash hands and sit down at the table." },
    { time: "9:45-10:00", activity: "Circle Time", description: "Good morning Song, finger play, books/announcements. Children receive information about planned activities, special activities." },
    { time: "10:00-10:30", activity: "Individual/Small Group Activities", description: "Children work on projects with the teacher." },
    { time: "10:30-10:45", activity: "Transition", description: "Diaper changing/ bathroom/washing hands" },
    { time: "10:45-11:30", activity: "Outdoor Play and Activities", description: "Active outdoor play and exploration" },
    { time: "11:30", activity: "Story Time/Yoga", description: "Quiet time with stories and gentle movement" },
    { time: "11:45", activity: "Lunch Preparation", description: "Children get ready for lunch (bathroom, wash hands)" },
    { time: "12:15", activity: "Lunch Begins", description: "Lunch time together" },
    { time: "12:15", activity: "Transition", description: "Clean up, use the bathroom, brush teeth, diaper changing and prepare for rest time." },
    { time: "12:30", activity: "Departure/Rest Time", description: "Departure of Morning children/outdoor play" }
  ];

  const faqs = [
    {
      question: "What is your teacher-student ratio?",
      answer: "In the Butterflies Classroom, the ratio is 1:4 to ensure each child receives individual attention and care."
    },
    {
      question: "What meals are provided?",
      answer: "CLC provides 2 snacks. A morning snack that consists of fruits, yogurt with granola, pancakes. An afternoon snack consists of cheeses, crackers, fruits."
    },
    {
      question: "How much time do the children spend outside?",
      answer: "Children spend a great amount of time throughout the day. In the morning children are in and out of the classroom. In the afternoon they spend an average of 2 hours outside. The children also do weekly walks to the neighborhood park."
    },
    {
      question: "Do you help with potty training?",
      answer: "We do assist and support children as they go through their potty learning process."
    },
    {
      question: "What subjects do you teach?",
      answer: "Children's Learning Cottage teaches maths, English, art, music and science subjects. With our Reggio Emilia curriculum, the children choose the right way to learn for them."
    },
    {
      question: "Do you have rest time?",
      answer: "We have a rest period that lasts 1-2 hours."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Back Navigation */}
      <section className="bg-slate-50 py-4">
        <div className="container">
          <Link href="/programs" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Programs
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding-large bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#6F4D6CFF]/10 rounded-lg flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">🦋</span>
            </div>
            <h1 className="text-large mb-6 text-slate-900">
              The Butterfly Classroom
            </h1>
            <p className="text-body-large mb-8 text-slate-600">
              Reggio Emilia Curriculum for 2-3 year olds in Mountain View
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
                <div className="text-2xl font-bold text-slate-900 mb-2">Ages 2–3</div>
                <div className="text-slate-600">Years Old</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#6F4D6CFF] mb-2">1:4 Ratio</div>
                <div className="text-slate-600">Teacher to Student</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500 mb-2">Enrolling</div>
                <div className="text-slate-600">Accepting Applications</div>
              </div>
            </div>

            <p className="text-body max-w-3xl mx-auto">
              In our Butterflies classroom, we work on developing skills such as listening, following instructions 
              and working in collaboration with our friends. Toddlers are encouraged to explore their own interests 
              as they grow into little learners ready for preschool.
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
                  We keep our classes small and our teacher ratios high (1:4 in Butterflies) to ensure 
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
              Life in the Butterfly Classroom
            </h2>
            <div className="bg-slate-50 rounded-lg p-8 space-y-6">
              <p className="text-body">
                With small group sizes and a ratio of 1:4, our teachers are able to pay close attention to the 
                children as individuals and create or adapt learning opportunities that really engage each child. 
                Some children are interested in the weather, others like princesses! We incorporate those interests 
                into our artwork, dramatic play and science lessons.
              </p>
              <p className="text-body">
                There are lots of exciting things to discover in our classroom and children are encouraged to 
                explore and choose what they'd like to play with.
              </p>
              
              {/* Activity Photo Gallery Placeholder */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-slate-100 rounded-lg border border-dashed border-slate-300 p-6 text-center">
                  <div className="w-8 h-8 bg-slate-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-sm">🎨</span>
                  </div>
                  <p className="text-xs text-slate-500">Art Activity</p>
                </div>
                <div className="bg-slate-100 rounded-lg border border-dashed border-slate-300 p-6 text-center">
                  <div className="w-8 h-8 bg-slate-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-sm">🧩</span>
                  </div>
                  <p className="text-xs text-slate-500">Play Time</p>
                </div>
                <div className="bg-slate-100 rounded-lg border border-dashed border-slate-300 p-6 text-center">
                  <div className="w-8 h-8 bg-slate-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-sm">📚</span>
                  </div>
                  <p className="text-xs text-slate-500">Story Time</p>
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
              The Daily Flow of the Day
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
              Ready to Join the Butterfly Classroom?
            </h2>
            <p className="text-body-large mb-12 text-slate-300">
              We're currently accepting enrollments for our Butterfly Classroom. 
              Schedule a tour to see our toddler program firsthand.
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