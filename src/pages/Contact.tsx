import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import bookDecoration from "@/assets/book-decoration.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      {/* Educational decoration */}
      <img 
        src={bookDecoration} 
        alt="" 
        className="absolute top-40 right-20 w-20 h-20 opacity-15 animate-fade-in hidden lg:block"
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Send className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-sunset bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to learn more? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-glow transition-all duration-300 animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-sunset">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">info@horizonsforhope.org</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-sunset">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Phone</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-sunset">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Address</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">123 Education Lane<br />Community City, CC 12345</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about how we can help..."
                    className="min-h-[150px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-sunset text-primary-foreground hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 p-8 bg-gradient-warm rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Image Placeholder</h3>
            <p className="text-muted-foreground mb-4">
              Office location map or team photo can be added here
            </p>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">[ Location/Team Image Placeholder ]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
