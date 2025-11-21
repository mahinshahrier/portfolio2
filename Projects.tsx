import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "BidyaPith Educational Platform",
      description: "Founded and developed BidyaPith on September 26, 2020 - an educational platform that promotes lifelong learning under the tagline 'Learn to Know.' The platform fosters knowledge exchange and student empowerment through accessible learning resources.",
      tech: ["Web Development", "Education Technology", "Content Management", "Community Building"],
      github: "https://github.com/mahinshahrier",
      demo: "https://bidyapith.org"
    },
    {
      title: "Social Media Marketing Campaigns",
      description: "Designed and executed comprehensive social media marketing strategies for various educational initiatives. Created engaging content and managed digital presence to maximize reach and engagement.",
      tech: ["Social Media Marketing", "Content Strategy", "Graphics Design", "Digital Marketing"],
      github: "https://github.com/mahinshahrier",
      demo: "https://linkedin.com/in/mahinshahrier"
    },
    {
      title: "Graphics Design Portfolio",
      description: "Created visual content and design materials for educational campaigns, events, and digital platforms. Focused on creating impactful designs that communicate effectively with target audiences.",
      tech: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Visual Communication"],
      github: "https://github.com/mahinshahrier",
      demo: "#"
    },
    {
      title: "Event Management System",
      description: "Organized and managed multiple educational events and campaigns as part of leadership roles at BidyaPith and Newspaper Olympiad Bangladesh. Streamlined event logistics and participant coordination.",
      tech: ["Project Management", "Team Leadership", "Communication", "Strategic Planning"],
      github: "https://github.com/mahinshahrier",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 card-hover bg-secondary/30 border-border/50 flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1 gap-2" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
