import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex flex-col min-h-[100dvh]`}>
      <Header />
      <main className="flex-grow overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
