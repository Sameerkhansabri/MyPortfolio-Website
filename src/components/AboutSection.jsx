import { Briefcase, Code, PcCase, PcCaseIcon, User } from "lucide-react";
export const AboutSection = () => {
  return (
    
    <section id="about" className="min-h-screen py-12 flex  flex-col items-center justify-center text-center gap-6">
  <h1 className="text-4xl font-bold mb-6">
    About <span className="text-primary">Me</span>
  </h1>

  <p className="text-muted-foreground">
  <h2 className="text-2xl mb-6">
    Modern UI Enthusiast & Dedicated Web Developer
    </h2>
  </p>

  <p className="text-muted-foreground">
  <h3 className="text-2xl mb-6">
    Aspiring Web Developer With 1 Year Of Hands On Experience Building Responsive, Accessible, and Performant Web Applications Using Modern Technologies.
    </h3>
  </p>

  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
  href="Sameer_Khan_Resume_2025 copy.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white"
>
  Download Resume
</a>
  </div>

  <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-full bg-primary/10">
                  <PcCaseIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating Responsive Websites And Web Applications With
                    Modern Tech & Frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                  Crafting Interactive And Responsive User Interfaces Using Modern Frameworks Like React, Ensuring Seamless User Experiences Across All Devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Integration</h4>
                  <p className="text-muted-foreground">
                  Integrating Scalable And Secure Backend Services Using RESTful APIs, Databases, And Server-Side Technologies To Deliver Fully Functional Web Applications.
                  </p>
                </div>
              </div>
    </div>
  </div>
</section>
  );
};