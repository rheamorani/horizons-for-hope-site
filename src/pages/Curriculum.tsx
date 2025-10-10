import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Brain, Code, Microscope } from "lucide-react";

const Curriculum = () => {
  const subjects = [
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Building strong foundational skills in algebra, geometry, calculus, and applied mathematics",
      topics: [
        "Algebra & Pre-Calculus",
        "Geometry & Trigonometry",
        "Calculus & Advanced Mathematics",
        "Statistics & Data Analysis",
      ],
    },
    {
      icon: Brain,
      title: "Ethics",
      description: "Developing moral reasoning and critical thinking skills for responsible citizenship",
      topics: [
        "Ethical Theory & Philosophy",
        "Social Justice & Equity",
        "Environmental Ethics",
        "Professional & Business Ethics",
      ],
    },
    {
      icon: Code,
      title: "Computer Science",
      description: "Empowering students with programming, computational thinking, and digital literacy",
      topics: [
        "Programming Fundamentals",
        "Web Development",
        "Data Structures & Algorithms",
        "Artificial Intelligence Basics",
      ],
    },
    {
      icon: Microscope,
      title: "Science",
      description: "Exploring biology and chemistry through hands-on learning and scientific inquiry",
      topics: [
        "Cell Biology & Genetics",
        "Human Anatomy & Physiology",
        "Organic & Inorganic Chemistry",
        "Chemical Reactions & Lab Techniques",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-sunset bg-clip-text text-transparent">
            Our Curriculum
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational programs designed to inspire, challenge, and prepare students for success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <Card 
              key={index} 
              className="hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-sunset">
                    <subject.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{subject.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{subject.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-foreground">Key Topics:</h4>
                <ul className="space-y-2">
                  {subject.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-warm rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Image Placeholder</h3>
          <p className="text-muted-foreground mb-4">
            Curriculum overview infographic or student learning photos can be added here
          </p>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[ Curriculum Image Placeholder ]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
