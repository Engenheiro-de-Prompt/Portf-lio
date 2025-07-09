
import type { ReactNode } from 'react';

export interface ProjectMetric {
  metric: string;
  result: string;
  meaning: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  id: number;
  title: string;
  subtitle: string;
  category: string; 
  summary: string;
  roi?: string;
  savings?: string;
  hoursSaved?: string;
  businessImpact: string;
  keyTools: string[];
  metrics: ProjectMetric[];
  narrative: ReactNode; 
  tools: string[];
  links: ProjectLink[];
}
