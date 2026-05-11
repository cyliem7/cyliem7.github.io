import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  thumbnail: string;
  description: string;
  details: {
    label: string;
    value: string;
  }[];
  gallery: {
    type: "image" | "video";
    url: string;
    alt?: string;
  }[];
}

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 border border-border bg-card p-0 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card p-6">
            <div>
              <Dialog.Title className="font-mono">{project.title}</Dialog.Title>
              <p className="font-mono text-sm text-muted-foreground mt-1">
                {project.year} • {project.category}
              </p>
            </div>
            <Dialog.Close className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>

          <div className="p-6 space-y-8">
            {/* Gallery */}
            {project.gallery.length > 0 && (
              <div className="relative border border-border bg-muted/30">
                <div className="relative aspect-video overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      {project.gallery[currentSlide].type === "image" ? (
                        <img
                          src={project.gallery[currentSlide].url}
                          alt={project.gallery[currentSlide].alt || `Slide ${currentSlide + 1}`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <video
                          src={project.gallery[currentSlide].url}
                          controls
                          className="h-full w-full object-cover"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 p-2 border border-border hover:bg-foreground hover:text-background transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 p-2 border border-border hover:bg-foreground hover:text-background transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-2 w-2 border border-foreground transition-colors ${
                            index === currentSlide ? "bg-foreground" : "bg-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Description */}
            <div>
              <h4 className="font-mono mb-3 pb-2 border-b border-border">Overview</h4>
              <p className="font-mono text-sm leading-relaxed">{project.description}</p>
            </div>

            {/* Project Details */}
            {project.details.length > 0 && (
              <div>
                <h4 className="font-mono mb-3 pb-2 border-b border-border">Details</h4>
                <dl className="space-y-3">
                  {project.details.map((detail, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4">
                      <dt className="font-mono text-sm text-muted-foreground uppercase tracking-wide">
                        {detail.label}
                      </dt>
                      <dd className="font-mono text-sm col-span-2">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
