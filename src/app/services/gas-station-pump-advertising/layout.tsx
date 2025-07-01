import { BackgroundProvider } from '@/contexts/BackgroundContext';
import ClientLayoutWrapper from './ClientLayoutWrapper';

export default function ServicesLinkLayout({ children }: { children: React.ReactNode }) {
  return (
    <BackgroundProvider>
      <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
    </BackgroundProvider>
  );
}