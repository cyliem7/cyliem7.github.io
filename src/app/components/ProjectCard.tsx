import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  year: string;
  category: string;
  thumbnail: string;
  onClick: () => void;
}

export function ProjectCard({ title, year, category, thumbnail, onClick }: ProjectCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative border border-border bg-card text-left transition-all hover:border-foreground overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="aspect-[4/3] overflow-hidden border-b border-border">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-mono">{title}</h3>
          <span className="font-mono text-sm text-muted-foreground">{year}</span>
        </div>
        <p className="font-mono text-sm text-muted-foreground uppercase tracking-wide">
          {category}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-foreground transition-all group-hover:w-full" />
    </motion.button>
  );
}
