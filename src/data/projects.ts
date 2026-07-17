import { StaticImageData } from "next/image";

import LawfulInterceptionThumbnail from "@/assets/thumbnails/LawfulThumbnail.png";
import BulletLocalizationThumbnail from "@/assets/thumbnails/BulletThumbnail.png";
import IJournalistThumbnail from "@/assets/thumbnails/IJournalistThumbnail.png";
import QaisThumbnail from "@/assets/thumbnails/QaisThumbnail.png";
import NorasolThumbnail from "@/assets/thumbnails/NoraSolThumbnail.png";
import login from "@/assets/LawfulInterceptionScreenshots/LoginErrorScreen.png";
import dashboard from "@/assets/LawfulInterceptionScreenshots/Dashboard.png";
import keycloak from "@/assets/LawfulInterceptionScreenshots/keycloak_frontendReact.png";
import viewMainCase from "@/assets/LawfulInterceptionScreenshots/ViewMainCases.png";
import createMainCase from "@/assets/LawfulInterceptionScreenshots/CreateMainCases.png";
import viewSubCase from "@/assets/LawfulInterceptionScreenshots/ViewSubCases.png";
import createSubCase1 from "@/assets/LawfulInterceptionScreenshots/CreateSubCase-1.png";
import createSubCase2 from "@/assets/LawfulInterceptionScreenshots/CreateSubCase-2.png";
import createSubCase3 from "@/assets/LawfulInterceptionScreenshots/CreateSubCase-3.png";
import updateSubCase1 from "@/assets/LawfulInterceptionScreenshots/UpdateSubCase-1.png";
import updateSubCase2 from "@/assets/LawfulInterceptionScreenshots/UpdateSubCase-2.png";
import updateSubCase3 from "@/assets/LawfulInterceptionScreenshots/UpdateSubCase-3.png";
import viewSubCaseDetails from "@/assets/LawfulInterceptionScreenshots/ViewSubCaseDetails.png";
import viewFilters from "@/assets/LawfulInterceptionScreenshots/ViewFilters.png";
import createFilter from "@/assets/LawfulInterceptionScreenshots/CreateFilter.png";
import updateFilter from "@/assets/LawfulInterceptionScreenshots/UpdateFilter.png";
import detaskFilter from "@/assets/LawfulInterceptionScreenshots/DetaskFilter.png";
import viewAnalysisList from "@/assets/LawfulInterceptionScreenshots/ViewAnalysisList.png";
import createAnalysisList from "@/assets/LawfulInterceptionScreenshots/CreateAnalysis.png";
import analysisGraphForm from "@/assets/LawfulInterceptionScreenshots/ViewAnalysisGraphForm.png";
import analysisTableForm from "@/assets/LawfulInterceptionScreenshots/ViewAnalysisTableForm.png";
import verifyAuditLogs from "@/assets/LawfulInterceptionScreenshots/VerifyAuditLogs.png";
import viewManualExport from "@/assets/LawfulInterceptionScreenshots/ViewManualExportList.png";
import viewAutomaticExport from "@/assets/LawfulInterceptionScreenshots/ViewAutomaticExportList.png";
import automaticExportDetails from "@/assets/LawfulInterceptionScreenshots/ViewAutomaticExportDetail.png";
import exportFolderHierarchy from "@/assets/LawfulInterceptionScreenshots/CreateExportFolderHierarchy.png";
import createManualExport from "@/assets/LawfulInterceptionScreenshots/CreateManualExport.png";
import createAutomaticExport from "@/assets/LawfulInterceptionScreenshots/CreateAutomaticExport.png";
import liveDefaultView from "@/assets/LawfulInterceptionScreenshots/ViewLiveMonitoring(DefaultView).png";
import liveFolderView from "@/assets/LawfulInterceptionScreenshots/ViewLiveMonitoring(FolderView).png";
import liveAdvancedSearch from "@/assets/LawfulInterceptionScreenshots/LiveMonitoringAdvancedSearch.png";
import liveAudioModal from "@/assets/LawfulInterceptionScreenshots/LiveMonitoringAudioModal.png";
import journalistLanding from "@/assets/IJournalistScreenshots/LandingPage.png";
import journalistSignIn from "@/assets/IJournalistScreenshots/SignInPage.png";
import journalistSignUp from "@/assets/IJournalistScreenshots/SignUpPage.png";
import journalistDashboard from "@/assets/IJournalistScreenshots/DashboardPage.png";
import journalistFilterManagement from "@/assets/IJournalistScreenshots/FilterManagement.png";
import journalistCreateFilter from "@/assets/IJournalistScreenshots/CreateFilter.png";
import journalistFilterArticles from "@/assets/IJournalistScreenshots/FilterArticlesView.png";
import journalistArticleDetails from "@/assets/IJournalistScreenshots/FilterFetchedArticleDetails.png";
import journalistArticleAnalysis from "@/assets/IJournalistScreenshots/ArticleAnalysisModal.png";
import journalistSentimentGraph from "@/assets/IJournalistScreenshots/FilterSentimentGraph.png";
import journalistNodeDetails from "@/assets/IJournalistScreenshots/SentimentGraphNodeDetails.png";
import journalistAssistant from "@/assets/IJournalistScreenshots/IJournalistAssitant.png";

export type ProjectMedia = {
  type: "image" | "video";
  src: StaticImageData | string;
  name: string;
  alt: string;
};

export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  challenge: string;
  role: string;
  company: string;
  category: string;
  type: string;
  status: string;
  responsibilities: string[];
  stackGroups: { label: string; items: string[] }[];
  products?: string[];
  availability: string;
  thumbnail: StaticImageData;
  thumbnailAlt: string;
  features: { id: number; description: string }[];
  techStack: { id: number; name: string }[];
  links?: { github?: string; liveDemo?: string };
  gallery?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    id: 1,
    thumbnail: LawfulInterceptionThumbnail,
    thumbnailAlt: "Lawful interception system dashboard",
    title: "Lawful Interception System",
    slug: "LawfulInterception",
    description:
      "A secure surveillance and monitoring platform developed for authorized agencies to manage lawful interception workflows and communication data analysis.",
    challenge:
      "Develop a secure, enterprise-grade platform for lawful communication interception, real-time monitoring, and evidence management while ensuring strict security, scalability, and regulatory compliance.",
    role: "Designed the frontend architecture, implemented monitoring workflows, and collaborated on secure API integration and role-based access controls.",
    company: "CARE Pvt. Ltd.",
    category: "Enterprise Software",
    type: "Web Application",
    status: "Confidential",
    responsibilities: [
      "Developed and enhanced React.js frontend modules",
      "Implemented backend enhancements using Spring Boot",
      "Integrated the frontend with backend APIs and legacy services",
      "Delivered customer-requested features, testing, and validation",
      "Deployed and troubleshot the platform in offline, air-gapped environments",
      "Provided on-site field support, end-user training, and security improvements",
    ],
    stackGroups: [
      { label: "Frontend", items: ["React.js", "TypeScript", "Redux Toolkit", "Material UI"] },
      { label: "Backend", items: ["Java", "Spring Boot", "Spring Security", "Microservices"] },
      { label: "Data & messaging", items: ["MongoDB (sharding & replication)", "PostgreSQL", "Apache Kafka"] },
      { label: "Infrastructure", items: ["Keycloak", "Docker", "Nginx", "Linux"] },
    ],
    availability: "Confidential enterprise project · Proprietary source code",
    features: [
      { id: 1, description: "Role-based access control and secure authentication" },
      { id: 2, description: "User, interception, and evidence management" },
      { id: 3, description: "Real-time monitoring, search, filtering, and updates" },
      { id: 4, description: "Report generation and audit logs" },
    ],
    techStack: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Spring Boot" },
      { id: 3, name: "MongoDB" },
    ],
    gallery: [
      { type: "image", name: "Login Screen", src: login, alt: "Lawful Interception login screen" },
      { type: "image", name: "Dashboard", src: dashboard, alt: "Lawful Interception dashboard" },
      { type: "image", name: "User Management (Keycloak)", src: keycloak, alt: "Keycloak user management screen" },
      { type: "image", name: "View Main Cases", src: viewMainCase, alt: "View main cases screen" },
      { type: "image", name: "Create Main Case", src: createMainCase, alt: "Create main case screen" },
      { type: "image", name: "View Sub Cases", src: viewSubCase, alt: "View sub cases screen" },
      { type: "image", name: "Create Sub Case - 1", src: createSubCase1, alt: "Create sub case step one" },
      { type: "image", name: "Create Sub Case - 2", src: createSubCase2, alt: "Create sub case step two" },
      { type: "image", name: "Create Sub Case - 3", src: createSubCase3, alt: "Create sub case step three" },
      { type: "image", name: "Update Sub Case - 1", src: updateSubCase1, alt: "Update sub case step one" },
      { type: "image", name: "Update Sub Case - 2", src: updateSubCase2, alt: "Update sub case step two" },
      { type: "image", name: "Update Sub Case - 3", src: updateSubCase3, alt: "Update sub case step three" },
      { type: "image", name: "View Sub Case Details", src: viewSubCaseDetails, alt: "View sub case details screen" },
      { type: "image", name: "View Filters", src: viewFilters, alt: "View filters screen" },
      { type: "image", name: "Create Filter", src: createFilter, alt: "Create filter screen" },
      { type: "image", name: "Update Filter", src: updateFilter, alt: "Update filter screen" },
      { type: "image", name: "Detask Filter", src: detaskFilter, alt: "Detask filter screen" },
      { type: "image", name: "View Analysis", src: viewAnalysisList, alt: "View analysis screen" },
      { type: "image", name: "Create Analysis", src: createAnalysisList, alt: "Create analysis screen" },
      { type: "image", name: "Analysis Graph Form", src: analysisGraphForm, alt: "Analysis graph form" },
      { type: "image", name: "Analysis Table Form", src: analysisTableForm, alt: "Analysis table form" },
      { type: "image", name: "Verify Audit Logs", src: verifyAuditLogs, alt: "Verify audit logs screen" },
      { type: "image", name: "View Manual Export", src: viewManualExport, alt: "View manual export screen" },
      { type: "image", name: "View Automatic Export", src: viewAutomaticExport, alt: "View automatic export screen" },
      { type: "image", name: "View Automatic Export Details", src: automaticExportDetails, alt: "Automatic export details screen" },
      { type: "image", name: "Export Folder Hierarchy", src: exportFolderHierarchy, alt: "Export folder hierarchy screen" },
      { type: "image", name: "Create Manual Export", src: createManualExport, alt: "Create manual export screen" },
      { type: "image", name: "Create Automatic Export", src: createAutomaticExport, alt: "Create automatic export screen" },
      { type: "image", name: "Live Monitoring (Default View)", src: liveDefaultView, alt: "Live monitoring default view" },
      { type: "image", name: "Live Monitoring (Folder View)", src: liveFolderView, alt: "Live monitoring folder view" },
      { type: "image", name: "Live Monitoring Advanced Search", src: liveAdvancedSearch, alt: "Live monitoring advanced search" },
      { type: "image", name: "Live Monitoring Audio Modal", src: liveAudioModal, alt: "Live monitoring audio modal" },
    ],
  },
  {
    id: 2,
    thumbnail: BulletLocalizationThumbnail,
    thumbnailAlt: "Bullet localization system visualization",
    title: "Bullet Localization System",
    slug: "BulletLocalization",
    description:
      "A real-time shot detection and visualization platform designed to capture bullet impact coordinates from sensors and display precise hit locations for training, accuracy analysis, and target monitoring.",
    challenge:
      "Build a real-time bullet localization platform capable of detecting shot coordinates, visualizing impacts, and providing accuracy analytics for shooting ranges and training environments.",
    role: "Built the interactive visualization experience and data flows for shot sessions, history management, and accuracy analytics.",
    company: "CARE Pvt. Ltd.",
    category: "Defense Technology",
    type: "Research / Internal Project",
    status: "Internal research",
    responsibilities: [
      "Developed the bullet localization dashboard",
      "Built shot visualization and target analysis interfaces",
      "Implemented analytics dashboards and reporting modules",
      "Integrated sensor-generated data",
      "Optimized the interface for fast operational use",
    ],
    stackGroups: [
      { label: "Frontend", items: ["Python Reflex", "Recharts"] },
      { label: "Data", items: ["SQLite", "PostgreSQL"] },
    ],
    availability: "Internal research project · Proprietary source code",
    links: { liveDemo: "https://falcontarget.com" },
    features: [
      { id: 1, description: "Real-time bullet localization and coordinate tracking" },
      { id: 2, description: "Target visualization and scatter plot analytics" },
      { id: 3, description: "Shot grouping, session history, and accuracy analysis" },
      { id: 4, description: "Performance dashboards and reporting" },
    ],
    techStack: [
      { id: 1, name: "Python" },
      { id: 2, name: "Reflex" },
      { id: 3, name: "Recharts" },
      { id: 4, name: "SQLite" },
    ],
  },
  {
    id: 3,
    thumbnail: IJournalistThumbnail,
    thumbnailAlt: "IJournalist media intelligence dashboard",
    title: "IJournalist",
    slug: "IJournalist",
    description:
      "An AI-powered media intelligence platform that analyzes news articles from multiple sources using large language models to generate sentiment insights, reports, and real-time monitoring dashboards.",
    challenge:
      "Create an AI-powered news intelligence platform capable of collecting articles from multiple sources, performing sentiment analysis, and generating actionable insights in real time.",
    role: "Implemented article ingestion interfaces, analytics dashboards, and the user experience for exploring AI-generated insights.",
    company: "CARE Pvt. Ltd.",
    category: "Artificial Intelligence",
    type: "Research Website",
    status: "Confidential",
    responsibilities: [
      "Developed frontend dashboards for media intelligence",
      "Integrated AI services and backend APIs",
      "Implemented article processing workflows",
      "Built reporting, search, and filtering features",
    ],
    stackGroups: [
      { label: "Frontend", items: ["React.js"] },
      { label: "Backend", items: ["Spring Boot", "Python"] },
      { label: "Data & AI", items: ["PostgreSQL", "Large Language Models", "LLM APIs"] },
    ],
    availability: "Confidential enterprise project · Proprietary source code",
    gallery: [
      { type: "image", name: "Landing Page", src: journalistLanding, alt: "IJournalist landing page" },
      { type: "image", name: "Sign In Page", src: journalistSignIn, alt: "IJournalist sign in page" },
      { type: "image", name: "Sign Up Page", src: journalistSignUp, alt: "IJournalist sign up page" },
      { type: "image", name: "Dashboard", src: journalistDashboard, alt: "IJournalist dashboard" },
      { type: "image", name: "Filter Management", src: journalistFilterManagement, alt: "IJournalist filter management" },
      { type: "image", name: "Create Filter", src: journalistCreateFilter, alt: "IJournalist create filter page" },
      { type: "image", name: "Filtered Articles", src: journalistFilterArticles, alt: "IJournalist filtered articles view" },
      { type: "image", name: "Fetched Article Details", src: journalistArticleDetails, alt: "IJournalist fetched article details" },
      { type: "image", name: "Article Analysis", src: journalistArticleAnalysis, alt: "IJournalist article analysis modal" },
      { type: "image", name: "Sentiment Graph", src: journalistSentimentGraph, alt: "IJournalist sentiment graph" },
      { type: "image", name: "Sentiment Graph Node Details", src: journalistNodeDetails, alt: "IJournalist sentiment graph node details" },
      { type: "image", name: "IJournalist Assistant", src: journalistAssistant, alt: "IJournalist assistant" },
    ],
    features: [
      { id: 1, description: "Automated news collection and article classification" },
      { id: 2, description: "AI sentiment analysis and keyword filtering" },
      { id: 3, description: "Interactive dashboards, trend charts, and reports" },
      { id: 4, description: "Search functionality and real-time monitoring" },
    ],
    techStack: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "LLM APIs" },
    ],
  },
  {
    id: 4,
    thumbnail: QaisThumbnail,
    thumbnailAlt: "QAIS corporate website",
    title: "QAIS Website",
    slug: "Qais",
    description:
      "A modern corporate website developed for QAIS to showcase enterprise solutions, services, and technology expertise through a clean, responsive, and professional digital presence.",
    challenge:
      "Design and develop a premium corporate website that effectively presents QAIS's technology services, enterprise solutions, and company portfolio while maintaining a modern user experience.",
    role: "Led the responsive frontend implementation, visual system, and motion details across the marketing pages.",
    company: "CARE Pvt. Ltd.",
    category: "Product Showcase Website",
    type: "Business Website",
    status: "Private project",
    responsibilities: [
      "Designed responsive layouts and reusable React components",
      "Implemented modern animations and interactive UI",
      "Built service showcase and company portfolio pages",
      "Optimized performance and maintained branding consistency",
    ],
    stackGroups: [
      { label: "Frontend", items: ["React.js", "JavaScript", "Tailwind CSS"] },
    ],
    availability: "Private company project · Source code not publicly available",
    links: { liveDemo: "https://qais.qa/" },
    features: [
      { id: 1, description: "Modern responsive UI with premium user experience" },
      { id: 2, description: "Optimized performance and cross-device compatibility" },
    ],
    techStack: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Framer Motion" },
    ],
  },
  {
    id: 5,
    thumbnail: NorasolThumbnail,
    thumbnailAlt: "NoraSol renewable energy website",
    title: "NoraSol Website",
    slug: "NoraSol",
    description:
      "A modern solar energy solutions website developed for NoraSol to showcase premium solar inverters, battery storage systems, and renewable energy products through a clean and responsive digital experience.",
    challenge:
      "Develop a modern renewable energy website to showcase NoraSol's solar inverters, lithium battery systems, and clean energy solutions with a premium customer experience.",
    role: "Developed the Next.js frontend, product presentation components, and responsive layouts for the clean-energy brand experience.",
    company: "CARE Pvt. Ltd.",
    category: "Product Showcase Website",
    type: "Business Website",
    status: "Private project",
    responsibilities: [
      "Developed product showcase pages and responsive layouts",
      "Implemented modern UI/UX and reusable React components",
      "Optimized website performance",
      "Created engaging product presentation sections",
    ],
    stackGroups: [
      { label: "Frontend", items: ["React.js", "JavaScript", "Tailwind CSS"] },
    ],
    products: ["Solar inverters", "Lithium battery storage systems", "Renewable energy solutions", "Energy backup systems"],
    availability: "Private client project · Source code not publicly available",
    links: { liveDemo: "https://norasol.net/" },
    features: [
      { id: 1, description: "Product showcase for solar inverters, lithium batteries, and energy solutions" },
      { id: 2, description: "Professional branding focused on clean energy and sustainability" },
    ],
    techStack: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "TypeScript" },
    ],
  },
];
