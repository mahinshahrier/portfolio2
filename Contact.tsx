import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahinshahrier@gmail.com",
      href: "mailto:mahinshahrier@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1234-567890",
      href: "tel:+8801234567890"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="p-6 text-center card-hover bg-secondary/30 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.label}</h3>
              {item.href ? (
                <a 
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-muted-foreground">{item.value}</p>
              )}
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-border/50 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, 
            feel free to reach out. I'm always open to discussing new opportunities.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:mahinshahrier@gmail.com">
              <Mail className="w-4 h-4" />
              Send Me an Email
            </a>
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
