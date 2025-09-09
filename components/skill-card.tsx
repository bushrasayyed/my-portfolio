"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  icon: React.ReactNode
  color?: string
}

interface SkillCardProps {
  skill: Skill
  index: number
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <Card
      className="glass border-primary/15 hover:border-primary/30 transition-all duration-500 animate-fade-in-up hover:shadow-xl hover:shadow-primary/10 group"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3 text-lg">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
            {skill.icon}
          </span>
          <span className="font-semibold group-hover:text-primary transition-colors">{skill.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">
            Production Ready
          </Badge>
          <Badge variant="outline" className="text-xs">
            Best Practices
          </Badge>
        </div>
        <div className="opacity-60 text-xs">Core Skill</div>
      </CardContent>
    </Card>
  )
}
