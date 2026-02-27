export interface DesignRationale {
  typography: {
    choices: string;
    reasoning: string;
  };
  colorScheme: {
    choices: string;
    reasoning: string;
    palette?: string[];
  };
  spacing: {
    choices: string;
    reasoning: string;
  };
  visualHierarchy: {
    choices: string;
    reasoning: string;
  };
}

export interface Iteration {
  version: string;
  date: string;
  feedback: string;
  changes: string;
  improvements: string;
}

export interface Project {
  id: string;
  active: boolean;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  url ?: string;
  designRationale: DesignRationale;
  story: string;
  challenge: string;
  solution: string;
  iterations: Iteration[];
  demoComponent?: React.ComponentType;
  tags: string[];
}
