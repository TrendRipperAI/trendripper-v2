"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Project = {
  title: string;
  description: string;
  category: string;
  ripPlan: string;
};

type ProjectContextType = {
  projects: Project[];
  addProject: (project: Project) => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects((prev) => [...prev, project]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useProjectContext must be used inside Provider");
  return context;
}
