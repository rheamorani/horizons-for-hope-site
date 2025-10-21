import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpenCheck, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import heroImage from "@/assets/hero-image-new.jpg";
import gradDecoration from "@/assets/graduation-decoration.png";
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.png";

const Home = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [counters, setCounters] = useState({
    chapters: 0,
    tutors: 0,
    students: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const impactRef = useRef<HTMLDivElement>(null);

  const openFullscreen = (imageSrc: string) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  // Counter animation function
  const animateCounter = (target: number, duration: number, callback: (value: number) => void) => {
    const startTime = performance.now();
    const startValue = 0;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      callback(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Start all counters at different speeds but end at the same time
            const duration = 2000; // 2 seconds total
            
            // Chapters: 0 to 3 (fastest)
            animateCounter(3, duration, (value) => {
              setCounters(prev => ({ ...prev, chapters: value }));
            });
            
            // Tutors: 0 to 60 (medium speed)
            animateCounter(60, duration, (value) => {
              setCounters(prev => ({ ...prev, tutors: value }));
            });
            
            // Students: 0 to 100 (slowest)
            animateCounter(100, duration, (value) => {
              setCounters(prev => ({ ...prev, students: value }));
            });
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the section is fully visible
      }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => {
      if (impactRef.current) {
        observer.unobserve(impactRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="min-h-screen relative">
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Building Brighter Futures
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Empowering students through quality education in mathematics, ethics, computer science, and sciences
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/curriculum">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-glow relative overflow-hidden shine-button">
                Explore Curriculum
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-black hover:bg-primary-foreground/10">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Wave Animation */}
        <div className="wave-animation">
          <svg 
            viewBox="0 0 2 1" 
            preserveAspectRatio="none"
          >
            <defs>
              <path id="w" 
                d="
                m0 1v-.5 
                q.5.5 1 0
                t1 0 1 0 1 0
                v.5z" />
            </defs>
            <g>
              <use href="#w" y=".0" fill="#2d55aa" />
              <use href="#w" y=".1" fill="#3461c1" />
              <use href="#w" y=".2" fill="#4579e2" />
            </g>
          </svg>
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

      {/* Overlapping Image 1 - Between Mission and Impact */}
      <div className="relative -my-5 md:-my-10 z-10">
        <div className="flex justify-center md:justify-end md:pr-8">
          <img 
            src={image1} 
            alt="Students learning in classroom" 
            className="w-80 h-60 object-cover rounded-lg shadow-lg border-4 border-white cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
            onClick={() => openFullscreen(image1)}
          />
        </div>
      </div>

      {/* Statistics Section */}
      <section ref={impactRef} className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to educational excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{counters.chapters}</div>
              <div className="text-xl font-semibold text-foreground mb-2">Houston-wide Chapters</div>
              <div className="text-muted-foreground">Expanding our reach across the city</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{counters.tutors}+</div>
              <div className="text-xl font-semibold text-foreground mb-2">Tutors</div>
              <div className="text-muted-foreground">Dedicated educators and mentors</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">~{counters.students}</div>
              <div className="text-xl font-semibold text-foreground mb-2">Students Reached</div>
              <div className="text-muted-foreground">Students impacted through education</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Image 2 - Between Impact and Call to Action */}
      <div className="relative -my-5 md:-my-10 z-10">
        <div className="flex justify-center md:justify-start md:pl-8">
          <img 
            src={image2} 
            alt="Students engaged in STEM activities" 
            className="w-80 h-60 object-cover rounded-lg shadow-lg border-4 border-white cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
            onClick={() => openFullscreen(image2)}
          />
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-sunset text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of learners, educators, and supporters working together 
            to create positive change through education.
          </p>
          <Link to="/get-involved">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-glow">
              Get Involved Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative max-w-7xl max-h-full">
            <img 
              src={fullscreenImage} 
              alt="Fullscreen view" 
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
