import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Brain, Code, Microscope, BookOpen, FileText } from "lucide-react";

const Curriculum = () => {
  // PDF file paths
  const computerScienceLesson = "/pdfs/Computer Science Lesson 1.pdf";
  const chemLesson = "/pdfs/Chem Lesson 4.pdf";

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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
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
              className="hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <subject.icon className="h-8 w-8 text-primary" />
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

        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Example Lessons</h3>
            <p className="text-muted-foreground">
              Explore our curriculum through these interactive lesson materials
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Computer Science Lesson */}
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Computer Science Lesson 1</CardTitle>
                </div>
                <CardDescription>
                  Introduction to programming fundamentals and computational thinking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[600px] border rounded-md overflow-hidden bg-muted/30">
                  <object
                    data={computerScienceLesson}
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-4">
                        Your browser doesn't support embedded PDFs
                      </p>
                      <a
                        href={computerScienceLesson}
                        download
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Download PDF
                      </a>
                    </div>
                  </object>
                </div>
                <a
                  href={computerScienceLesson}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-primary hover:underline"
                >
                  Open in new tab →
                </a>
              </CardContent>
            </Card>

            {/* Chemistry Lesson */}
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Chemistry Lesson 4</CardTitle>
                </div>
                <CardDescription>
                  Advanced chemistry concepts and laboratory techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[600px] border rounded-md overflow-hidden bg-muted/30">
                  <object
                    data={chemLesson}
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-4">
                        Your browser doesn't support embedded PDFs
                      </p>
                      <a
                        href={chemLesson}
                        download
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Download PDF
                      </a>
                    </div>
                  </object>
                </div>
                <a
                  href={chemLesson}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-primary hover:underline"
                >
                  Open in new tab →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
