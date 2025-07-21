import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details | Seniru",
  description: "Detailed information about my projects and work.",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
