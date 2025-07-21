/* eslint-disable no-dupe-keys */
// @ts-nocheck
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiFlutter,
  SiDart,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiGitlab,
  SiFastlane,
  SiXcode,
  SiAndroidstudio,
  SiJsonwebtokens,
  SiTensorflow,
  SiPytorch,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiNginx,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiSqlite,
  SiSupabase,
  SiNextdotjs,
} from "react-icons/si";
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa";
import { VscChevronRight } from "react-icons/vsc";
import { IconType } from "react-icons";

// Add a generic cloud icon for AWS/Azure fallback
import { MdCloud } from "react-icons/md";

// Custom icons for missing technologies
const BlocIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#13B9FD" />
    <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="#13B9FD" />
    <path d="M2 12L12 17L22 12L12 7L2 12Z" fill="#0081C6" />
  </svg>
);

const ProviderIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="#42A5F5"
    />
    <path
      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
      fill="#1976D2"
    />
  </svg>
);

const BiometricIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
      fill="#FF4081"
    />
    <path
      d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
      fill="#F50057"
    />
  </svg>
);

const UiUxIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#FF9800" />
    <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" fill="white" />
  </svg>
);

const RestApiIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"
      fill="#4CAF50"
    />
    <path
      d="M6 10h2v2H6v-2zm4 0h8v2h-8v-2zm-4 4h2v2H6v-2zm4 0h8v2h-8v-2z"
      fill="white"
    />
  </svg>
);

const PushNotificationIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
      fill="#FF5722"
    />
  </svg>
);

const PerformanceIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      fill="#9C27B0"
    />
  </svg>
);

const MachineLearningIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="#00BCD4"
    />
    <path
      d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
      fill="#006064"
    />
  </svg>
);

// Placeholder icons for missing brands
const CloudIcon = MdCloud;

// Provide fallback components for missing Simple Icons
const SiAmazonaws = CloudIcon;
const SiMicrosoftazure = CloudIcon;
const SiVisualstudiocode = CloudIcon;

// Update TechnologyIcons mapping to use placeholders where previous icon imports were removed
const TechnologyIcons: {
  [key: string]: IconType | (() => React.ReactElement);
} = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  HTML: SiHtml5,
  CSS: SiCss3,
  "React Native": SiReact,
  Flutter: SiFlutter,
  Dart: SiDart,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  "Firebase (Firestore, FCM, Auth)": SiFirebase,
  MongoDB: SiMongodb,
  Redux: SiRedux,
  GraphQL: SiGraphql,
  SQL: SiPostgresql,
  "Azure DevOps": SiVisualstudiocode, // Using GitLab as fallback
  "GitLab CI/CD": SiGitlab,
  Fastlane: SiFastlane,
  Xcode: SiXcode,
  "Android Studio": SiAndroidstudio,
  JWT: SiJsonwebtokens,
  TensorFlow: SiTensorflow,
  "Cloud Services": SiGooglecloud,
  AWS: SiAmazonaws, // Using MdCloud as fallback
  Azure: SiMicrosoftazure, // Using MdCloud as fallback
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  Nginx: SiNginx,
  Bloc: BlocIcon,
  Provider: ProviderIcon,
  GetX: BlocIcon, // Using BlocIcon as fallback
  Riverpod: ProviderIcon, // Using ProviderIcon as fallback
  "UI/UX Design Patterns": UiUxIcon,
  "Push Notifications": PushNotificationIcon,
  "Biometric Authentication": BiometricIcon,
  "RESTful APIs": RestApiIcon,
  "App Performance Optimization": PerformanceIcon,
  "Machine Learning": MachineLearningIcon,
  Authentication: SiFirebase,
  Firestore: SiFirebase,
  "Dynamic Links": SiFirebase,
  "App Distribution": SiFirebase,
  Analytics: SiFirebase,
  "Performance Monitoring": SiFirebase,
  "Azure Repos": SiVisualstudiocode,
  "Azure Pipelines (CI/CD)": SiJenkins,
  "Azure Artifacts": SiDocker,
  "Azure Boards": SiVisualstudiocode,
  "Cloud Storage": SiGooglecloud,
  "Cloud Functions": SiGooglecloud,
  "Cloud Run": SiGooglecloud,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Flask: SiFlask,
  "Next.js": SiNextdotjs,
  PyTorch: SiPytorch,
};

// Transform skills data into tree structure
const skillsTreeData: FileTreeItem[] = [
  {
    name: "Programming Skills",
    type: "folder",
    children: [
      {
        name: "Languages",
        type: "folder",
        children: [
          {
            name: "Web",
            type: "folder",
            children: [
              { name: "JavaScript", type: "file" },
              { name: "TypeScript", type: "file" },
              { name: "Python", type: "file" },
              { name: "HTML", type: "file" },
              { name: "CSS", type: "file" },
              { name: "Next.js", type: "file" },
            ],
          },
          {
            name: "Mobile",
            type: "folder",
            children: [
              {
                name: "Languages",
                type: "folder",
                children: [
                  { name: "Flutter", type: "file" },
                  { name: "Dart", type: "file" },
                  { name: "Swift", type: "file" },
                  { name: "Kotlin", type: "file" },
                  { name: "React Native", type: "file" },
                ],
              },
              {
                name: "Development Tools",
                type: "folder",
                children: [
                  { name: "Xcode", type: "file" },
                  { name: "Android Studio", type: "file" },
                ],
              },
            ],
          },
          {
            name: "State Management",
            type: "folder",
            children: [
              { name: "Bloc", type: "file" },
              { name: "Provider", type: "file" },
              { name: "Redux", type: "file" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Cloud",
    type: "folder",
    children: [
      {
        name: "Firebase",
        type: "folder",
        children: [
          { name: "Authentication", type: "file" },
          { name: "Firestore", type: "file" },
          { name: "Dynamic Links", type: "file" },
          { name: "App Distribution", type: "file" },
          { name: "Analytics", type: "file" },
          { name: "Performance Monitoring", type: "file" },
        ],
      },
      {
        name: "Azure",
        type: "folder",
        children: [
          { name: "Azure Repos", type: "file" },
          { name: "Azure Pipelines (CI/CD)", type: "file" },
          { name: "Azure Artifacts", type: "file" },
          { name: "Azure Boards", type: "file" },
        ],
      },
      {
        name: "Google Cloud",
        type: "folder",
        children: [
          { name: "Cloud Storage", type: "file" },
          { name: "Cloud Functions", type: "file" },
          { name: "Cloud Run", type: "file" },
        ],
      },
    ],
  },
  {
    name: "Backend & Infrastructure",
    type: "folder",
    children: [
      {
        name: "Databases & BaaS",
        type: "folder",
        children: [
          { name: "Supabase", type: "file" },
          { name: "PostgreSQL", type: "file" },
          { name: "SQLite", type: "file" },
          { name: "MongoDB", type: "file" },
          { name: "Firebase (Firestore, FCM, Auth)", type: "file" },
        ],
      },
      {
        name: "Backend Frameworks",
        type: "folder",
        children: [
          { name: "Node.js", type: "file" },
          { name: "Express.js", type: "file" },
          { name: "Flask", type: "file" },
          { name: "RESTful APIs", type: "file" },
        ],
      },
      {
        name: "DevOps & Tools",
        type: "folder",
        children: [
          { name: "Azure DevOps", type: "file" },
          { name: "GitLab CI/CD", type: "file" },
        ],
      },
    ],
  },
  {
    name: "Advanced Technologies",
    type: "folder",
    children: [
      { name: "JWT", type: "file" },
      { name: "TensorFlow", type: "file" },
      { name: "PyTorch", type: "file" },
      { name: "Machine Learning", type: "file" },
      { name: "Cloud Services", type: "file" },
    ],
  },
];

// Type definitions
interface FileTreeItem {
  name: string;
  type: "folder" | "file";
  icon?: React.ComponentType;
  children?: FileTreeItem[];
}

// Update TreeNodeProps interface
interface TreeNodeProps {
  item: FileTreeItem;
  selectedFile: string;
  onFileSelect: (fileName: string) => void;
  openSections: string[];
  onSectionToggle: (sectionPath: string) => void;
  parentPath?: string;
}

interface TreeIconProps {
  item: FileTreeItem;
  isOpen: boolean;
}

// Add a new interface for skill stats
interface SkillStats {
  projects: number;
  years: number;
}

// Update FolderIcon component
const FolderIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) =>
  isOpen ? (
    <FaFolderOpen className="w-5 h-5 mr-2 text-yellow-500" />
  ) : (
    <FaFolder className="w-5 h-5 mr-2 text-yellow-500" />
  );

// Update ChevronIcon component
const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <VscChevronRight
    className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 shrink-0 ${
      isOpen ? "rotate-90" : ""
    }`}
  />
);

// Update FileIcon component
const FileIcon = () => (
  <FaFile className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 shrink-0" />
);

// Helper to render an icon
const renderIcon = (
  icon: IconType | (() => React.ReactElement) | undefined
) => {
  if (!icon) {
    return <FileIcon />;
  }

  if (typeof icon === "function") {
    return (
      <div className="w-5 h-5 mr-2 shrink-0 flex items-center justify-center">
        {icon()}
      </div>
    );
  }

  return (
    <div className="w-5 h-5 mr-2 shrink-0 flex items-center justify-center">
      <icon size={20} />
    </div>
  );
};

// Update TreeIcon component to handle both IconType and custom icons
const TreeIcon: React.FC<TreeIconProps> = ({ item, isOpen }) => {
  if (item.type === "folder") {
    return <FolderIcon isOpen={isOpen} />;
  }

  const Icon = TechnologyIcons[item.name];
  if (Icon) {
    return renderIcon(Icon);
  }

  return <FileIcon />;
};

// Update TreeNode component
const TreeNode: React.FC<TreeNodeProps> = ({
  item,
  selectedFile,
  onFileSelect,
  openSections,
  onSectionToggle,
  parentPath = "",
}) => {
  const isFolder = item.type === "folder";
  const currentPath = parentPath ? `${parentPath}/${item.name}` : item.name;
  const isOpen = openSections.includes(currentPath);

  const handleToggle = () => {
    if (isFolder) {
      onSectionToggle(currentPath);
    } else {
      onFileSelect(item.name);
    }
  };

  const isSelected = !isFolder && selectedFile === item.name;

  return (
    <div className="text-gray-700 dark:text-gray-300 relative">
      <div
        className={`flex items-center py-1.5 px-2 rounded-md cursor-pointer transition-colors duration-150 ${
          isSelected
            ? "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-white"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        onClick={handleToggle}
      >
        <div className="flex items-center flex-grow">
          {isFolder ? (
            <ChevronIcon isOpen={isOpen} />
          ) : (
            <div className="w-4 shrink-0"></div>
          )}
          <div className="flex items-center ml-1">
            <TreeIcon item={item} isOpen={isOpen} />
            <span className="text-sm ml-1.5">{item.name}</span>
          </div>
        </div>
      </div>

      <div
        className={`pl-4 relative overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transitionProperty: "max-height, opacity",
          transitionDuration: "300ms, 150ms",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <div className="absolute left-[13px] top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-800"></div>
        {isFolder &&
          item.children &&
          item.children.map((child: FileTreeItem) => (
            <TreeNode
              key={child.name}
              item={child}
              selectedFile={selectedFile}
              onFileSelect={onFileSelect}
              openSections={openSections}
              onSectionToggle={onSectionToggle}
              parentPath={currentPath}
            />
          ))}
      </div>
    </div>
  );
};

// Add skill descriptions
const skillDescriptions: {
  [key: string]: {
    description?: string;
    experience?: string;
    stats: SkillStats;
  };
} = {
  Authentication: {
    description:
      "Firebase Authentication service for secure user authentication and identity management.",
    experience:
      "Implemented multiple authentication methods including email/password, Google, Apple, and Facebook sign-in across various applications.",
    stats: { projects: 10, years: 3 },
  },
  Firestore: {
    description:
      "NoSQL cloud database by Firebase for real-time data synchronization.",
    experience:
      "Used Firestore for testimonials in client projects and as primary database for smaller applications. Experienced with real-time data updates and offline persistence.",
    stats: { projects: 8, years: 2 },
  },
  "Dynamic Links": {
    description:
      "Firebase service for creating smart URLs that dynamically adapt to different platforms.",
    experience:
      "Implemented as a feature in applications for deep linking and referral systems. Aware of upcoming deprecation and alternative solutions.",
    stats: { projects: 4, years: 1 },
  },
  "App Distribution": {
    description:
      "Firebase service for distributing app builds to testers and stakeholders.",
    experience:
      "Used for APK distribution in development and testing phases. Streamlined the testing process with automated build distribution.",
    stats: { projects: 6, years: 2 },
  },
  Analytics: {
    description:
      "Firebase Analytics for tracking user behavior and app performance metrics.",
    experience:
      "Implemented in major industrial mobile applications for user behavior tracking, conversion monitoring, and business metrics analysis.",
    stats: { projects: 8, years: 2 },
  },
  "Performance Monitoring": {
    description:
      "Firebase service for monitoring and analyzing app performance in real-time.",
    experience:
      "Utilized in large-scale industrial applications to track and optimize app performance, network requests, and resource usage.",
    stats: { projects: 8, years: 2 },
  },
  Flutter: {
    description:
      "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    experience:
      "Extensive experience building dozens of applications across industrial, personal, and freelance projects. Proficient in developing complex, production-grade applications with cross-platform compatibility and native platform integrations.",
    stats: { projects: 15, years: 3 },
  },
  Swift: {
    stats: { projects: 8, years: 2 },
  },
  Dart: {
    description:
      "Client-optimized programming language that powers Flutter development, enabling fast apps on any platform.",
    experience:
      "Strong expertise in Dart through extensive Flutter development across numerous industrial and freelance projects. Proficient in advanced language features, asynchronous programming, and optimizing application performance.",
    stats: { projects: 15, years: 3 },
  },
  Xcode: {
    stats: { projects: 8, years: 2 },
  },
  Kotlin: {
    stats: { projects: 8, years: 2 },
  },
  "Next.js": {
    description:
      "React framework for production-grade applications with server-side rendering, static site generation, and API routes.",
    experience:
      "Extensive experience building client web applications using Next.js. Proficient in implementing authentication using Next Auth, server-side rendering, and API routes. Built multiple production-ready applications with focus on performance and SEO optimization.",
    stats: { projects: 12, years: 3 },
  },
  "Next Auth": {
    description:
      "Authentication solution for Next.js applications with support for multiple providers.",
    experience:
      "Implemented authentication in multiple client projects using Next Auth. Experience with various providers including OAuth, credentials, and social logins. Skilled in custom authentication flows and session management.",
    stats: { projects: 8, years: 2 },
  },
  Flask: {
    description: "Micro web framework for Python.",
    experience:
      "Experienced in building lightweight web applications and APIs using Flask. Experienced in implementing authentication, database integration, and handling complex routing. Used Flask for serving machine learning models in production.",
    stats: { projects: 10, years: 2 },
  },
  "Machine Learning": {
    description:
      "Field of AI focused on building systems that learn from data.",
    experience:
      "Developed and deployed various machine learning models using Python. Experience includes image classification, text analysis, and predictive modeling. Proficient in model training, validation, and production deployment.",
    stats: { projects: 4, years: 1 },
  },
  Python: {
    description:
      "High-level programming language known for its simplicity, versatility, and strong support for machine learning.",
    experience:
      "Extensive experience in developing machine learning models and Flask web applications. Proficient in data processing, model training, and API development using Python. Skilled with libraries like NumPy, Pandas, and scikit-learn for data analysis and machine learning implementations.",
    stats: { projects: 8, years: 2 },
  },
  JavaScript: {
    description:
      "High-level, interpreted programming language that conforms to the ECMAScript specification.",
    experience:
      "Strong proficiency in modern JavaScript development, including ES6+ features, async programming, and DOM manipulation.",
    stats: { projects: 15, years: 3 },
  },
  HTML: {
    description:
      "Standard markup language for documents designed to be displayed in a web browser.",
    experience:
      "Strong foundation in semantic HTML5, accessibility practices, and modern web standards.",
    stats: { projects: 15, years: 3 },
  },
  CSS: {
    description:
      "Style sheet language used for describing the presentation of documents.",
    experience:
      "Proficient in modern CSS including Flexbox, Grid, animations, and responsive design. Experience with Tailwind CSS and other frameworks.",
    stats: { projects: 15, years: 3 },
  },
  // Keep other technologies with their full descriptions...
  TypeScript: {
    description:
      "Typed superset of JavaScript that adds optional static typing.",
    experience:
      "Extensive use in Flutter and React projects, implementing type-safe code and interfaces for robust application development.",
    stats: { projects: 12, years: 3 },
  },
  "UI/UX Design Patterns": {
    description:
      "Reusable solutions to common design problems in user interface and experience design.",
    experience:
      "Experienced in implementing modern UI/UX patterns across mobile and web platforms.",
    stats: { projects: 15, years: 3 },
  },
  "Push Notifications": {
    description:
      "System for delivering messages to mobile devices and web applications.",
    experience: "Implemented complex notification systems using FCM and APNs.",
    stats: { projects: 10, years: 2 },
  },
  "Biometric Authentication": {
    description:
      "Security process that relies on unique biological characteristics to verify user's identity.",
    experience:
      "Integrated fingerprint and face recognition in multiple mobile applications.",
    stats: { projects: 8, years: 1 },
  },
  "State Management": {
    description: "Techniques and patterns for managing application state.",
    experience:
      "Extensive experience with various state management solutions across different platforms.",
    stats: { projects: 15, years: 3 },
  },
  "App Performance Optimization": {
    description:
      "Techniques and practices to improve mobile application performance.",
    experience:
      "Expert in profiling and optimizing mobile apps for better performance.",
    stats: { projects: 12, years: 3 },
  },
  Bloc: {
    description:
      "Predictable state management library that helps implement the BLoC (Business Logic Component) pattern in Flutter applications.",
    experience:
      "Extensive experience implementing Bloc pattern in most Flutter mobile applications. Highly proficient with events, states, and business logic separation. Expert in structuring large-scale applications using Bloc architecture for maintainable and testable code.",
    stats: { projects: 12, years: 3 },
  },
  Provider: {
    description:
      "Simple yet powerful state management solution for Flutter applications.",
    experience:
      "Regularly used for dependency injection and state management in Flutter.",
    stats: { projects: 10, years: 2 },
  },
  GetX: {
    description: "Light and powerful solution for Flutter development.",
    experience:
      "Experienced in using GetX for state, route, and dependency management.",
    stats: { projects: 12, years: 3 },
  },
  Riverpod: {
    description:
      "Simple but powerful state management solution that improves upon Provider.",
    experience:
      "Proficient in using Riverpod for robust state management in Flutter.",
    stats: { projects: 10, years: 2 },
  },
  Redux: {
    description: "Predictable state container for JavaScript apps.",
    experience:
      "Experienced in implementing Redux in React and React Native applications.",
    stats: { projects: 8, years: 1 },
  },
  "Firebase (Firestore, FCM, Auth)": {
    description: "Google's mobile and web application development platform.",
    experience:
      "Expert in implementing Firebase services in mobile and web applications.",
    stats: { projects: 20, years: 4 },
  },
  "RESTful APIs": {
    description: "Architectural style for distributed hypermedia systems.",
    experience: "Extensive experience in designing and consuming RESTful APIs.",
    stats: { projects: 15, years: 3 },
  },
  GraphQL: {
    description:
      "Query language for APIs and runtime for fulfilling those queries.",
    experience: "Proficient in building and consuming GraphQL APIs.",
    stats: { projects: 12, years: 3 },
  },
  SQL: {
    description:
      "Standard language for storing, manipulating, and retrieving data in databases.",
    experience: "Strong knowledge of SQL database design and optimization.",
    stats: { projects: 10, years: 2 },
  },
  MongoDB: {
    description: "Cross-platform document-oriented database program.",
    experience: "Experienced in designing and managing MongoDB databases.",
    stats: { projects: 8, years: 1 },
  },
  "Azure DevOps": {
    description:
      "Set of development tools and services provided by Microsoft Azure.",
    experience:
      "Proficient in using Azure DevOps for CI/CD and project management.",
    stats: { projects: 10, years: 2 },
  },
  "GitLab CI/CD": {
    description:
      "Continuous Integration and Continuous Deployment platform integrated with GitLab.",
    experience:
      "Set up and maintained CI/CD pipelines for automated testing, building, and deployment of mobile applications.",
    stats: { projects: 6, years: 2 },
  },
  Fastlane: {
    description: "Tool for iOS and Android deployment and beta distribution.",
    experience:
      "Experienced in automating mobile app deployment using Fastlane.",
    stats: { projects: 10, years: 2 },
  },
  Xcode: {
    description:
      "Integrated development environment for macOS, iOS, watchOS, and tvOS.",
    experience: "Advanced proficiency in Xcode for iOS development.",
    stats: { projects: 15, years: 3 },
  },
  "Android Studio": {
    description:
      "Official integrated development environment for Android development.",
    experience:
      "Regular use for Flutter Android development, native module implementation, and debugging Android-specific issues.",
    stats: { projects: 12, years: 3 },
  },
  JWT: {
    description:
      "JSON Web Tokens - compact URL-safe means of representing claims between parties.",
    experience: "Implemented JWT authentication in multiple applications.",
    stats: { projects: 10, years: 2 },
  },
  TensorFlow: {
    description:
      "Open-source library for machine learning and artificial intelligence.",
    experience:
      "Used TensorFlow Lite for mobile applications, implementing pre-trained models and custom model integration.",
    stats: { projects: 4, years: 1 },
  },
  "Machine Learning": {
    description:
      "Field of AI focused on building systems that learn from data.",
    experience:
      "Developed and deployed various machine learning models using Python. Experience includes image classification, text analysis, and predictive modeling. Proficient in model training, validation, and production deployment.",
    stats: { projects: 4, years: 1 },
  },
  "React Native": {
    description: "Framework for building native apps using React.",
    experience: "Proficient in developing cross-platform mobile applications.",
    stats: { projects: 12, years: 3 },
  },
  "Cloud Services": {
    description: "Various cloud computing services and platforms.",
    experience: "Experience with major cloud platforms and their services.",
    stats: { projects: 20, years: 4 },
  },
  Supabase: {
    description: "Open-source Firebase alternative for building better apps.",
    experience:
      "Experienced in using Supabase for backend and real-time features.",
    stats: { projects: 10, years: 2 },
  },
  PostgreSQL: {
    description: "Powerful, open-source object-relational database system.",
    experience:
      "Used as primary database for web applications, implementing complex queries and database design.",
    stats: { projects: 6, years: 2 },
  },
  SQLite: {
    description:
      "Self-contained, serverless, zero-configuration database engine.",
    experience:
      "Implemented for local data storage in mobile applications, particularly for offline-first features.",
    stats: { projects: 8, years: 2 },
  },
  "Node.js": {
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    experience:
      "Used for building backend services and APIs, particularly in combination with Express.js for web applications.",
    stats: { projects: 10, years: 2 },
  },
  "Express.js": {
    description: "Fast, unopinionated web framework for Node.js.",
    experience:
      "Built RESTful APIs and web services, implementing middleware, routing, and authentication systems.",
    stats: { projects: 8, years: 2 },
  },
  Flask: {
    description: "Micro web framework for Python.",
    experience:
      "Experienced in building lightweight web applications and APIs using Flask. Experienced in implementing authentication, database integration, and handling complex routing. Used Flask for serving machine learning models in production.",
    stats: { projects: 10, years: 2 },
  },
  "Next.js": {
    description:
      "React framework for production-grade applications with server-side rendering and static site generation.",
    experience:
      "Extensive experience building performant and SEO-friendly web applications with Next.js.",
    stats: { projects: 12, years: 3 },
  },
  Flutter: {
    description:
      "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    experience:
      "Extensive experience developing cross-platform applications including mobile apps and web applications using Flutter. Proficient in state management, custom widgets, and platform integration.",
    stats: { projects: 15, years: 3 },
  },
  Dart: {
    description:
      "Client-optimized language for fast apps on any platform. The foundation language for Flutter development.",
    experience:
      "Strong expertise in Dart programming, including asynchronous programming, strong typing, and object-oriented concepts. Used extensively in Flutter development.",
    stats: { projects: 15, years: 3 },
  },
  Swift: {
    description:
      "Apple's modern programming language for iOS, macOS, watchOS, and tvOS development.",
    experience:
      "Experience with native iOS platform-specific implementations and customizations in Flutter projects. Proficient in implementing native Swift modules and platform channels for enhanced iOS functionality.",
    stats: { projects: 8, years: 2 },
  },
  Kotlin: {
    description:
      "Modern programming language for Android development that is fully interoperable with Java.",
    experience:
      "Hands-on experience with Android native implementations in Flutter projects. Skilled in developing Kotlin-based platform-specific code and method channels for enhanced Android functionality.",
    stats: { projects: 8, years: 2 },
  },
  Authentication: {
    description:
      "Firebase Authentication service for secure user authentication and identity management.",
    experience:
      "Implemented multiple authentication methods including email/password, Google, Apple, and Facebook sign-in across various applications.",
    stats: { projects: 10, years: 3 },
  },
  Firestore: {
    description:
      "NoSQL cloud database by Firebase for real-time data synchronization.",
    experience:
      "Used Firestore for testimonials in client projects and as primary database for smaller applications. Experienced with real-time data updates and offline persistence.",
    stats: { projects: 8, years: 2 },
  },
  "Dynamic Links": {
    description:
      "Firebase service for creating smart URLs that dynamically adapt to different platforms.",
    experience:
      "Implemented as a feature in applications for deep linking and referral systems. Aware of upcoming deprecation and alternative solutions.",
    stats: { projects: 4, years: 1 },
  },
  "App Distribution": {
    description:
      "Firebase service for distributing app builds to testers and stakeholders.",
    experience:
      "Used for APK distribution in development and testing phases. Streamlined the testing process with automated build distribution.",
    stats: { projects: 6, years: 2 },
  },
  Analytics: {
    description:
      "Firebase Analytics for tracking user behavior and app performance metrics.",
    experience:
      "Implemented in major industrial mobile applications for user behavior tracking, conversion monitoring, and business metrics analysis.",
    stats: { projects: 8, years: 2 },
  },
  "Performance Monitoring": {
    description:
      "Firebase service for monitoring and analyzing app performance in real-time.",
    experience:
      "Utilized in large-scale industrial applications to track and optimize app performance, network requests, and resource usage.",
    stats: { projects: 8, years: 2 },
  },
  "Azure Repos": {
    description:
      "Version control system within Azure DevOps for managing source code and git workflows.",
    experience:
      "Extensive experience managing large-scale mobile application codebases through Azure Repos. Proficient in git workflows, branch policies, and code distribution strategies for enterprise-level projects.",
    stats: { projects: 8, years: 2 },
  },
  "Azure Pipelines (CI/CD)": {
    description:
      "Continuous Integration and Continuous Delivery platform within Azure DevOps.",
    experience:
      "Built and maintained automated CI/CD pipelines for mobile applications, handling artifact generation and automated distribution of APK and IPA files. Experienced in configuring build agents, release pipelines, and deployment strategies.",
    stats: { projects: 8, years: 2 },
  },
  "Azure Artifacts": {
    description:
      "Package management solution in Azure DevOps for hosting and sharing packages.",
    experience:
      "Used Azure Artifacts to manage and share custom packages, dependencies, and build artifacts across mobile application projects. Experienced in setting up feed permissions and managing versioned packages.",
    stats: { projects: 8, years: 2 },
  },
  "Azure Boards": {
    description:
      "Project management tool in Azure DevOps for planning, tracking, and discussing work.",
    experience:
      "Utilized Azure Boards for managing large-scale mobile application development lifecycles. Experienced in creating and managing sprints, tracking features, and coordinating development efforts across teams.",
    stats: { projects: 8, years: 2 },
  },
  "Cloud Storage": {
    description: "Google Cloud service for object storage and serving.",
    experience:
      "Implemented file storage solutions for mobile applications, managing media files and application assets.",
    stats: { projects: 8, years: 2 },
  },
  "Cloud Functions": {
    description:
      "Serverless compute service that runs code in response to events.",
    experience:
      "Developed serverless functions for backend processing, notifications, and data transformations.",
    stats: { projects: 6, years: 2 },
  },
  "Cloud Run": {
    description: "Fully managed platform for containerized applications.",
    experience:
      "Deployed containerized services for mobile application backends, managing scaling and deployment configurations.",
    stats: { projects: 4, years: 1 },
  },
  PyTorch: {
    description:
      "Open-source machine learning library developed by Facebook's AI Research lab.",
    experience:
      "Used PyTorch for developing and training deep learning models alongside TensorFlow. Experience in implementing neural networks and working with pre-trained models for computer vision and NLP tasks.",
    stats: { projects: 4, years: 1 },
  },
  "React Native": {
    description:
      "Framework for building native mobile applications using React and JavaScript/TypeScript.",
    experience:
      "Built cross-platform mobile applications using React Native alongside Flutter. Proficient in native module integration, platform-specific implementations, and performance optimization. Experience with React Navigation, state management, and native APIs.",
    stats: { projects: 6, years: 2 },
  },
};

// Update SkillStats interface
interface SkillStats {
  projects: number;
  years: number;
}

// Update SkillStats component
const SkillStats: React.FC<{ stats: SkillStats }> = ({ stats }) => {
  return (
    <div className="flex gap-4 mt-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
      <div className="flex-1 flex items-center gap-3 px-4 border-r border-gray-200 dark:border-gray-700">
        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
          <span className="text-xl font-bold text-green-600 dark:text-green-400">
            {stats.projects}+
          </span>
        </div>
        <div className="text-sm">
          <div className="text-gray-600 dark:text-gray-400">Projects</div>
          <div className="text-gray-900 dark:text-gray-200 font-medium">
            Completed
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center gap-3 px-4">
        <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
          <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
            {stats.years}+
          </span>
        </div>
        <div className="text-sm">
          <div className="text-gray-600 dark:text-gray-400">Years of</div>
          <div className="text-gray-900 dark:text-gray-200 font-medium">
            Experience
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [openSections, setOpenSections] = useState<string[]>([]);

  const handleSkillSelect = (skillName: string) => {
    setSelectedSkill(skillName);
  };

  const handleSectionToggle = (sectionPath: string) => {
    const getParent = (p: string) => {
      const idx = p.lastIndexOf("/");
      return idx === -1 ? "" : p.slice(0, idx);
    };

    setOpenSections((prev) => {
      const isCurrentlyOpen = prev.includes(sectionPath);
      if (isCurrentlyOpen) {
        // Close this folder and all of its descendant paths
        return prev.filter(
          (p) => !(p === sectionPath || p.startsWith(sectionPath + "/"))
        );
      }

      // We're opening this folder. Close any sibling folders at the same level (and their descendants).
      const parent = getParent(sectionPath);
      const siblings = prev.filter(
        (p) => getParent(p) === parent && p !== sectionPath
      );

      const withoutSiblings = prev.filter((p) => {
        // Remove sibling paths and anything under them
        return !siblings.some((sib) => p === sib || p.startsWith(sib + "/"));
      });

      return [...withoutSiblings, sectionPath];
    });
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and tools I'm
            proficient in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left side - File Tree */}
            <div className="md:w-2/5 p-6 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Skill Categories
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Click on any skill to view detailed information
                  </p>
                </div>
                <div className="font-mono">
                  {skillsTreeData.map((item) => (
                    <TreeNode
                      key={item.name}
                      item={item}
                      selectedFile={selectedSkill}
                      onFileSelect={handleSkillSelect}
                      openSections={openSections}
                      onSectionToggle={handleSectionToggle}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Skill Description */}
            <div className="md:w-3/5 p-8">
              {selectedSkill ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    {TechnologyIcons[
                      selectedSkill as keyof typeof TechnologyIcons
                    ]?.() || <FileIcon />}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedSkill}
                    </h3>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="p-5 border-b border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-3">
                        <svg
                          className="w-5 h-5 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Description
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {skillDescriptions[selectedSkill]?.description}
                      </p>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Experience
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {skillDescriptions[selectedSkill]?.experience}
                      </p>
                    </div>
                  </div>

                  <SkillStats
                    stats={
                      skillDescriptions[selectedSkill]?.stats || {
                        projects: 0,
                        years: 0,
                      }
                    }
                  />
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center max-w-sm mx-auto">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-gray-400 dark:text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Select a Skill
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Choose a skill from the tree to view detailed information
                      about my experience and expertise.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
