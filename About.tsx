import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, well-documented code following best practices"
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating responsive, user-friendly interfaces with attention to detail"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks"
    }
  ];

  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a keen eye for detail and a love for creating 
            exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4 animate-slide-in-left">
            <p className="text-lg leading-relaxed">
              I'm a Computer Science & Engineering student with a strong passion for web development 
              and emerging technologies. Currently pursuing my degree, I'm dedicated to mastering both 
              frontend and backend development to build impactful digital solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey in software development began with curiosity about how things work on the web. 
              I've since developed skills in modern frameworks and technologies, focusing on creating 
              user-friendly, efficient applications. I believe in writing clean, maintainable code and 
              following industry best practices.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm always eager to learn new technologies and take on challenging projects. My goal is 
              to contribute to innovative solutions that make a positive impact, while continuously 
              growing as a developer and team player.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 card-hover bg-secondary/50 border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
