import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "ContextCafe – Constitutional Law Explained with Context",
    template: "%s | ContextCafe",
  },
  description:
    "ContextCafe is an educational platform for understanding constitutional law, judicial interpretation, and legal drafting with clarity and context.",
  metadataBase: new URL("https://contextcafe.com"),
  alternates: {
    canonical: "https://contextcafe.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
