import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ATS Formatter — Format LinkedIn Job Posts for ATS Systems',
  description: 'Convert LinkedIn job descriptions into ATS-optimized formats for Indeed, Workday, Greenhouse, and more. Save time and improve hiring efficiency.',
  keywords: 'ATS formatter, LinkedIn job posting, applicant tracking system, HR tools, job description formatter',
  openGraph: {
    title: 'ATS Formatter — Format LinkedIn Job Posts for ATS Systems',
    description: 'Convert LinkedIn job descriptions into ATS-optimized formats for Indeed, Workday, Greenhouse, and more.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5584d0d2-fef7-4e97-902f-8d9062944ae0"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
