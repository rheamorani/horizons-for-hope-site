import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Enrollment = () => {
  const schools = [
    {
      name: "T.H.Rogers School",
      path: "/enrollment/th-rogers",
      description: "Comprehensive enrollment form available for T.H.Rogers School students.",
      icon: GraduationCap,
      available: true,
    },
    {
      name: "Hogg School",
      path: "/enrollment/hogg",
      description: "Enrollment coming soon for Hogg School students.",
      icon: Users,
      available: false,
    },
    {
      name: "Wharton Dual Language Academy",
      path: "/enrollment/wharton",
      description: "Enrollment coming soon for Wharton Dual Language Academy students.",
      icon: Globe,
      available: false,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            School Enrollment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select your school to begin the enrollment process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {schools.map((school) => {
            const IconComponent = school.icon;
            return (
              <Card 
                key={school.name} 
                className={`transition-all duration-300 ${
                  school.available 
                    ? "hover:shadow-lg hover:scale-105 cursor-pointer" 
                    : "opacity-60"
                }`}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{school.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-6">
                    {school.description}
                  </CardDescription>
                  {school.available ? (
                    <Link to={school.path}>
                      <Button className="w-full shine-button relative overflow-hidden">
                        Enroll Now
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
