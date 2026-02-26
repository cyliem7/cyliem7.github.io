import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group hover:border-pink-400 transform hover:scale-110 hover:rotate-0 rounded-3xl bg-white"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 relative">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6 bg-gradient-to-br from-white to-purple-50">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl flex-1 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{project.title}</h3>
          <Badge variant="secondary" className="ml-2 shrink-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white transform -rotate-12">
            {project.category}
          </Badge>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs text-purple-700 hover:bg-purple-100 transform hover:scale-110 transition-transform"
              style={{ transform: idx % 2 === 0 ? 'rotate(-3deg)' : 'rotate(3deg)' }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}