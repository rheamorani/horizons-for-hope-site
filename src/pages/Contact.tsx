import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send, User, Copy, Check, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import krishImage from "@/assets/krish.jpg";
import sunnyImage from "@/assets/sunny.jpg";
import tanayImage from "@/assets/tanay.png";
import rohanImage from "@/assets/rohan.jpg";
import lillieImage from "@/assets/lillie.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      toast({
        title: "Email Copied!",
        description: `${email} has been copied to your clipboard.`,
      });
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedEmail(false);
      }, 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy email to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Send className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to learn more? We'd love to hear from you!
          </p>
        </div>

        {/* General Contact Information */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-6 w-6 text-primary" />
                <CardTitle>General Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground">horizonsforhope@gmail.com</p>
                <button
                  onClick={() => copyToClipboard("horizonsforhope@gmail.com")}
                  className="p-1 hover:bg-muted rounded transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-6 w-6 text-primary" />
                <CardTitle>Phone (Reasonable Hours) (US +1)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">(832) 951-9801</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Instagram className="h-6 w-6 text-primary" />
                <CardTitle>Instagram</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground">@horizonsforhope_cvhs</p>
                <a
                  href="https://instagram.com/horizonsforhope_cvhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-md transition-colors text-sm"
                >
                  <Instagram className="h-4 w-4" />
                  Follow Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Krish */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={krishImage} 
                  alt="Krish" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Krish Jha</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Mail className="h-5 w-5" />
                <span className="text-base">krish.neil.jha@gmail.com</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Krish Jha, a junior at Carnegie Vanguard High School, co-founded HorizonsForHope, to expand access to education across the globe. Krish has competition experience in Math and Science and has won awards in Math and Chemistry Olympiad. He also has experience tutoring STEM subjects throughout his education.</p>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Co-Founder
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Sunny */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={sunnyImage} 
                  alt="Sunny" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Shivaang (Sunny) Rana</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Mail className="h-5 w-5" />
                <span className="text-base">shivaangr@gmail.com</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Sunny Rana is the head of the computer science department for HorizonsForHope. With proficiency in Python, C#, and JavaScript, he specializes in machine learning and software development. Sunny has worked and completed multiple machine learning projects involving LLM's and regression models. He also has experience teaching elementary to middle school students through piano volunteering at his local music school.</p>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Co-Founder
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Tanay */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={tanayImage} 
                  alt="Tanay" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Tanay Anantasagar</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Mail className="h-5 w-5" />
                <span className="text-base">tanay.anantasagar@gmail.com</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Tanay Anantasagar, a junior at Carnegie Vanguard High School in Houston, Texas, co-founded HorizonsForHope to expand global access to free tutoring in STEM and ethics for students globally. Alongside his work in education, Tanay is a science researcher and an advocate for animal rights, volunteering with organizations like Animals for the Voiceless.</p>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Co-Founder
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Rohan */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={rohanImage} 
                  alt="Rohan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Rohan Jangama</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Mail className="h-5 w-5" />
                <span className="text-base">rohanjangama@gmail.com</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Co-Founder
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Lillie */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={lillieImage} 
                  alt="Lillie" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Lillie Pham</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Mail className="h-5 w-5" />
                <span className="text-base">s1745919@online.houstonisd.org</span>
              </div>

              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Social Media Manager
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Head of Outreach */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 bg-muted flex items-center justify-center">
                <User className="h-16 w-16 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">Natalie Ho</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Mail className="h-5 w-5" />
                <span className="text-base">s1776964@online.houstonisd.org</span>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Head of Outreach
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About Me Section */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center mb-4">About Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                HorizonsForHope was founded at Carnegie Vanguard High School by students who understood firsthand how challenging it can be to learn and grow in a competitive academic environment. We knew the pressure, the late nights, and the feeling that sometimes all you need is someone who truly understands how you learn best.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                That experience inspired us to give back, not through generalized tutoring, but through personalized, one-on-one guidance rooted in empathy and understanding. Our team of dedicated high school mentors works with students across Houston to make learning more accessible, encouraging, and tailored to each individual’s pace and goals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Contact;
