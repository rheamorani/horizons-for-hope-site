import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Heart, Lightbulb, GraduationCap, BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import bookDecoration from "@/assets/book-decoration.png";
import gradDecoration from "@/assets/graduation-decoration.png";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum in math, ethics, computer science, and sciences",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building a supportive learning environment for all students",
    },
    {
      icon: Heart,
      title: "Non-Profit Mission",
      description: "Dedicated to making education accessible to everyone",
    },
    {
      icon: Lightbulb,
      title: "Innovative Approach",
      description: "Modern teaching methods that inspire and engage learners",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Educational decorative elements */}
      <img 
        src={bookDecoration} 
        alt="" 
        className="absolute top-32 left-10 w-16 h-16 opacity-20 animate-fade-in hidden md:block"
      />
      <img 
        src={gradDecoration} 
        alt="" 
        className="absolute top-96 right-10 w-20 h-20 opacity-20 animate-fade-in hidden md:block"
      />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-12 w-12" />
            <BookOpenCheck className="h-10 w-10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Building Brighter Futures
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Empowering students through quality education in mathematics, ethics, computer science, and sciences
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/curriculum">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-glow">
                Explore Curriculum
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            HorizonsForHope is committed to providing accessible, high-quality education that empowers 
            individuals and strengthens communities. We believe in nurturing not just academic excellence, 
            but also ethical leadership and innovative thinking.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-sunset mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-sunset text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of learners, educators, and supporters working together 
            to create positive change through education.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-glow">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
