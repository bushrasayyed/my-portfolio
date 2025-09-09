"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Eye, Zap } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="glass border-primary/20 overflow-hidden group hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/30 transition-all duration-500 animate-fade-in-up hover:shadow-xl hover:shadow-primary/10"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-all duration-500 ${
            isHovered ? "opacity-100 backdrop-blur-sm" : "opacity-0"
          }`}
        >
          <Button
            size="sm"
            variant="secondary"
            asChild
            className="hover:scale-110 transition-transform"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="hover:scale-110 transition-transform"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          </Button>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary/15 text-primary border-primary/25">
            Featured
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="flex items-center justify-between group-hover:text-primary transition-colors">
          {project.title}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
              >
                <Eye className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </Button>
            </DialogTrigger>
            <DialogContent className="glass border-primary/20 max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  {project.title}
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="space-y-4 text-muted-foreground">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <p className="text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button asChild className="flex-1">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="flex-1 bg-transparent"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardTitle>
        <CardDescription className="group-hover:text-foreground transition-colors">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${techIndex * 0.05}s` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
