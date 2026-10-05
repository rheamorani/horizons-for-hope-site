import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send, User, Copy, Check, Instagram, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isWarningExpanded, setIsWarningExpanded] = useState(false);

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

        {/* Warning Notice */}
        <div className="flex items-center justify-center mb-8">
          <div 
            className={`bg-red-50 border border-red-200 rounded-lg px-4 max-w-2xl transition-all duration-700 ease-in-out hover:bg-red-100 hover:border-red-300 hover:shadow-lg hover:scale-105 cursor-pointer group overflow-hidden ${
              isWarningExpanded ? 'py-4' : 'py-2'
            }`}
            onClick={() => setIsWarningExpanded(!isWarningExpanded)}
          >
            <div className="flex items-center justify-center gap-2">
              {isWarningExpanded ? (
                <ChevronUp className="h-4 w-4 text-red-600 transition-all duration-300 group-hover:text-red-700" style={{ animation: 'slowBounce 2s ease-in-out infinite' }} />
              ) : (
                <ChevronDown className="h-4 w-4 text-red-600 transition-all duration-300 group-hover:text-red-700" style={{ animation: 'slowBounce 2s ease-in-out infinite' }} />
              )}
              <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 transition-all duration-300 group-hover:text-red-700 group-hover:animate-pulse" />
              <p className="text-red-800 text-xs font-medium transition-all duration-300 group-hover:text-red-900">
                Anyone NOT mentioned here is extrapolating their role in the organization
              </p>
              {isWarningExpanded ? (
                <ChevronUp className="h-4 w-4 text-red-600 transition-all duration-300 group-hover:text-red-700" style={{ animation: 'slowBounce 2s ease-in-out infinite' }} />
              ) : (
                <ChevronDown className="h-4 w-4 text-red-600 transition-all duration-300 group-hover:text-red-700" style={{ animation: 'slowBounce 2s ease-in-out infinite' }} />
              )}
            </div>
            
            <div className={`transition-all duration-700 ease-in-out ${
              isWarningExpanded 
                ? 'max-h-96 opacity-100 mt-3 pt-3 border-t border-red-200' 
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <p className="text-red-800 text-xs leading-relaxed">
                <strong>Important Notice:</strong> The members listed on this website are the only verified leadership members of HorizonsForHope. 
                Any other individuals claiming to lead this organization are extending their actual role beyond what it was in reality. 
                Please verify any claims of leadership or representation through our official contact channels.
              </p>
            </div>
          </div>
        </div>

        {/* Team Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Isabella Herrera */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <User className="w-full h-full p-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">Isabella Herrera</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-sm text-muted-foreground">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Co-Founder
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Mariana Padilla */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <User className="w-full h-full p-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">Mariana Padilla</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-sm text-muted-foreground">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Co-Founder
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Lila Mathuria */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <User className="w-full h-full p-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">Lila Mathuria</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-sm text-muted-foreground">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Volunteer
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Vyshnavi Kadiyala */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <User className="w-full h-full p-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">Vyshnavi Kadiyala</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-sm text-muted-foreground">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Volunteer
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Rhea Morani */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <User className="w-full h-full p-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">Rhea Morani</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-sm text-muted-foreground">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Volunteer
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Lillian Ho */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <User className="w-full h-full p-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">Lillian Ho</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-sm text-muted-foreground">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </div>
              <div className="text-center mt-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Volunteer
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
