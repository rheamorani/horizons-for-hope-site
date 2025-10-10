import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-sunset text-primary-foreground py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">HorizonsForHope</h3>
          <p className="text-primary-foreground/80 mb-4">
            Empowering communities through education
          </p>
          <div className="flex items-center justify-center gap-1 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-current" />
            <span>for a better tomorrow</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} HorizonsForHope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
