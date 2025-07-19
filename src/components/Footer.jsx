import { ArrowUp } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Sameerkhansabri.co.
      </p>
      <p className="text-sm text-muted-foreground">
        {" "}
        All Rights Reserved
      </p>
      <p className="text-sm text-muted-foreground">
        {" "}
        <a href="/privacy" target= "_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary hover:underline">
        Privacy Policy
        </a>
      </p>
      <p className="text-sm text-muted-foreground">
        {" "}
        <a href="/terms" target= "_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary hover:underline">
        Terms & Conditions
        </a>
      </p>

      <p className="text-sm text-muted-foreground">
        {" "}
        <a href="/cookies" target= "_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary hover:underline">
        Cookie Preferences
        </a>
      </p>
      <p className="text-sm text-muted-foreground">
        {" "}
        <a href="/faq" target= "_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary hover:underline">
        FAQ
        </a>
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
