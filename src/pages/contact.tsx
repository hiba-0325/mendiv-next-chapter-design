import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Innovation Drive", "Palo Alto, CA 94301", "United States"],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon - Fri", "9:00 AM - 6:00 PM PST"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@mendiv.com", "support@mendiv.com"],
      action: "Send Email",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121417] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Let’s Start Your{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Health Journey
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock your genetic potential and take control of your health. Our
            expert team is here to guide you toward a longer, healthier life.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-black/60 border border-green-500/20 backdrop-blur-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-heading font-bold">
                  <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                    Send Us a Message
                  </span>
                </CardTitle>
                <p className="text-gray-400">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="First Name"
                    className="bg-zinc-900 border-green-500/20"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-zinc-900 border-green-500/20"
                  />
                </div>

                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-zinc-900 border-green-500/20"
                />
                <Input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="bg-zinc-900 border-green-500/20"
                />
                <Input
                  placeholder="Subject"
                  className="bg-zinc-900 border-green-500/20"
                />

                <Textarea
                  placeholder="Tell us about your health goals..."
                  className="bg-zinc-900 border-green-500/20 min-h-[150px]"
                />

                <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl py-6 text-lg shadow-lg shadow-green-500/20">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-black/60 border border-green-500/20 backdrop-blur-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold">
                  <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                    Get in Touch
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <info.icon className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-400 text-sm">
                          {detail}
                        </p>
                      ))}
                      <Button
                        variant="link"
                        className="p-0 mt-2 text-green-400 hover:text-green-300"
                      >
                        {info.action} →
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-green-500/10 to-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Schedule a consultation with our health experts today and start
            unlocking your full potential.
          </p>
          <Button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 text-lg rounded-xl shadow-lg shadow-green-500/30">
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
