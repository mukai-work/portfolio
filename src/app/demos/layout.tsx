import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return <div data-demo className={spaceGrotesk.variable}>{children}</div>;
}
