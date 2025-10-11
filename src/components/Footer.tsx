import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-sunset text-primary-foreground py-2 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-xs">
          <span className="font-bold">HorizonsForHope</span>
          <span>•</span>
          <span>Empowering communities through education</span>
          <span>•</span>
          <span>Made with</span>
          <Heart className="h-3 w-3 fill-current" />
          <span>for a better tomorrow</span>
          <span>•</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
