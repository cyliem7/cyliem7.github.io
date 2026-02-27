import { Project } from "../types/project";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ArrowLeft, Palette, Type, Ruler, Layers, GitBranch } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const DemoComponent = project.demoComponent;
  
  window.scrollTo(0,0);

  return (
    <div className="max-w-7xl mx-auto bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 min-h-screen p-6 rounded-3xl">
      <div>
        
      </div>

      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6 hover:bg-purple-100 rounded-full px-6"
      >
        <ArrowLeft className="size-4 mr-2" />
        Back to Projects
      </Button>

      <div className="mb-8 bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-5xl mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">{project.title}</h1>
            <p className="text-2xl text-gray-700">{project.description}</p>
          </div>
          <Badge className="ml-4 shrink-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg px-4 py-2">{project.category}</Badge>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-purple-700 text-sm">
              {tag}
            </Badge>
          ))}
        </div>

        <div>
          <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-3xl object-cover"
        />
        </div>
      </div>

      <Tabs defaultValue="rationale" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-white p-2 rounded-2xl h-auto shadow-lg">
          <TabsTrigger value="rationale" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl text-lg py-3">Design Rationale</TabsTrigger>
          <TabsTrigger value="demo" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl text-lg py-3">Demo</TabsTrigger>
          <TabsTrigger value="process" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl text-lg py-3">Process</TabsTrigger>
        </TabsList>

        <TabsContent value="rationale" className="space-y-6">
          <Card className="p-8 rounded-3xl bg-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl">
                <Type className="size-7 text-white" />
              </div>
              <h3 className="text-3xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Typography</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="mb-1 text-gray-700">Choices</h4>
                <p className="text-gray-600">{project.designRationale.typography.choices}</p>
              </div>
              <div>
                <h4 className="mb-1 text-gray-700">Reasoning</h4>
                <p className="text-gray-600">{project.designRationale.typography.reasoning}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 rounded-3xl bg-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl">
                <Palette className="size-7 text-white" />
              </div>
              <h3 className="text-3xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Color Scheme</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="mb-1 text-gray-700">Choices</h4>
                <p className="text-gray-600">{project.designRationale.colorScheme.choices}</p>
              </div>
              {project.designRationale.colorScheme.palette && (
                <div className="flex gap-2 my-4">
                  {project.designRationale.colorScheme.palette.map((color) => (
                    <div key={color} className="flex flex-col items-center gap-2">
                      <div 
                        className="size-12 rounded-lg shadow-md border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs text-gray-500 font-mono">{color}</span>
                    </div>
                  ))}
                </div>
              )}
              <div>
                <h4 className="mb-1 text-gray-700">Reasoning</h4>
                <p className="text-gray-600">{project.designRationale.colorScheme.reasoning}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 rounded-3xl bg-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl">
                <Ruler className="size-7 text-white" />
              </div>
              <h3 className="text-3xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Spacing & Rhythm</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="mb-1 text-gray-700">Choices</h4>
                <p className="text-gray-600">{project.designRationale.spacing.choices}</p>
              </div>
              <div>
                <h4 className="mb-1 text-gray-700">Reasoning</h4>
                <p className="text-gray-600">{project.designRationale.spacing.reasoning}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 rounded-3xl bg-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl">
                <Layers className="size-7 text-white" />
              </div>
              <h3 className="text-3xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Visual Hierarchy</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="mb-1 text-gray-700">Choices</h4>
                <p className="text-gray-600">{project.designRationale.visualHierarchy.choices}</p>
              </div>
              <div>
                <h4 className="mb-1 text-gray-700">Reasoning</h4>
                <p className="text-gray-600">{project.designRationale.visualHierarchy.reasoning}</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="demo">
          <Card className="p-10 rounded-3xl bg-white shadow-xl">
            <div className="mb-8 text-center">
              <h3 className="text-3xl mb-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Interactive Demo ✨</h3>
              <p className="text-xl text-gray-600">Experience the design in action</p>
            </div>
            {DemoComponent ? (
              <DemoComponent />
            ) : (
              <div className="bg-gray-100 rounded-lg p-12 text-center">
                <p className="text-gray-500">Demo component coming soon</p>
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="process" className="space-y-6">
          <Card className="p-8 rounded-3xl bg-white shadow-xl">
            <h3 className="text-3xl mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">The Story 📖</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">{project.story}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
                <h4 className="mb-3 text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">⚡ Challenge</h4>
                <p className="text-gray-600">{project.challenge}</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-50 to-purple-50 rounded-2xl">
                <h4 className="mb-3 text-xl bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">💡 Solution</h4>
                <p className="text-gray-600">{project.solution}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 rounded-3xl bg-white shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl">
                <GitBranch className="size-7 text-white" />
              </div>
              <h3 className="text-3xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Design Iterations 🔄</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {project.iterations.map((iteration, index) => (
                <AccordionItem key={iteration.version} value={iteration.version}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">v{iteration.version}</Badge>
                      <span>{iteration.date}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <div>
                        <h5 className="text-sm text-gray-500 mb-1">Feedback Received</h5>
                        <p className="text-gray-700">{iteration.feedback}</p>
                      </div>
                      <div>
                        <h5 className="text-sm text-gray-500 mb-1">Changes Made</h5>
                        <p className="text-gray-700">{iteration.changes}</p>
                      </div>
                      <div>
                        <h5 className="text-sm text-gray-500 mb-1">Improvements & Results</h5>
                        <p className="text-green-700">{iteration.improvements}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}