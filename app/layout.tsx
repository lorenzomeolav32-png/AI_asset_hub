import type { Metadata } from "next";
import { Geist, Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Backdrop } from "@/components/backdrop";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieNotice } from "@/components/cookie-notice";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const DEFAULT_TITLE =
  "AI Assets Directory — verified AI assets & guides for developers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · AI Assets Directory",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${chakra.variable} ${jetbrains.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Backdrop />
          <JsonLd data={[organizationSchema(), websiteSchema()]} />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <CookieNotice />
        </ThemeProvider>
      </body>
    </html>
  );
}
