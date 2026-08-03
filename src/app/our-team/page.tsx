import Hero from "./sections/hero";
import TeamPage from "./sections/main";
import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import IntroTeam from "./sections/intro";

export const metadata: Metadata = {
  title: "Meet Our Team | The APEC Group",
  description:
    "Meet The APEC Group’s expert team, delivering innovative petroleum solutions since 1989. Learn about our dedicated professionals.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.theapecgroup.com/our-team",
  },
  openGraph: {
    title: "Meet Our Team | The APEC Group",
    description: "Meet The APEC Group’s expert team, delivering innovative petroleum solutions since 1989. Learn about our dedicated professionals.",
  },
  twitter: {
    title: "Meet Our Team | The APEC Group",
    description: "Meet The APEC Group’s expert team, delivering innovative petroleum solutions since 1989. Learn about our dedicated professionals.",
  },
};

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <IntroTeam />
      <TeamPage />
      <Footer />
    </div>
  );
};

export default About;
