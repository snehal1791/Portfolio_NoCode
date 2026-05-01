
import React from 'react';
import { Project, Skill, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'timeline-component',
    title: 'Vertical Progress Timeline',
    description: 'Custom Retool Component — Retool Challenge Winner',
    tags: ['Retool', 'React', 'TypeScript', 'D3.js-inspired'],
    imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1200',
    link: 'https://docs.google.com/videos/d/1R4N4YQ1McngrbODM5_3IiV0TRX4rCvjnX-soroEUTE0/edit?usp=drive_link',
    githubUrl: 'https://github.com/snehal1791/custom-component-gallery/tree/add-vertical-progress-timeline',
    challenge: "Internal teams usually have to dig through boring tables to see where a project stands. I wanted to give them a way to see milestone progress at a glance without them having to build a complex UI from scratch every time.",
    solution: "I built a custom Retool component that automatically turns messy SQL or API data into a clean, vertical timeline. It handles all the tricky date parsing and status mapping in the background, so builders can just plug it in and have a pixel-perfect progress tracker that matches their brand.",
    result: "Was shared with the global community as an example of how to build flexible, high-quality tools for internal teams.",
    isCaseStudy: true,
    awards: "$150 Raffle Prize, Retool Community Spotlight",
    videoUrl: 'https://docs.google.com/videos/d/1R4N4YQ1McngrbODM5_3IiV0TRX4rCvjnX-soroEUTE0/edit?usp=drive_link',
    resultCards: [
      { label: "Community", value: "Featured in Retool's 'Show & Tell'.", color: "text-blue-400" },
      { label: "Design", value: "Clean, gap-free vertical progress line.", color: "text-green-400" },
      { label: "Logic", value: "Smart data mapping for any query.", color: "text-purple-400" }
    ],
    highlights: [
      "Plug & Play: Works with any SQL or API source by mapping your labels.",
      "Visual Polish: Renders as a single connected path—no awkward gaps between nodes.",
      "Smart Logic: Automatically calculates progress based on your 'done' statuses.",
      "Built for Everyone: Fully keyboard accessible and screen-reader friendly.",
      "Retool Native: Snaps directly into Retool's built-in theming system."
    ],
    gallery: [
      { url: '/screenshots/retool_timeline_demo.png', caption: 'The Vertical Progress Timeline in action, showing dynamic status nodes and connected progress segments.' },
      { url: '/screenshots/retool_field_settings.png', caption: 'Comprehensive field mapping and status configuration in the Retool Inspector.' }
    ],
    snippets: {
      'TypeScript': 'const normalized = milestones.map(m => ({\n  id: m[mapping.id] || generateId(),\n  isDone: doneStatuses.includes(m[mapping.status])\n}));',
      'React': '<motion.div \n  layout \n  initial={{ opacity: 0 }} \n  animate={{ opacity: 1 }}\n  className="timeline-card-wrapper"\n/>'
    }
  },
  {
    id: '0',
    title: 'High-Performance Admin Portal',
    description: 'High-performance internal operations tool with complex data orchestration.',
    tags: ['Retool', 'Xano', 'SQL', 'API Design'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    challenge: "The team required a robust system to manage complex related records with high-performance filtering and automated background tasks.",
    solution: "Architected a comprehensive admin portal using Retool and Xano, featuring server-side pagination, nested list structures, and custom JS logic.",
    result: "Streamlined internal operations with optimized page loads and automated scheduled workflows for data consistency.",
    resultCards: [
      { label: "Performance", value: "Optimized page loads via server-side pagination.", color: "text-blue-400" },
      { label: "Automation", value: "Scheduled workflows for 100% data consistency.", color: "text-green-400" },
      { label: "Visibility", value: "Nested lists for complex record relationships.", color: "text-purple-400" }
    ],
    highlights: [
      "Complex SQL queries for high-density data visualization.",
      "Server-side pagination and custom multi-filter fields.",
      "Expandable nested lists for related record visibility.",
      "Scheduled workflows and performance optimization in Retool."
    ],
    snippets: {
      'SQL': 'SELECT * FROM related_records \nWHERE parent_id = {{table1.selectedRow.id}} \nAND status = {{filterStatus.value}}\nLIMIT {{table1.pageSize}};',
      'Xano': 'POST /api/v1/workflow/sync\n{\n  "trigger": "scheduled",\n  "action": "batch_update"\n}'
    }
  },
  {
    id: '1',
    title: 'Reconciliation of Transactions in Retool & Python / JavaScript',
    description: 'Automated financial reconciliation engine achieving 90% matching accuracy.',
    tags: ['Retool', 'Python', 'JavaScript', 'Retool Workflows', 'Render'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    challenge: 'Manual transaction reconciliation was slow and error-prone, requiring significant human effort to match bank records with internal data.',
    solution: 'Developed complex JavaScript algorithms within Retool to clean records by transaction type, match by client-provided keywords, and identify cash flow direction. Integrated fee buffer logic by cross-referencing external tables and deployed the engine on Render for scheduled execution via Retool Workflows.',
    result: 'Achieved 90% automated matching accuracy, drastically reducing manual workload and improving financial data integrity through scheduled orchestration.',
    resultCards: [
      { label: "Accuracy", value: "90% automated matching success rate.", color: "text-blue-400" },
      { label: "Efficiency", value: "Drastic reduction in manual financial workload.", color: "text-green-400" },
      { label: "Integrity", value: "Cross-table fee buffer logic validation.", color: "text-purple-400" }
    ],
    highlights: [
      "JavaScript-driven data cleaning and keyword matching algorithms.",
      "Logic to identify money going in/out of bank accounts.",
      "Dynamic fee buffer calculation using cross-table references.",
      "90% matching success rate on high-volume transaction data.",
      "Scheduled orchestration via Retool Workflows, Render, and Cursor."
    ],
    snippets: {
      'JavaScript': 'const cleanRecords = (data) => data.filter(r => r.type === "CREDIT");\nconst matchByKeyword = (record, keywords) => keywords.some(k => record.description.includes(k));',
      'Retool Workflow': '// Scheduled Trigger\nawait reconciliation_task.trigger();\nconsole.log("Reconciliation complete: 90% match rate");'
    }
  },
  {
    id: '2',
    title: 'Multi-Tenant Booking Platform',
    description: 'Systems Architect & Product Engineer',
    tags: ['WeWeb', 'Supabase', 'Stripe Connect', 'Google & Outlook APIs'],
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    link: '#',
    challenge: "Enterprise clients faced severe friction with manual scheduling and lack of real-time sync across disparate calendars.",
    solution: "Engineered a custom synchronization engine using Microsoft Graph & Google APIs, coupled with a multi-tenant Supabase backend.",
    result: "Successfully architected a scalable multi-tenant ecosystem, automating complex scheduling logic and ensuring 100% data residency compliance for global enterprise clients.",
    highlights: [
      "Bi-Directional Calendar Orchestration (Google/Microsoft Graph API).",
      "Enterprise Data Privacy via Supabase Row Level Security (RLS).",
      "Automated Lifecycle Notifications via Edge Functions."
    ],
    resultCards: [
      { label: "Data Integrity", value: "100% Tenant Isolation via Supabase RLS.", color: "text-blue-400" },
      { label: "Operational Efficiency", value: "Automated No-Show Reduction via Edge Functions.", color: "text-green-400" },
      { label: "Flexibility", value: "On-Demand Calendar Sync (Google/Outlook).", color: "text-purple-400" }
    ],
    snippets: {
      'Supabase': 'supabase\n  .from("appointments")\n  .select("*, tenants!inner(*)")\n  .eq("tenants.id", auth.uid());',
      'Stripe Connect': 'stripe.accounts.create({\n  type: "express",\n  capabilities: { card_payments: { requested: true } }\n});'
    }
  }
];

export const SKILLS: Skill[] = [
  {
    name: 'Retool',
    category: 'Frontend',
    icon: '🛠️',
    description: 'Rapidly deploying powerful internal operations tools.'
  },
  {
    name: 'WeWeb',
    category: 'Frontend',
    icon: '🌐',
    description: 'Enterprise frontends with granular design control.'
  },
  {
    name: 'Supabase',
    category: 'Database',
    icon: '⚡',
    description: 'Real-time database with PostgreSQL power.'
  },
  {
    name: 'Xano',
    category: 'Backend',
    icon: '🐘',
    description: 'Scalable backend with complex business logic.'
  },
  {
    name: 'Softr',
    category: 'Frontend',
    icon: '🏗️',
    description: 'Building client portals and internal tools with ease.'
  },
  {
    name: 'Airtable',
    category: 'Database',
    icon: '📊',
    description: 'Relational database with a flexible spreadsheet interface.'
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Retool Platform Advanced Developer',
    issuer: 'Retool',
    date: 'April 2026',
    id: '3f04a7a5-0d80-4d3a-a142-ddec0c7a5103',
    type: 'badge',
    skills: ['Design', 'GenAI', 'Performance Improvement', 'Security'],
    imageUrl: 'https://images.credly.com/images/3f04a7a5-0d80-4d3a-a142-ddec0c7a5103/image.png',
    publicUrl: 'https://www.credly.com/badges/3f04a7a5-0d80-4d3a-a142-ddec0c7a5103/public_url'
  },
  {
    title: 'Softr Professional Certification',
    issuer: 'Softr',
    date: 'March 30, 2026',
    id: 'TLZZSZKQDGV-XPSMPHWHM-RLKTFKDLDL',
    imageUrl: 'https://ais-dev-qnwi6fgfasbuuh5hblxl47-768391020239.asia-southeast1.run.app/certificate-softr.png' 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Treff LaPlante',
    role: 'CEO',
    company: 'CitizenDeveloper',
    content: "A first-rate software developer. She is experienced in owning projects from start to finish... Her knowledge of business use cases has been greatly accelerated because of the nature of no code development.",
    avatarUrl: 'https://i.pravatar.cc/150?u=treff'
  },
  {
    id: 't2',
    name: 'Carlo Baltazar Canda',
    role: 'CTO',
    company: 'teks',
    content: "Highly skilled in JavaScript and SQL, and very fluent with NoCode tools like Xano and Retool. She handles complex problems confidently and communicates clearly.",
    avatarUrl: 'https://i.pravatar.cc/150?u=carlo'
  },
  {
    id: 't3',
    name: 'Brandi Fetchen',
    role: 'Product Design & UX',
    company: 'Freelance',
    content: "As a UI/UX specialist, I often relied on Snehal for design feedback and CSS sanity checks. Her meticulous attention to detail was crucial in enabling the team to rapidly create user-friendly pages.",
    avatarUrl: 'https://i.pravatar.cc/150?u=brandi'
  },
  {
    id: 't4',
    name: 'Drew McLain',
    role: 'Director of Engineering',
    company: 'Engineering Group',
    content: "She is quick to learn new things, and figure out how to use those new tools to the clients' advantage... Handles criticism and adversity well. She was a joy to work with!",
    avatarUrl: 'https://i.pravatar.cc/150?u=drew'
  },
  {
    id: 't5',
    name: 'David Mason',
    role: 'Co-Founder',
    company: 'Reel Edge',
    content: "An exceptionally talented low-code developer who managed our Retool platform. She is reliable, thoughtful, and a pleasure to work with.",
    avatarUrl: 'https://i.pravatar.cc/150?u=davidm'
  },
  {
    id: 't6',
    name: 'Adam Tyma',
    role: 'No-Code Developer',
    company: 'Dev Collective',
    content: "It's been amazing to work with Snehal! She taught me a lot of useful things in WeWeb, Supabase and bubble.",
    avatarUrl: 'https://i.pravatar.cc/150?u=adam'
  }
];

export const SYSTEM_PROMPT = `
You are the AI Digital Twin of Snehal Parate.
Represent her as a "Product Architect & Systems Engineer".

Technical Profile:
- Mastery: Retool (Advanced Developer Certified), WeWeb, Supabase, Xano, Softr, Airtable, JavaScript, SQL.
- Focus: "Architecting Fluidity. Defining Scale."
- Success Metric: Transitioning from "Building Velocity" to "Strategic Infrastructure".

Reference the testimonials from leaders at CitizenDeveloper, teks, and Reel Edge to prove reliability.
Mention the Retool Platform Advanced Developer badge as proof of deep technical expertise in Design, GenAI, and Performance.
`;
