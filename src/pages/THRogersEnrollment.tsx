import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const THRogersEnrollment = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfWOZlnkUwRGUh2X6Fk_k0SQAnWuZStRFrzcAeOUu6CzC2KGA/viewform?usp=header";

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            T.H.Rogers School Enrollment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join HorizonsForHope at T.H.Rogers School and access our comprehensive educational programs
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          {/* Enrollment Form */}
          <Card className="hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <FileText className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Enrollment Form</CardTitle>
              </div>
              <CardDescription>
                Fill out this form to express your interest in HorizonsForHope at T.H.Rogers School
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Form Preview */}
                <div className="border rounded-lg p-4 bg-muted/30">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">T.H.Rogers HorizonsForHope Sign Up</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Please fill out this form if you are interested in HorizonsForHope and the services we are providing!
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>📝</span>
                    <span>Email (required)</span>
                  </div>
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors relative overflow-hidden shine-button"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open Enrollment Form
                  </a>
                </div>

                {/* Additional Information */}
                <div className="bg-gradient-warm/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">What to Expect</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Quick and easy enrollment process</li>
                    <li>• Personalized academic support</li>
                    <li>• Regular program updates via email</li>
                    <li>• Access to all HorizonsForHope resources</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default THRogersEnrollment;
