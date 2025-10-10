import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Share your expertise and time to help students succeed",
      details: [
        "Tutoring and mentoring students",
        "Guest speaking opportunities",
        "Workshop facilitation",
        "Administrative support",
      ],
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Support our mission with financial contributions",
      details: [
        "One-time or recurring donations",
        "Scholarship fund contributions",
        "Program-specific funding",
        "Equipment and materials support",
      ],
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Join our community events and fundraisers",
      details: [
        "Annual fundraising galas",
        "Community workshops",
        "Student showcases",
        "Networking events",
      ],
    },
    {
      icon: BookOpen,
      title: "Partner With Us",
      description: "Collaborate as an organization or business",
      details: [
        "Corporate sponsorships",
        "Educational partnerships",
        "Internship programs",
        "Resource sharing",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-sunset bg-clip-text text-transparent">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to contribute to our mission and make a lasting impact in our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index} 
              className="hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-sunset">
                    <opportunity.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{opportunity.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{opportunity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opportunity.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-sunset text-primary-foreground rounded-lg p-8 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Your involvement, whether through time, resources, or expertise, helps us continue 
            providing quality education to those who need it most.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-glow">
              Contact Us to Get Started
            </Button>
          </Link>
        </div>

        <div className="p-8 bg-gradient-warm rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Image Placeholder</h3>
          <p className="text-muted-foreground mb-4">
            Photos of volunteers, community events, or student success stories can be added here
          </p>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[ Community Engagement Image Placeholder ]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
