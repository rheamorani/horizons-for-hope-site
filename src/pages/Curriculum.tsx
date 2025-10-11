import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Brain, Code, Microscope, BookOpen, FileText, GraduationCap } from "lucide-react";

const Curriculum = () => {
  // PDF file paths
  const computerScienceLesson = "/pdfs/Computer Science Lesson 1.pdf";
  const chemLesson = "/pdfs/Chem Lesson 4.pdf";

  const subjects = [
    {
      icon: GraduationCap,
      title: "Tutoring",
      description: "Personalized academic support to help students succeed in their current coursework and classroom performance",
      topics: [
        "Homework Assistance & Study Skills",
        "Test Preparation & Exam Strategies",
        "Subject-Specific Support",
        "Academic Confidence Building",
      ],
    },
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

        {/* Tutoring Card - Top Center */}
        <div className="flex justify-center mb-8">
          <Card 
            className="max-w-md shadow-[0_0_20px_rgba(255,215,0,0.5)] border-2 border-yellow-400/30 hover:shadow-[0_0_30px_rgba(255,215,0,0.8)] transition-all duration-300"
            style={{ animationDelay: "0ms" }}
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Tutoring</CardTitle>
              </div>
              <CardDescription className="text-base">Personalized academic support to help students succeed in their current coursework and classroom performance</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3 text-foreground">Key Topics:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Homework Assistance & Study Skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Test Preparation & Exam Strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Subject-Specific Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Academic Confidence Building</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Mathematics and Ethics Cards - Middle Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card 
            className="hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-all duration-300"
            style={{ animationDelay: "100ms" }}
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <Calculator className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Mathematics</CardTitle>
              </div>
              <CardDescription className="text-base">Building strong foundational skills in algebra, geometry, calculus, and applied mathematics</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3 text-foreground">Key Topics:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Algebra & Pre-Calculus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Geometry & Trigonometry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Calculus & Advanced Mathematics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Statistics & Data Analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-all duration-300"
            style={{ animationDelay: "200ms" }}
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <Brain className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Ethics</CardTitle>
              </div>
              <CardDescription className="text-base">Developing moral reasoning and critical thinking skills for responsible citizenship</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3 text-foreground">Key Topics:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Ethical Theory & Philosophy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Social Justice & Equity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Environmental Ethics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Professional & Business Ethics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Computer Science and Science Cards - Bottom Row */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card 
            className="hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-all duration-300"
            style={{ animationDelay: "300ms" }}
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <Code className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Computer Science</CardTitle>
              </div>
              <CardDescription className="text-base">Empowering students with programming, computational thinking, and digital literacy</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3 text-foreground">Key Topics:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Programming Fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Web Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Data Structures & Algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Artificial Intelligence Basics</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-all duration-300"
            style={{ animationDelay: "400ms" }}
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <Microscope className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Science</CardTitle>
              </div>
              <CardDescription className="text-base">Exploring biology and chemistry through hands-on learning and scientific inquiry</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3 text-foreground">Key Topics:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Cell Biology & Genetics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Human Anatomy & Physiology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Organic & Inorganic Chemistry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Chemical Reactions & Lab Techniques</span>
                </li>
              </ul>
            </CardContent>
          </Card>
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
