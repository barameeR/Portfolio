import { NavItem } from "@/components/ui/FloatingNav";
import { InfiniteMovingCardItem } from "@/components/ui/InfiniteMovingCards";
import SectionWrapper from "@/components/ui/SectionWrapper";

export { SectionWrapper };
import {
  faCoffee,
  faEnvelope,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export const navItems: NavItem[] = [
  { name: "Home", link: "/", icon: faHome },
  { name: "About", link: "#about", icon: faInfoCircle },
  { name: "Experiences", link: "#experience", icon: faCoffee },
  { name: "Contact", link: "#contact", icon: faEnvelope },
];

export const skillItems: InfiniteMovingCardItem[] = [
  {
    icon: "bitbucket",
    description: "Manages code repositories daily at work.",
  },
  {
    icon: "csharp",
    description: "Powers back-end systems in daily development.",
  },
  {
    icon: "vuejs",
    description: "Essential tool for crafting user interfaces regularly.",
  },
  {
    icon: "mysql",
    description: "Works with EF for efficient database operations.",
  },
  {
    icon: "postman",
    description:
      "Use Postman daily for API testing and debugging, ensuring efficient application development and troubleshooting.",
  },
  {
    icon: "nextjs",
    description: "Exploring Next.js for advanced web applications.",
  },
  {
    icon: "reactjs",
    description: "Investigating React to develop dynamic interfaces.",
  },
  {
    icon: "aws",
    description: "Pursuing cloud certification through AWS studies.",
  },
  {
    icon: "atlassian",
    description: "Central to project organisation and management.",
  },
  {
    icon: "jira",
    description: "Vital for tracking tasks and project milestones.",
  },
  {
    icon: "tailwindcss",
    description: "Using TailwindCSS for effective styling solutions.",
  },
];
