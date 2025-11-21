import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 animate-fade-in-up">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl animate-pulse" />
              <img 
                src={profileImage} 
                alt="Mahin Shahrier" 
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 inline-block">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Mahin Shahrier
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Computer Science & Engineering Student
            </p>
            
            <p className="text-lg text-muted-foreground/80 mb-8">
              Passionate about web development, AI, and creating innovative solutions. 
              Aspiring to become a skilled Full Stack Developer.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" className="gap-2 group" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/mahin-shahrier-cv.pdf" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:mahinshahrier@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
