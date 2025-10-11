import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Brain, Code, Microscope, BookOpen, FileText, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Curriculum = () => {
  const [numPages, setNumPages] = useState<{[key: string]: number}>({});
  const [pageNumber, setPageNumber] = useState<{[key: string]: number}>({
    cs: 1,
    chem: 1
  });
  const [scale, setScale] = useState<{[key: string]: number}>({
    cs: 1.0,
    chem: 1.0
  });

  // PDF file paths
  const computerScienceLesson = "/pdfs/Computer Science Lesson 1.pdf";
  const chemLesson = "/pdfs/Chem Lesson 4.pdf";

  const onDocumentLoadSuccess = (pdfKey: string) => ({ numPages }: { numPages: number }) => {
    setNumPages(prev => ({ ...prev, [pdfKey]: numPages }));
  };

  const changePage = (pdfKey: string, offset: number) => {
    setPageNumber(prev => ({
      ...prev,
      [pdfKey]: Math.max(1, Math.min(prev[pdfKey] + offset, numPages[pdfKey] || 1))
    }));
  };

  const changeScale = (pdfKey: string, offset: number) => {
    setScale(prev => ({
      ...prev,
      [pdfKey]: Math.max(0.5, Math.min(prev[pdfKey] + offset, 2.0))
    }));
  };

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
                <div className="space-y-4">
                  {/* PDF Controls */}
                  <div className="flex items-center justify-between bg-muted p-2 rounded-md">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => changePage('cs', -1)}
                        disabled={pageNumber.cs <= 1}
                        className="p-1 hover:bg-background rounded disabled:opacity-50"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="text-sm">
                        {pageNumber.cs} of {numPages.cs || '--'}
                      </span>
                      <button
                        onClick={() => changePage('cs', 1)}
                        disabled={pageNumber.cs >= (numPages.cs || 1)}
                        className="p-1 hover:bg-background rounded disabled:opacity-50"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => changeScale('cs', -0.1)}
                        className="p-1 hover:bg-background rounded"
                      >
                        <ZoomOut className="h-4 w-4" />
                      </button>
                      <span className="text-sm">{Math.round(scale.cs * 100)}%</span>
                      <button
                        onClick={() => changeScale('cs', 0.1)}
                        className="p-1 hover:bg-background rounded"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* PDF Viewer */}
                  <div className="border rounded-md overflow-auto bg-white max-h-[600px] flex justify-center">
                    <Document
                      file={computerScienceLesson}
                      onLoadSuccess={onDocumentLoadSuccess('cs')}
                    >
                      <Page
                        pageNumber={pageNumber.cs}
                        scale={scale.cs}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                      />
                    </Document>
                  </div>
                </div>
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
                <div className="space-y-4">
                  {/* PDF Controls */}
                  <div className="flex items-center justify-between bg-muted p-2 rounded-md">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => changePage('chem', -1)}
                        disabled={pageNumber.chem <= 1}
                        className="p-1 hover:bg-background rounded disabled:opacity-50"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="text-sm">
                        {pageNumber.chem} of {numPages.chem || '--'}
                      </span>
                      <button
                        onClick={() => changePage('chem', 1)}
                        disabled={pageNumber.chem >= (numPages.chem || 1)}
                        className="p-1 hover:bg-background rounded disabled:opacity-50"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => changeScale('chem', -0.1)}
                        className="p-1 hover:bg-background rounded"
                      >
                        <ZoomOut className="h-4 w-4" />
                      </button>
                      <span className="text-sm">{Math.round(scale.chem * 100)}%</span>
                      <button
                        onClick={() => changeScale('chem', 0.1)}
                        className="p-1 hover:bg-background rounded"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* PDF Viewer */}
                  <div className="border rounded-md overflow-auto bg-white max-h-[600px] flex justify-center">
                    <Document
                      file={chemLesson}
                      onLoadSuccess={onDocumentLoadSuccess('chem')}
                    >
                      <Page
                        pageNumber={pageNumber.chem}
                        scale={scale.chem}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                      />
                    </Document>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
