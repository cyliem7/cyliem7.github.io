import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectDialog, type Project } from "./components/ProjectDialog";
import { AnimatedHeading } from "./components/AnimatedHeading";

const projects: Project[] = [
  {
    id: "1",
    title: "Brand Identity System",
    year: "2026",
    category: "Visual Design",
    thumbnail: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
    description: "A comprehensive brand identity system exploring the intersection of traditional craft and digital innovation. This project challenged conventional approaches to brand consistency while maintaining flexibility across diverse touchpoints.",
    details: [
      { label: "Role", value: "Lead Designer" },
      { label: "Duration", value: "3 months" },
      { label: "Tools", value: "Figma, Illustrator, After Effects" },
      { label: "Deliverables", value: "Logo suite, Style guide, Motion guidelines" },
    ],
    gallery: [
      { type: "image", url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop", alt: "Brand overview" },
      { type: "image", url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop", alt: "Logo variations" },
      { type: "image", url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop", alt: "Color palette" },
    ],
  },
  {
    id: "2",
    title: "Mobile Banking App",
    year: "2025",
    category: "Product Design",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    description: "Redesigning the mobile banking experience with a focus on accessibility and trust. The project involved extensive user research with diverse age groups to create an interface that feels both modern and approachable.",
    details: [
      { label: "Role", value: "UX/UI Designer" },
      { label: "Duration", value: "6 months" },
      { label: "Platform", value: "iOS, Android" },
      { label: "Team", value: "2 designers, 4 developers, 1 PM" },
    ],
    gallery: [
      { type: "image", url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop", alt: "App interface" },
      { type: "image", url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop", alt: "User flow" },
    ],
  },
  {
    id: "3",
    title: "Interactive Installation",
    year: "2025",
    category: "Experiential",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "An immersive public art installation that responds to environmental data through light and sound. Created in collaboration with local artists and technologists for the city's annual design festival.",
    details: [
      { label: "Role", value: "Creative Director" },
      { label: "Location", value: "Public Square, Downtown" },
      { label: "Duration", value: "2 week installation" },
      { label: "Collaboration", value: "Sound designer, Developer, Fabricator" },
    ],
    gallery: [
      { type: "image", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop", alt: "Installation view" },
    ],
  },
  {
    id: "4",
    title: "Editorial Publication",
    year: "2024",
    category: "Print Design",
    thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
    description: "Quarterly magazine exploring emerging design practices and critical perspectives. Each issue features a unique grid system and typographic approach that reflects the editorial content.",
    details: [
      { label: "Role", value: "Art Director" },
      { label: "Format", value: "210 × 297mm, 120 pages" },
      { label: "Print Run", value: "5,000 copies" },
      { label: "Awards", value: "Communication Arts Design Annual" },
    ],
    gallery: [
      { type: "image", url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop", alt: "Magazine spread" },
      { type: "image", url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop", alt: "Cover design" },
    ],
  },
  {
    id: "5",
    title: "E-commerce Platform",
    year: "2024",
    category: "Web Design",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "A sustainable fashion marketplace that prioritizes transparency and ethical sourcing. The design system emphasizes product photography while maintaining clean, distraction-free browsing.",
    details: [
      { label: "Role", value: "Product Designer" },
      { label: "Scope", value: "Web responsive, Design system" },
      { label: "Impact", value: "40% increase in conversion rate" },
    ],
    gallery: [
      { type: "image", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop", alt: "Homepage" },
      { type: "image", url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&h=800&fit=crop", alt: "Product page" },
    ],
  },
  {
    id: "6",
    title: "Typeface Design",
    year: "2024",
    category: "Typography",
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    description: "A geometric display typeface inspired by early modernist poster design. The family includes three weights with alternate glyphs for increased versatility in headline applications.",
    details: [
      { label: "Role", value: "Type Designer" },
      { label: "Glyphs", value: "450+ characters" },
      { label: "Weights", value: "Light, Regular, Bold" },
      { label: "License", value: "Open source" },
    ],
    gallery: [
      { type: "image", url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=800&fit=crop", alt: "Type specimen" },
    ],
  },
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
          <h1 className="font-mono mb-2">Your Name</h1>
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-wide">
            Designer / Creative Technologist
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-2">
            <AnimatedHeading text="Selected Works" />
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
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop"
                alt="Your Name"
                className="h-full w-full object-cover aspect-[3/4]"
              />
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="font-mono text-sm leading-relaxed">
                I'm a designer and creative technologist focused on crafting thoughtful digital experiences.
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
                    href="mailto:hello@yourname.com"
                    className="block font-mono text-sm hover:text-muted-foreground transition-colors"
                  >
                    hello@yourname.com
                  </a>
                  <a
                    href="https://twitter.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-sm hover:text-muted-foreground transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com/in/yourhandle"
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