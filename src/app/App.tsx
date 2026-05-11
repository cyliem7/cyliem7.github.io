import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectDialog, type Project } from "./components/ProjectDialog";
import { AnimatedHeading } from "./components/AnimatedHeading";

const projects: Project[] = [
    {
    id: "1",
    title: "Westry Brand",
    year: "2024",
    category: "Brand Design",
    thumbnail: "https://raw.githubusercontent.com/cyliem7/cyliem7.github.io/refs/heads/main/src/assets/img/projects/westryWebsite/westryWebsiteHeader.png?w=800&h=600&fit=crop",
    description: "Jewelry brand identity inspired by wide open spaces, western jewelry, and being in nature. The project involved creating a brand identity with color palette, logo suite, website, and photography.",
    details: [
      { label: "Link", value: "https://westry.co" },
      { label: "Role", value: "Owner and designer" },
      { label: "Tools", value: "Canva, Shopify, Illustrator, Lightroom" },
      { label: "Deliverables", value: "Brand template, website, social media assets" },
    ],
      gallery: [
        { type: "image", url: "https://raw.githubusercontent.com/cyliem7/cyliem7.github.io/refs/heads/main/src/assets/img/projects/westryWebsite/westryWebsiteHeader.png?w=1200&h=800&fit=crop", alt: "Brand overview" },
        { type: "image", url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop", alt: "Logo variations" },
        { type: "image", url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop", alt: "Color palette" },
    ],
  }, 
  {
    id: "2",
    title: "Seed Ring Concept",
    year: "2026",
    category: "Jewelry Product Design",
    thumbnail: "https://raw.githubusercontent.com/cyliem7/cyliem7.github.io/refs/heads/main/src/assets/img/projects/seedRing/SeedRingConceptPic.png",
    description: "Creating an organic, timeless piece that represents change and growth.",
    details: [
      { label: "Link", value: "https://westry.co" },
      { label: "Role", value: "Designer" },
      { label: "Tools", value: "Procreate, Wax Modeling, Sand Casting" },
      { label: "Deliverables", value: "Thought process, concept sketches, prototypes, mold, final piece" },
    ],
      gallery: [
        { type: "video", url: "https://raw.githubusercontent.com/cyliem7/cyliem7.github.io/refs/heads/main/src/assets/img/projects/seedRing/SeedRingConcept.mp4", alt: "Concept video" },
        { type: "video", url: "https://raw.githubusercontent.com/cyliem7/cyliem7.github.io/refs/heads/main/src/assets/img/projects/seedRing/SeedRingDrawing.mp4", alt: "Sketch video" },
        { type: "image", url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop", alt: "Color palette" },
    ],
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h1 className="font-mono mb-2">Cylie Miller</h1>
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-wide">
            Designer / Creative
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-2">
            <AnimatedHeading text="Featured Work" />
          </div>
          <div className="h-[2px] w-16 bg-foreground" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              year={project.year}
              category={project.category}
              thumbnail={project.thumbnail}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </main>

            {/* About Section */}
      <section className="mt-24">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12">
            <div className="mb-2">
              <AnimatedHeading text="About" />
            </div>
            <div className="h-[2px] w-16 bg-foreground" />
          </div>

          <div className="grid gap-12 lg:grid-cols-[300px_1fr_1fr]">
            {/* Photo */}
            <div className="border border-border overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/cyliem7/cyliem7.github.io/refs/heads/main/src/assets/img/aboutMePhoto.jpg?w=600&h=800&fit=crop"
                alt="Your Name"
                className="h-full w-full object-cover aspect-[3/4]"
              />
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="font-mono text-sm leading-relaxed">
                I'm a designer and creative focused on crafting thoughtful digital experiences.
                With a background spanning visual design, product development, and interactive installations,
                I approach each project as an opportunity to explore new possibilities at the intersection of
                form and function.
              </p>
              <p className="font-mono text-sm leading-relaxed">
                My work is driven by curiosity about how design can shape the way people interact with
                technology and each other. I believe in creating solutions that are both aesthetically
                considered and deeply purposeful.
              </p>
              <p className="font-mono text-sm leading-relaxed">
                Currently available for select projects and collaborations.
              </p>
            </div>

            {/* Capabilities & Contact */}
            <div className="space-y-8">
              <div>
                <h3 className="font-mono mb-4 pb-2 border-b border-border">Capabilities</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="font-mono text-sm">UI/UX Design</div>
                  <div className="font-mono text-sm">Brand Identity</div>
                  <div className="font-mono text-sm">Prototyping</div>
                  <div className="font-mono text-sm">Design Systems</div>
                  <div className="font-mono text-sm">Typography</div>
                  <div className="font-mono text-sm">Creative Direction</div>
                </div>
              </div>

              <div>
                <h3 className="font-mono mb-4 pb-2 border-b border-border">Contact</h3>
                <div className="space-y-2">
                  <a
                    href="mailto:cylie.a.miller@gmail.com"
                    className="block font-mono text-sm hover:text-muted-foreground transition-colors"
                  >
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/cyliemiller/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-sm hover:text-muted-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="font-mono text-sm text-muted-foreground">
            © 2026 • Available for select projects
          </p>
        </div>
      </footer>

      <ProjectDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}