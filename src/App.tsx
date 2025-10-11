import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Enrollment from "./pages/Enrollment";
import THRogersEnrollment from "./pages/THRogersEnrollment";
import HoggEnrollment from "./pages/HoggEnrollment";
import WhartonEnrollment from "./pages/WhartonEnrollment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/enrollment/th-rogers" element={<THRogersEnrollment />} />
          <Route path="/enrollment/hogg" element={<HoggEnrollment />} />
          <Route path="/enrollment/wharton" element={<WhartonEnrollment />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
