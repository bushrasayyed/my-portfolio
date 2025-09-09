"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Trophy } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <Card
      className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl gradient-text">{experience.title}</CardTitle>
            <CardDescription className="text-lg font-semibold text-foreground">{experience.company}</CardDescription>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{experience.description}</p>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="font-semibold">Key Achievements</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.achievements.map((achievement, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {achievement}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
