import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, BookOpen, HandHeart, CalendarDays, Mail, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Using Resend's Node.js SDK approach
      // Try Vercel API route first, then Netlify function as fallback
      let response;
      try {
        response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            subject: 'New Interest from HorizonsForHope Website',
            message: `A visitor has submitted their email: ${email}\n\nThey are interested in learning more about our programs and opportunities.`,
          }),
        });
      } catch (vercelError) {
        // Fallback to Netlify function
        response = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            subject: 'New Interest from HorizonsForHope Website',
            message: `A visitor has submitted their email: ${email}\n\nThey are interested in learning more about our programs and opportunities.`,
          }),
        });
      }

      if (response.ok) {
        toast({
          title: "Email Submitted!",
          description: "Thank you for your interest. We'll be in touch soon.",
        });
        setEmail("");
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your email. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd_7dORmLM3hy4oJPBrEUcXcdBnW5j7lNLQLGGAK9KZNAa9fA/viewform",
      formTitle: "HorizonsForHope Tutor Interest Form",
      formDescription: "This form is intended for students at CVHS who are interested in tutoring with us."
    },
    {
      icon: BookOpen,
      title: "Partner With Us",
      description: "Establish a partnership with HorizonsForHope",
      details: [
        "Start a new chapter in your area",
        "Connect with local schools and communities",
        "Build educational partnerships in your region",
        "Expand the mission to reach more students",
      ],
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfT_yV-XIwcmtj4g8pc_BR9MchHZXHXjzBBryo9kg7Inatpgg/viewform",
      formTitle: "HorizonsForHope Branch Application Form",
      formDescription: "This form is intended for members hoping to create a new HorizonsForHope branch in your area."
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the path that best fits your role and interests
          </p>
        </div>

        {/* Teachers & School Administrators Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">For Teachers & School Administrators</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional development, partnerships, and collaboration opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Schedule a Meeting - Left Side */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CalendarDays className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Schedule a Meeting</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm">
                  Book a 30-minute meeting to discuss partnerships and programs.
                </p>
              </CardHeader>
              <CardContent>
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/horizonsforhopecontact/30min"
                  style={{ minWidth: '200px', height: '400px' }}
                />
              </CardContent>
            </Card>

            {/* Email Form Submission - Right Side */}
            <div className="flex items-center justify-center">
              <Card className="shadow-card h-fit w-full max-w-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Want More Information?</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Enter your email to get a comprehensive overview of our programs and services right to your inbox.
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@provider.com"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden shine-button">
                      Submit Email
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Students Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">For Students</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learning opportunities, mentorship, and community involvement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {opportunities.map((opportunity, index) => (
              <Card 
                key={index} 
                className="hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <opportunity.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">{opportunity.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {opportunity.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Google Form Preview */}
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{opportunity.formTitle}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {opportunity.formDescription}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span>📝</span>
                      <span>Email, Name, Phone, Grade Level, Subjects</span>
                    </div>
                    <a
                      href={opportunity.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors relative overflow-hidden shine-button"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open Google Form
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
