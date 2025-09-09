"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Code2,
  Rocket,
  Github,
  Linkedin,
  Mail,
  Download,
  Terminal,
  Zap,
  Globe,
  Smartphone,
  Briefcase,
  Star,
  Users,
  Coffee,
} from "lucide-react";
import Navigation from "@/components/navigation";
import StarField from "@/components/star-field";
import ProjectCard from "@/components/project-card";
import SkillCard from "@/components/skill-card";
import ContactForm from "@/components/contact-form";
// import ExperienceCard from "@/components/experience-card"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
} from "react-icons/si";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showFreelancePopup, setShowFreelancePopup] = useState(false);
  const [showCollaboratePopup, setShowCollaboratePopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFreelancePopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreSkills = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-5 h-5" aria-label="Next.js" />,
    },
    {
      name: "React.js",
      icon: <SiReact className="w-5 h-5" aria-label="React.js" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-5 h-5" aria-label="TypeScript" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-5 h-5" aria-label="JavaScript" />,
    },
    { name: "HTML5", icon: <SiHtml5 className="w-5 h-5" aria-label="HTML5" /> },
    { name: "CSS3", icon: <SiCss3 className="w-5 h-5" aria-label="CSS3" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-5 h-5" aria-label="Tailwind CSS" />,
    },
    {
      name: "Material UI",
      icon: <SiMui className="w-5 h-5" aria-label="Material UI" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-5 h-5" aria-label="Node.js" />,
    },
  ];

  const technologies = [
    "Redux Toolkit",
    "RESTful APIs",
    "Axios",
    "Error/Loading State Handling",
    "Real-time (Sockets)",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Git",
    "GitHub",
    "Vite",
    "VS Code",
    "Chrome DevTools",
    "Jira",
    "Vercel",
  ];

  const experiences: any[] = [];

  const projects = [
    {
      title: "Personal Finance Dashboard",
      description:
        "Interactive dashboard to track income, expenses, and insights with charts and Firebase sync.",
      image: "/dashboard.png",
      technologies: ["React", "TypeScript", "MUI", "Chart.js", "Firebase"],
      github: "https://github.com/bushrasayyed/personal-finance-dashboard",
      demo: "https://personal-finance-dashboard-beta.vercel.app/",
    },
    {
      title: "AI Prompt Generator",
      description:
        "A sleek AI-powered prompt generator delivering instant, high-quality prompts without sign-up hassle.",
      image: "/ai-prompt-generator.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Cohere API",
      ],
      github: "https://github.com/bushrasayyed/AI-prompt-generator-app",
      demo: "https://ai-prompt-generator-app.vercel.app/",
    },

    {
      title: "AI Tools Hub – Landing Page",
      description:
        "Modern landing page designed for showcasing AI-powered tools with smooth animations.",
      image: "/ai-tools-hub.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/bushrasayyed/ai-tools-hub-landingpage",
      demo: "https://ai-tools-hub-landingpage.vercel.app/",
    },
    {
      title: "Restaurant Landing Page",
      description:
        "Elegant and responsive landing page for a restaurant, built with modern UI animations.",
      image: "/restaurant_landingpage.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/bushrasayyed/Restaurant-Landing-Page",
      demo: "https://restaurant-landing-page-pi-two.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarField />
      <Navigation activeSection={activeSection} />

      <Dialog open={showFreelancePopup} onOpenChange={setShowFreelancePopup}>
        <DialogContent className="glass border-primary/20 max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-primary">
              <Coffee className="w-5 h-5" />
              Available for Freelance!
            </DialogTitle>
            <DialogDescription asChild>
              <div className="space-y-3">
                <p>
                  I'm currently accepting new freelance projects and
                  collaborations.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>
                    Quick turnaround • Quality guaranteed • Competitive rates
                  </span>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 pt-4">
            <Button
              onClick={() => {
                setShowFreelancePopup(false); // close popup
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex-1"
            >
              <Mail className="w-4 h-4 mr-2" />
              Let's Talk
            </Button>

            <Button
              variant="outline"
              onClick={() => setShowFreelancePopup(false)}
            >
              Later
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 relative"
      >
        <div className="text-center space-y-8 animate-fade-in-up pt-20">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text animate-glow">
              Bushra Sayyed
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-slide-in-left">
              Frontend Developer • Web Developer • Freelancer
            </p>
            <div className="flex items-center justify-center gap-2 text-lg animate-slide-in-right">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono">
                Available for freelance projects & collaborations
              </span>
            </div>
            <div className="flex justify-center">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Available for hire
              </Badge>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog
              open={showCollaboratePopup}
              onOpenChange={setShowCollaboratePopup}
            >
              <Button
                size="lg"
                className="animate-glow group"
                onClick={() => setShowCollaboratePopup(true)}
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Let’s Collaborate
              </Button>

              <DialogContent className="glass border-primary/20 max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-xl text-primary">
                    🚀 Let’s Build Something Amazing Together
                  </DialogTitle>

                  <DialogDescription asChild>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-base leading-relaxed">
                        I’m currently open to new freelance projects and
                        collaborations. Whether it’s a fresh idea or scaling an
                        existing product, I’ll help bring it to life with
                        modern, scalable solutions.
                      </p>

                      <ul className="space-y-2 text-sm list-disc list-inside">
                        <li>⚡ Quick turnaround & clear communication</li>
                        <li>✅ High-quality, clean, and maintainable code</li>
                        <li>💡 Competitive rates tailored to your project</li>
                      </ul>

                      <p className="text-xs italic">
                        Ready to share your vision? Let’s make it happen.
                      </p>
                    </div>
                  </DialogDescription>
                </DialogHeader>

                {/* Footer buttons */}
                <div className="flex gap-2 pt-4">
                  <Button
                    type="button"
                    onClick={() => {
                      setShowCollaboratePopup(false); // close popup
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex-1"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Start a Conversation
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowCollaboratePopup(false)}
                  >
                    Later
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="glass bg-transparent"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </a>
          </div>
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/bushrasayyed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/bushra-sayyed-30b78a21b?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
            </a>

            <a href="mailto:sayyedbushra2001@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="w-20 h-20 border-2 border-primary animate-pulse">
                      <AvatarImage src="/avatar.png" />
                      <AvatarFallback>BS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-bold">Bushra Sayyed</h3>
                      <p className="text-muted-foreground">
                        Frontend • Web • Freelancer
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mb-6">
                    Passionate about crafting elegant, high-performance web
                    applications. I specialize in Next.js, React.js, TypeScript,
                    Node.js, Tailwind CSS, and modern frontend architectures,
                    turning ideas into engaging digital experiences that help
                    businesses and startups shine online.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted/20 hover:bg-primary/10 transition-colors">
                      <div className="text-1xl font-bold text-primary">
                        Solutions
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Delivered
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/20 hover:bg-primary/10 transition-colors">
                      <div className="text-1xl font-bold text-secondary">
                        Interfaces
                      </div>
                      <div className="text-sm text-muted-foreground">Built</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/20 hover:bg-primary/10 transition-colors">
                      <div className="text-2xl font-bold text-green-400">
                        24/7
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Available
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    What I Offer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 hover:bg-muted/10 p-2 rounded transition-colors">
                    <Globe className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold">Modern Web Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Scalable, secure, and custom solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-muted/10 p-2 rounded transition-colors">
                    <Smartphone className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold">Responsive Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Mobile-first, pixel-perfect interfaces that delight
                        users
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-muted/10 p-2 rounded transition-colors">
                    <Zap className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold">
                        Performance Optimization
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Lightning-fast experiences optimized for speed & SEO
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-muted/10 p-2 rounded transition-colors">
                    <Briefcase className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold">Freelance Collaboration</h4>
                      <p className="text-sm text-muted-foreground">
                        Flexible project-based work with reliable delivery
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Skills & Technologies
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Core Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <Separator className="my-12" />

          <div className="text-center space-y-8">
            <h3 className="text-2xl font-bold">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass bg-transparent"
            >
              <a
                href="https://github.com/bushrasayyed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Let's Work Together
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-slide-in-left">
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Freelance Services
                  </CardTitle>
                  <CardDescription>
                    Ready to bring your project to life? I'm available for
                    freelance work and excited to collaborate on your next big
                    idea.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 hover:bg-muted/10 p-2 rounded transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>sayyedbushra2001@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-muted/10 p-2 rounded transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                    <span>github.com/bushrasayyed</span>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-muted/10 p-2 rounded transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span>linkedin.com/in/bushra-sayyed</span>
                  </div>
                  <div className="pt-4">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Available for new projects
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-in-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Bushra Sayyed. Available for freelance projects • Built with
            Next.js and deployed to the stars ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
