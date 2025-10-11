import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const WhartonEnrollment = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Wharton Dual Language Academy Enrollment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HorizonsForHope programs are coming soon to Wharton Dual Language Academy
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <School className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Coming Soon</CardTitle>
              </div>
              <CardDescription>
                We're working to bring HorizonsForHope programs to Wharton Dual Language Academy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Programs in Development</h4>
                    <p className="text-sm text-muted-foreground">
                      We're currently developing our partnership with Wharton Dual Language Academy
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">What to Expect</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Comprehensive tutoring programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Academic mentorship and support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>College preparation resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Community engagement opportunities</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-warm/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Stay Updated</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact us to be notified when enrollment opens for Wharton Dual Language Academy
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
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

export default WhartonEnrollment;
