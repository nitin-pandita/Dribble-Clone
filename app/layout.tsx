import Navbar from "@/components/Navbar";
import "./global.css";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Dribble Clone",
  description:
    "Dribble clone made using next js, discovering the power of next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
