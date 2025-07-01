import { BackgroundProvider } from '@/contexts/BackgroundContext';
import ClientLayoutWrapper from './ClientLayoutWrapper';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <BackgroundProvider>
      <ClientLayoutWrapper>
        <Header />
        {children}
        <Footer />
      </ClientLayoutWrapper>
    </BackgroundProvider>
  );
}