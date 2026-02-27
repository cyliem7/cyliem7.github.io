import { Project } from "../types/project";
import { TaskManagerDemo } from "../components/demos/TaskManagerDemo";
import { PricingTableDemo } from "../components/demos/PricingTableDemo";

export const projects: Project[] = [
  {
    id: "westry-site", 
    active: true,
    title: "Jewelry Website and Branding", 
    description: "A modern take on western jewelry.  Website and branding designed for an outdoorsy audience that appreciates slow, quality work.", 
    category: "Web Design", 
    thumbnail: "https://raw.githubusercontent.com/cyliem7/cyliem7.github.io/refs/heads/main/src/assets/img/projects/westryWebsite.png", 
    tags: ["UI/UX", "Web Design", "Shopify", "Branding"], 
    story: "", 
    challenge: "There are other jewelry artists that tell a similar story.  How do we make mine unique?", 
    solution: "", 
    designRationale: {
      typography: {
        choices: "", 
        reasoning: ""
      }, 
      colorScheme: {
        choices: "Neutral base (grays) with accent colors for priority levels: Blue (normal), Orange (medium), Red (high).",
        palette: ["#F8F9FA", "#6366F1", "#F59E0B", "#EF4444", "#10B981"],
        reasoning: "The neutral palette reduces visual fatigue during extended use. Priority colors follow common conventions (red = urgent) to leverage existing mental models. Green for completed tasks provides positive reinforcement."
      },
      spacing: {
        choices: "8px base unit with consistent 16px/24px/32px spacing between components.",
        reasoning: "The 8-point grid system ensures consistent rhythm across the interface. Larger spacing (32px) separates major sections, while tighter spacing (8px) groups related elements, creating clear visual relationships."
      },
      visualHierarchy: {
        choices: "Task titles are prominent, metadata (dates, assignees) is secondary in lighter text. Action buttons appear on hover to reduce clutter.",
        reasoning: "Users scan task titles first, so they're the most prominent element. Supporting information is visible but de-emphasized. Progressive disclosure (hover states) keeps the interface clean while maintaining quick access to actions."
      }
    }, 
    iterations: []
  },
  {
    id: "task-manager",
    active: false,
    title: "Collaborative Task Manager",
    description: "A modern task management interface designed for team collaboration with real-time updates and intuitive workflows.",
    category: "Web Application",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    tags: ["UI/UX", "Product Design", "Dashboard"],
    story: "The challenge was to create a task management system that felt lightweight yet powerful. Teams were frustrated with bloated tools that had too many features they never used. I focused on essential features with a clean, distraction-free interface.",
    challenge: "Users complained about context-switching and information overload in existing task managers. The main pain point was the inability to quickly see task status without drilling into multiple levels of menus.",
    solution: "Implemented a card-based layout with color-coded priority states, inline editing, and drag-and-drop functionality. The design prioritizes scanability with clear visual hierarchy and instant feedback for all interactions.",
    designRationale: {
      typography: {
        choices: "Inter for UI elements, with a clear hierarchy using size and weight variations (14px body, 24px headings).",
        reasoning: "Inter provides excellent readability at small sizes and has a modern, professional appearance. Its tabular figures ensure consistent alignment in lists and data displays."
      },
      colorScheme: {
        choices: "Neutral base (grays) with accent colors for priority levels: Blue (normal), Orange (medium), Red (high).",
        palette: ["#F8F9FA", "#6366F1", "#F59E0B", "#EF4444", "#10B981"],
        reasoning: "The neutral palette reduces visual fatigue during extended use. Priority colors follow common conventions (red = urgent) to leverage existing mental models. Green for completed tasks provides positive reinforcement."
      },
      spacing: {
        choices: "8px base unit with consistent 16px/24px/32px spacing between components.",
        reasoning: "The 8-point grid system ensures consistent rhythm across the interface. Larger spacing (32px) separates major sections, while tighter spacing (8px) groups related elements, creating clear visual relationships."
      },
      visualHierarchy: {
        choices: "Task titles are prominent, metadata (dates, assignees) is secondary in lighter text. Action buttons appear on hover to reduce clutter.",
        reasoning: "Users scan task titles first, so they're the most prominent element. Supporting information is visible but de-emphasized. Progressive disclosure (hover states) keeps the interface clean while maintaining quick access to actions."
      }
    },
    iterations: [
      {
        version: "1.0",
        date: "2024-01-15",
        feedback: "Users found it difficult to distinguish between priority levels at a glance.",
        changes: "Added colored left border to task cards based on priority level.",
        improvements: "Recognition time for priority levels decreased by 40% in user testing."
      },
      {
        version: "1.1",
        date: "2024-02-03",
        feedback: "Team members wanted to see task assignments more prominently.",
        changes: "Added avatar badges with tooltips showing assignee names.",
        improvements: "Reduced confusion about task ownership and improved team coordination."
      },
      {
        version: "1.2",
        date: "2024-02-20",
        feedback: "The 'Add Task' button was being overlooked.",
        changes: "Moved primary action to a fixed bottom-right floating button with a plus icon.",
        improvements: "Task creation increased by 25% after the repositioning."
      }
    ],
    demoComponent: TaskManagerDemo
  },
  {
    id: "pricing-table",
    active: false,
    title: "SaaS Pricing Page",
    description: "A conversion-optimized pricing page designed to clearly communicate value propositions and drive subscriptions.",
    category: "Marketing Site",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    tags: ["Landing Page", "Conversion Design", "Marketing"],
    story: "Converting visitors to paying customers was the ultimate goal. The pricing page needed to do more than just list features—it needed to tell a story about value. I analyzed competitor pricing pages and identified what made users hesitate versus what built confidence.",
    challenge: "Previous pricing page had a 2% conversion rate. User research revealed confusion about which plan to choose and uncertainty about whether features justified the price point.",
    solution: "Redesigned with clear plan differentiation, social proof elements, and a comparison table. Used visual hierarchy to highlight the recommended plan and included reassuring elements like money-back guarantees and testimonials.",
    designRationale: {
      typography: {
        choices: "Gilroy Bold for pricing numbers (48px), Inter for body text. Clear numerical hierarchy.",
        reasoning: "Large, bold pricing numbers create immediate focus and make comparison easy. The contrast between decorative headings and clean body text creates interest while maintaining professionalism and readability."
      },
      colorScheme: {
        choices: "Purple primary (#6366F1) for premium feel, with green accents for CTAs and value indicators.",
        palette: ["#FFFFFF", "#6366F1", "#10B981", "#1F2937", "#F3F4F6"],
        reasoning: "Purple conveys premium quality and innovation, differentiating from common blue SaaS competitors. Green CTAs stand out and psychologically signal 'go' for action. High contrast ensures accessibility (WCAG AA compliant)."
      },
      spacing: {
        choices: "Generous whitespace (48px) between pricing tiers, 24px padding inside cards.",
        reasoning: "Ample spacing between plans prevents cognitive overload and makes each option digestible. The breathing room communicates premium quality and prevents the page from feeling cramped or sales-y."
      },
      visualHierarchy: {
        choices: "Recommended plan elevated with shadow and subtle scale (102%), pricing numbers are largest elements, features listed in order of importance.",
        reasoning: "The elevated recommended plan leverages the Von Restorff effect (isolation effect) to guide decision-making. Size hierarchy (price > features > fine print) mirrors the scanning pattern of users comparing options."
      }
    },
    iterations: [
      {
        version: "1.0",
        date: "2023-11-10",
        feedback: "Users weren't sure which plan was most popular or recommended.",
        changes: "Added 'Most Popular' badge and elevated the middle tier with visual treatment.",
        improvements: "Middle tier conversions increased by 35%, overall conversion rate improved to 2.8%."
      },
      {
        version: "1.1",
        date: "2023-12-01",
        feedback: "Annual vs monthly pricing toggle was confusing—many users didn't notice the savings.",
        changes: "Added prominent savings badge showing '20% off' when annual billing is selected.",
        improvements: "Annual plan selection increased from 30% to 52% of conversions."
      },
      {
        version: "1.2",
        date: "2024-01-15",
        feedback: "Enterprise inquiries were low—potential customers didn't know how to reach out.",
        changes: "Added clear 'Contact Sales' CTA on enterprise tier with expected response time.",
        improvements: "Enterprise inquiries tripled, conversion rate reached 3.4%."
      }
    ],
    demoComponent: PricingTableDemo
  }
];
