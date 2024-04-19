import type { Metadata } from "next";
import Header from "@/components/navigation/header";
import Providers from "@/lib/providers/providers";
import Toast from "@/components/ui/toast";

export const metadata: Metadata = {
  title: "Cucina Felice",
  description: "Authentic Italian Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <Header />
      {children}
      <Toast />
    </Providers>
  );
}
