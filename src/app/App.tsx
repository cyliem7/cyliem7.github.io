import { useState, useRef, useEffect } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectDetail } from "./components/ProjectDetail";
import { projects } from "./data/projects";
import { Project } from "./types/project";
import { Briefcase, Mail, Github, Linkedin, MountainSnow, GithubIcon } from "lucide-react";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollToProjects, setScrollToProjects] = useState(false);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(scrollToProjects) {
      projectsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start"});
      setScrollToProjects(false);
    }
  }, [scrollToProjects]);

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-white p-6 md:p-12">
        <ProjectDetail 
          project={selectedProject} 
          onBack={() => {
            setSelectedProject(null);
            setScrollToProjects(true);
          }}
        />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 via-pink-100 to-indigo-100 overflow-hidden relative">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 size-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 size-48 bg-gradient-to-br from-indigo-400 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 size-40 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-xl animate-pulse" style={{ transform: 'rotate(-5deg)' }}>
                <MountainSnow className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Cylie Miller</h1>
                <p className="text-sm bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Frontend Development & Design ✨</p>
                <p className="text-sm bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Based in Boulder, CO</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="mailto:hello@example.com" className="text-purple-600 hover:text-pink-600 transition-all hover:scale-110 transform hover:rotate-12">
                <Mail className="size-5" />
              </a>
              <a href="https://github.com/cyliem7" className="text-purple-600 hover:text-pink-600 transition-all hover:scale-110 transform hover:rotate-12" target="_blank" rel="noopener noreferrer">
                <Github className="size-5" />
              </a>
              <a href="https://www.linkedin.com/in/cyliemiller" className="text-purple-600 hover:text-pink-600 transition-all hover:scale-110 transform hover:rotate-12" target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-7xl mb-8 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-2xl" style={{ transform: 'rotate(-1deg)' }}>
            The Need to Create,
            <br />
            The Skills to Develop ⚡
          </h2>
          <p className="text-2xl text-purple-900 leading-relaxed mb-6">
            I enjoy design and devloping creative work with intentional decisions. Each project showcases my process 
            from challenge to solution, including typography choices, 
            color theory, spatial relationships, and iterative improvements based on real feedback.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-xl transform -rotate-2 hover:rotate-0 transition-transform">
              Creative
            </div>
            <div className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
              Innovative
            </div>
            <div className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
              Passionate
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section - Floating */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="relative" style={{ transform: 'rotate(-1deg)' }}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:rotate-0">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              {/* Photo */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{ transform: 'rotate(3deg)' }}>
                  <img 
                    src="https://raw.githubusercontent.com/cyliem7/cyliem7.github.io/refs/heads/main/src/assets/img/aboutMePhoto.jpg"
                    alt="Cylie Miller"
                    className="w-full h-full object-cover"
                    style={{ transform: 'rotate(-3deg)' }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <h3 className="text-4xl mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">About Me 🌟</h3>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    Hi, I'm Cylie! I'm a frontend designer who believes that great design is more than just aesthetics.  It's about solving real problems and creating meaningful user experiences.
                  </p>
                  <p>
                    I bridge the gap between beautiful interfaces and functional code. I'm passionate about expressing one's creativity and working on projects that make the world a better place.
                  </p>
                  <p>
                    When I'm not designing, I am learning, spending time outdoors, or making jewelry.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="mailto:cylie@westry.co" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:shadow-2xl transition-all transform hover:scale-105 hover:-rotate-2"
                  >
                    <Mail className="size-5" />
                    Get in Touch
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/cyliemiller" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-3 border-purple-400 bg-white rounded-full hover:bg-purple-50 transition-all transform hover:scale-105 hover:rotate-2"
                  >
                    <Linkedin className="size-5 text-purple-600" />
                    Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsSectionRef} className="max-w-7xl mx-auto px-6 pb-16 relative">
        <div className="mb-12 text-center projects">
          <h3 className="text-5xl mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent" style={{ transform: 'rotate(-1deg)', display: 'inline-block' }}>Featured Projects 🎨</h3>
          <p className="text-xl text-purple-700">Explore detailed design rationale and live demos</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 relative">
          {projects.map((project, index) => {
            if (project.active)
            {
              return (
              <div 
                key={project.id}
                style={{ 
                  transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
                  marginTop: index % 2 === 0 ? '0' : '2rem'
                }}
                className="hover:z-10 relative"
              >
                <ProjectCard 
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>);
            }
          } )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-purple-500 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="mb-3 text-xl">About</h4>
              <p className="text-purple-100 text-sm">
                A frontend designer passionate about creating intuitive, beautiful interfaces 
                that solve real user problems.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-xl">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Javascript", "Typescript", "UI/UX Design", "React", "Tailwind CSS", "Figma", "User Testing", "Design Systems", "SQL", "C#", "REST API"].map((skill) => (
                  <span key={skill} className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-xl">Contact</h4>
              <p className="text-purple-100 text-sm mb-2">
                Let's collaborate on your next project ✨
              </p>
              <a href="mailto:cylie@westry.co" className="text-white hover:text-indigo-200 text-sm underline decoration-wavy">
                cylie@westry.co
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/30 text-center text-purple-100 text-sm">
            © 2026 Design Portfolio. Built with intention & creativity 💜
          </div>
        </div>
      </footer>
    </div>
  );
}